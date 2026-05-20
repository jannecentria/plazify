const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'plazify-secret-key';

// Middleware
const allowedOriginPattern = /^http:\/\/(localhost|127\.0\.0\.1):\d+$/;

app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOriginPattern.test(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error('Not allowed by CORS'));
  },
  credentials: true
}));
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb', extended: true }));
app.use(cookieParser());
app.use(session({
  secret: JWT_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 } // 24 hours
}));

// Database setup
const db = new sqlite3.Database('./plazify.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
    initializeDatabase();
  }
});

// Initialize database tables
function initializeDatabase() {
  const tables = [
    `CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT NOT NULL,
      centerId TEXT,
      displayName TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`,
    `CREATE TABLE IF NOT EXISTS centers (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      city TEXT NOT NULL,
      address TEXT,
      zip TEXT,
      type TEXT,
      status TEXT,
      phone TEXT,
      website TEXT,
      hours TEXT,
      stores INTEGER,
      parking TEXT,
      icon TEXT,
      description TEXT,
      floors TEXT,
      amenities TEXT,
      cardColor TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`,
    `CREATE TABLE IF NOT EXISTS posts (
      id TEXT PRIMARY KEY,
      centerId TEXT NOT NULL,
      type TEXT NOT NULL,
      title TEXT NOT NULL,
      description TEXT,
      startDate TEXT,
      endDate TEXT,
      discount INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (centerId) REFERENCES centers (id)
    )`,
    `CREATE TABLE IF NOT EXISTS stores (
      id TEXT PRIMARY KEY,
      centerId TEXT NOT NULL,
      name TEXT NOT NULL,
      category TEXT,
      floor TEXT,
      phone TEXT,
      hours TEXT,
      website TEXT,
      description TEXT,
      image TEXT,
      imageZoom INTEGER,
      imagePosX INTEGER,
      imagePosY INTEGER,
      type TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (centerId) REFERENCES centers (id)
    )`
  ];

  let completed = 0;
  tables.forEach(sql => {
    db.run(sql, (err) => {
      if (err) {
        console.error('Error creating table:', err);
      } else {
        completed++;
        if (completed === tables.length) {
          // All tables created, now run lightweight migrations and seed data
          migrateDatabase();
        }
      }
    });
  });
}

function addColumnIfMissing(table, column, definition, done) {
  db.all(`PRAGMA table_info(${table})`, [], (err, rows) => {
    if (err) {
      console.error(`Error reading ${table} schema:`, err);
      done();
      return;
    }

    if (rows.some(row => row.name === column)) {
      done();
      return;
    }

    db.run(`ALTER TABLE ${table} ADD COLUMN ${column} ${definition}`, alterErr => {
      if (alterErr) console.error(`Error adding ${table}.${column}:`, alterErr);
      done();
    });
  });
}

function migrateDatabase() {
  const migrations = [
    done => addColumnIfMissing('stores', 'image', 'TEXT', done),
    done => addColumnIfMissing('stores', 'imageZoom', 'INTEGER', done),
    done => addColumnIfMissing('stores', 'imagePosX', 'INTEGER', done),
    done => addColumnIfMissing('stores', 'imagePosY', 'INTEGER', done)
  ];

  let index = 0;
  const next = () => {
    const migration = migrations[index++];
    if (!migration) {
      seedInitialData();
      return;
    }
    migration(next);
  };

  next();
}

// Seed initial users
// TEST CREDENTIALS (only for development):
// - admin / admin123 (Super Admin role)
// - manager1 / mall123 (Manager role)
// - manager2 / shop456 (Manager role)
function seedInitialData() {
  const users = [
    { id: 'u_admin', username: 'admin', password: bcrypt.hashSync('admin123', 10), role: 'admin', centerId: null, displayName: 'Super Admin' },
    { id: 'u_mgr1', username: 'manager1', password: bcrypt.hashSync('mall123', 10), role: 'manager', centerId: null, displayName: 'Mall Manager 1' },
    { id: 'u_mgr2', username: 'manager2', password: bcrypt.hashSync('shop456', 10), role: 'manager', centerId: null, displayName: 'Mall Manager 2' },
    { id: 'u_user1', username: 'user1', password: bcrypt.hashSync('user123', 10), role: 'user', centerId: null, displayName: 'Normal User' }
  ];

  users.forEach(user => {
    db.run(`INSERT OR IGNORE INTO users (id, username, password, role, centerId, displayName) VALUES (?, ?, ?, ?, ?, ?)`,
      [user.id, user.username, user.password, user.role, user.centerId, user.displayName]);
  });
}

