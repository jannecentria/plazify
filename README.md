# Plazify - Shopping Center Platform

A full-stack web application for managing and discovering shopping centers, stores, and events.

## Architecture

- **Frontend**: Vanilla JavaScript with HTML/CSS
- **Backend**: Node.js/Express API with SQLite database
- **Features**: Multi-language support (Finnish, English, Swedish), admin panel, user authentication

## Quick Start

### 1. Install Root Dependencies
```bash
npm install
```

### 2. Install Backend Dependencies
```bash
cd backend
npm install
cd ..
```

### 3. Start Development Servers
```bash
npm run dev
```

Both servers will start:
- **Frontend**: http://127.0.0.1:3000/
- **Backend**: http://127.0.0.1:3001/

## Test Credentials

Login to the admin panel with any of these accounts:

| Username | Password | Role |
|----------|----------|------|
| admin | admin123 | Super Admin |
| manager1 | mall123 | Manager |
| manager2 | shop456 | Manager |
| user1 | user123 | Normal User |

## Features

### Public Features
- Browse shopping centers by location
- View center details, stores, and amenities
- Explore events, sales, and news feed
- Multi-language support (FI/EN/SV)

### Admin Features
- **Centers Management**: Add/edit shopping centers with details
- **Content Management**: Create posts (sales, events, news)
- **Store Directory**: Manage stores, restaurants, and services
- **User Management**: Admin panel for user accounts
- **Role-based Access**: Different permissions for admins and managers

## Project Structure

```
Jannen frontend/
├── package.json           # Root dev dependencies (concurrently, live-server)
├── README.md             # This file
├── .gitignore            # Git ignore rules
├── backend/
│   ├── package.json      # Backend dependencies (express, sqlite3, etc)
│   ├── server.js         # Express API server
│   └── plazify.db        # SQLite database
└── frontend/
    ├── index.html        # Main HTML
    ├── script.js         # Main JavaScript (API integration)
    ├── styles.css        # Styling
    └── translations.js   # Language translations
```

## Database

The application uses SQLite for data persistence. The database file (`plazify.db`) is automatically created on first run and contains:

- **users** - User accounts with roles
- **centers** - Shopping center information
- **posts** - News, events, and sales posts
- **stores** - Stores, restaurants, and services

## Notes

- All data persists in the SQLite database (not localStorage)
- User sessions use JWT tokens with cookie-based authentication
- CORS is configured for local development
- Frontend watches for file changes and auto-reloads
- **Role-based Access**: Different permissions for admins and managers

## API Documentation

See `backend/README.md` for detailed API documentation.

## Demo Data

The application comes with seeded demo users and is ready to use immediately. You can start adding centers, posts, and stores right away.

## Development

- Frontend uses localStorage fallback for development
- Backend provides persistent SQLite storage
- CORS configured for local development
- JWT authentication with session management