# Plazify - Shopping Center Platform

A full-stack web application for managing and discovering shopping centers, stores, restaurants, services, events, and offers.

## Architecture

- **Frontend**: Vanilla JavaScript with HTML/CSS
- **Backend**: Node.js/Express API with SQLite database
- **Features**: Multi-language support (Finnish, English, Swedish), public discovery views, user authentication, role-based admin tools, dark mode, and user-specific favorites

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

Use these demo accounts:

| Username | Password | Role |
| --- | --- | --- |
| admin | admin123 | Super Admin |
| manager1 | mall123 | Manager |
| manager2 | shop456 | Manager |
| user1 | user123 | Normal User |

## Features

### Public Features

- Browse shopping centers by name, city, and type
- View center details, opening hours, stores, restaurants/cafes, services, and amenities
- Explore events, sales, and news feed
- Sign in as a normal user and save favorite shopping centers
- Filter shopping centers by favorites
- Multi-language support (FI/EN/SV)
- Light and dark theme support

### Admin Features

- **Centers Management**: Add and edit shopping centers with details, opening hours, and banner images
- **Content Management**: Create posts for sales, events, and news
- **Store Directory**: Manage stores, restaurants/cafes, and services
- **Image Uploads**: Add images for centers, stores, restaurants, and services
- **User Management**: Admin panel for user accounts and manager assignments
- **Role-based Access**: Admins can manage all data; managers can edit only their assigned center; normal users can browse and save favorites

## Project Structure

```text
plazify-main/
|-- package.json           # Root dev scripts and dev dependencies
|-- package-lock.json
|-- README.md              # This file
|-- .gitignore             # Git ignore rules
|-- backend/
|   |-- package.json       # Backend dependencies
|   |-- package-lock.json
|   |-- server.js          # Express API server
|   `-- plazify.db         # SQLite database, created/updated locally
`-- frontend/
    |-- index.html         # Main HTML
    |-- script.js          # Main JavaScript and API integration
    |-- styles.css         # Styling and themes
    `-- translations.js    # Additional translation data
```

## Database

The application uses SQLite for data persistence. The database file (`backend/plazify.db`) is automatically created on first run and contains:

- **users** - User accounts with roles and manager center assignments
- **centers** - Shopping center information
- **posts** - News, events, and sales posts
- **stores** - Stores, restaurants, cafes, and services

## Notes

- Core application data persists in SQLite: users, centers, posts, and stores
- Browser localStorage is used for user preferences such as language, theme, and per-user favorite centers
- User sessions use JWT tokens with cookie-based authentication
- CORS is configured for local development
- Frontend watches for file changes and auto-reloads
- Normal users cannot access the admin portal or manage centers
- Managers can edit only their assigned center

## API

The backend API is implemented in `backend/server.js`.

## Demo Data

The application seeds demo users on first run and is ready to use immediately. You can start adding centers, posts, stores, restaurants, and services right away.

## Development

- Frontend uses the backend API for core data
- Backend provides persistent SQLite storage
- CORS is configured for local development
- JWT authentication uses cookie-based sessions