// Authentication middleware
function authenticateToken(req, res, next) {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
}

// Routes

// Login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  db.get('SELECT * FROM users WHERE username = ?', [username], (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role, centerId: user.centerId, displayName: user.displayName },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.cookie('token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
    res.json({
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
        centerId: user.centerId,
        displayName: user.displayName
      }
    });
  });
});

// Logout
app.post('/api/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out successfully' });
});

// Get current user
app.get('/api/me', authenticateToken, (req, res) => {
  res.json({ user: req.user });
});

// Users API
app.get('/api/users', authenticateToken, (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required' });
  }

  db.all('SELECT id, username, role, centerId, displayName, created_at FROM users', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(rows);
  });
});

app.put('/api/users/:id', authenticateToken, (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required' });
  }

  const { password, centerId } = req.body;
  const updates = [];
  const params = [];

  db.get('SELECT id, role FROM users WHERE id = ?', [req.params.id], (findErr, targetUser) => {
    if (findErr) {
      return res.status(500).json({ error: 'Database error' });
    }

    if (!targetUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (password) {
      updates.push('password = ?');
      params.push(bcrypt.hashSync(password, 10));
    }

    if (centerId !== undefined || targetUser.role === 'user') {
      updates.push('centerId = ?');
      params.push(targetUser.role === 'manager' ? centerId : null);
    }

    if (updates.length === 0) {
      return res.status(400).json({ error: 'No updates provided' });
    }

    params.push(req.params.id);

    db.run(`UPDATE users SET ${updates.join(', ')} WHERE id = ?`, params, function(err) {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      res.json({ message: 'User updated successfully' });
    });
  });
});

app.delete('/api/users/:id/center', authenticateToken, (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required' });
  }

  db.run('UPDATE users SET centerId = NULL WHERE id = ?', [req.params.id], function(err) {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json({ message: 'User updated successfully' });
  });
});

// Centers API
app.get('/api/centers', (req, res) => {
  db.all('SELECT * FROM centers ORDER BY created_at DESC', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(rows);
  });
});

app.post('/api/centers', authenticateToken, (req, res) => {
  if (!['admin', 'manager'].includes(req.user.role)) {
    return res.status(403).json({ error: 'Access denied' });
  }

  const { name, city, address, zip, type, status, phone, website, hours, stores, parking, icon, description, floors, amenities, cardColor } = req.body;

  if (!name || !city) {
    return res.status(400).json({ error: 'Name and city are required' });
  }

  const id = 'c_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);

  db.run(`INSERT INTO centers (id, name, city, address, zip, type, status, phone, website, hours, stores, parking, icon, description, floors, amenities, cardColor)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [id, name, city, address, zip, type, status, phone, website, hours, stores, parking, icon, description, floors, amenities, cardColor],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      res.json({ id, message: 'Center created successfully' });
    });
});

app.put('/api/centers/:id', authenticateToken, (req, res) => {
  if (!['admin', 'manager'].includes(req.user.role)) {
    return res.status(403).json({ error: 'Access denied' });
  }

  const { name, city, address, zip, type, status, phone, website, hours, stores, parking, icon, description, floors, amenities, cardColor } = req.body;
  const id = req.params.id;

  if (req.user.role === 'manager' && req.user.centerId !== id) {
    return res.status(403).json({ error: 'Access denied' });
  }

  db.run(`UPDATE centers SET name=?, city=?, address=?, zip=?, type=?, status=?, phone=?, website=?, hours=?, stores=?, parking=?, icon=?, description=?, floors=?, amenities=?, cardColor=?, updated_at=CURRENT_TIMESTAMP
          WHERE id=?`,
    [name, city, address, zip, type, status, phone, website, hours, stores, parking, icon, description, floors, amenities, cardColor, id],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      res.json({ message: 'Center updated successfully' });
    });
});

app.delete('/api/centers/:id', authenticateToken, (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied' });
  }

  const id = req.params.id;

  // Delete related posts and stores first
  db.run('DELETE FROM posts WHERE centerId = ?', [id]);
  db.run('DELETE FROM stores WHERE centerId = ?', [id]);

  db.run('DELETE FROM centers WHERE id = ?', [id], function(err) {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json({ message: 'Center deleted successfully' });
  });
});

// Posts API
app.get('/api/posts', (req, res) => {
  db.all('SELECT * FROM posts ORDER BY created_at DESC', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(rows);
  });
});

app.post('/api/posts', authenticateToken, (req, res) => {
  if (!['admin', 'manager'].includes(req.user.role)) {
    return res.status(403).json({ error: 'Access denied' });
  }

  const { centerId, type, title, description, startDate, endDate, discount } = req.body;

  if (!centerId || !type || !title) {
    return res.status(400).json({ error: 'Center, type, and title are required' });
  }

  const id = 'p_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);

  db.run(`INSERT INTO posts (id, centerId, type, title, description, startDate, endDate, discount)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [id, centerId, type, title, description, startDate, endDate, discount],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      res.json({ id, message: 'Post created successfully' });
    });
});

app.put('/api/posts/:id', authenticateToken, (req, res) => {
  if (!['admin', 'manager'].includes(req.user.role)) {
    return res.status(403).json({ error: 'Access denied' });
  }

  const { centerId, type, title, description, startDate, endDate, discount } = req.body;
  const id = req.params.id;

  if (!centerId || !type || !title) {
    return res.status(400).json({ error: 'Center, type, and title are required' });
  }

  db.run(
    `UPDATE posts SET centerId=?, type=?, title=?, description=?, startDate=?, endDate=?, discount=? WHERE id=?`,
    [centerId, type, title, description, startDate, endDate, discount, id],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      res.json({ message: 'Post updated successfully' });
    }
  );
});

app.delete('/api/posts/:id', authenticateToken, (req, res) => {
  if (!['admin', 'manager'].includes(req.user.role)) {
    return res.status(403).json({ error: 'Access denied' });
  }

  db.run('DELETE FROM posts WHERE id = ?', [req.params.id], function(err) {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json({ message: 'Post deleted successfully' });
  });
});

// Stores API
app.get('/api/stores', (req, res) => {
  db.all('SELECT * FROM stores ORDER BY created_at DESC', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(rows);
  });
});

app.post('/api/stores', authenticateToken, (req, res) => {
  if (!['admin', 'manager'].includes(req.user.role)) {
    return res.status(403).json({ error: 'Access denied' });
  }

  const { centerId, name, category, floor, phone, hours, website, description, image, imageZoom, imagePosX, imagePosY, type } = req.body;

  if (!centerId || !name || !type) {
    return res.status(400).json({ error: 'Center, name, and type are required' });
  }

  const id = 's_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);

  db.run(`INSERT INTO stores (id, centerId, name, category, floor, phone, hours, website, description, image, imageZoom, imagePosX, imagePosY, type)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [id, centerId, name, category, floor, phone, hours, website, description, image, imageZoom, imagePosX, imagePosY, type],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      res.json({ id, message: 'Store created successfully' });
    });
});

app.put('/api/stores/:id', authenticateToken, (req, res) => {
  if (!['admin', 'manager'].includes(req.user.role)) {
    return res.status(403).json({ error: 'Access denied' });
  }

  const { centerId, name, category, floor, phone, hours, website, description, image, imageZoom, imagePosX, imagePosY, type } = req.body;
  const id = req.params.id;

  db.run(`UPDATE stores SET centerId=?, name=?, category=?, floor=?, phone=?, hours=?, website=?, description=?, image=?, imageZoom=?, imagePosX=?, imagePosY=?, type=?
          WHERE id=?`,
    [centerId, name, category, floor, phone, hours, website, description, image, imageZoom, imagePosX, imagePosY, type, id],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      res.json({ message: 'Store updated successfully' });
    });
});

app.delete('/api/stores/:id', authenticateToken, (req, res) => {
  if (!['admin', 'manager'].includes(req.user.role)) {
    return res.status(403).json({ error: 'Access denied' });
  }

  db.run('DELETE FROM stores WHERE id = ?', [req.params.id], function(err) {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json({ message: 'Store deleted successfully' });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Plazify backend server running on port ${PORT}`);
});
