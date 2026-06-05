# Blog Services API

A backend server for a blog service built with Express and MongoDB. This project supports user registration and authentication, blog CRUD operations, and nested comment threads.

## Features

- User registration and login with JWT authentication
- Protected routes for creating, updating, and deleting blogs
- Public blog list and blog detail retrieval
- Comment creation with parent comment support for threaded replies
- Comments retrieval by blog post ID, returning a nested comment tree
- MongoDB data persistence with Mongoose models
- Structured services, repositories, controllers, and middleware

## Technology Stack

- Node.js
- Express
- MongoDB / Mongoose
- JSON Web Tokens (`jsonwebtoken`)
- Bcrypt password hashing (`bcryptjs`)
- CORS and cookie parsing
- Pino logging

## Project Structure

- `src/app.js` - Express application and global error handler
- `src/server.js` - Server startup and database connection
- `src/config/db.js` - MongoDB connection
- `src/routes/` - API route definitions
- `src/controllers/` - Request handlers and response formatting
- `src/services/` - Business logic layer
- `src/repositories/` - Database access layer
- `src/models/` - Mongoose schemas and models
- `src/middlewares/protect.js` - JWT authentication middleware
- `src/utils/jwt.js` - Token generation and verification
- `src/utils/logger.js` - Pretty logging with Pino

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mahfuzeee/blog-services-api.git
   cd blog-services-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add the required environment variables:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRES_IN=1d
   PORT=3000
   ```

4. Start the server:

   ```bash
   npm run dev
   ```

## API Endpoints

### User Authentication

- `POST /api/v1/user/register`
  - Request body: `{ "name": "...", "email": "...", "password": "..." }`
  - Registers a new user

- `POST /api/v1/user/login`
  - Request body: `{ "email": "...", "password": "..." }`
  - Returns an access token and user details

- `GET /api/v1/user/me`
  - Protected route
  - Returns the authenticated user's profile

- `POST /api/v1/user/logout`
  - Returns a logout success message

### Blog Routes

- `GET /api/v1/blogs/`
  - Public route
  - Returns all blogs with author details

- `GET /api/v1/blogs/:id`
  - Public route
  - Returns a single blog by ID

- `POST /api/v1/blogs/`
  - Protected route
  - Request body: `{ "title": "...", "content": "..." }`
  - Creates a new blog authored by the authenticated user

- `PUT /api/v1/blogs/:id`
  - Protected route
  - Updates a blog by ID

- `DELETE /api/v1/blogs/:id`
  - Protected route
  - Deletes a blog by ID

### Comment Routes

- `POST /api/v1/comments/`
  - Protected route
  - Request body: `{ "blogId": "...", "comment": "...", "parentComment": "..." }`
  - Adds a comment to a blog, optionally replying to another comment

- `GET /api/v1/comments/:blogId`
  - Public route
  - Returns comments for a blog post, structured as a nested tree

## Authentication

Protected routes require a JWT token in the `Authorization` header:

```http
Authorization: Bearer <token>
```

Tokens are created during login and verified by the `protect` middleware.

## Notes

- Passwords are hashed with `bcryptjs` before storage.
- Blog authors and comment users are stored as Mongoose references.
- Comment retrieval builds a hierarchical reply tree for nested replies.

## Running in Production

Use the standard start script for production:

```bash
npm start
```

Ensure `MONGO_URI`, `JWT_SECRET`, and `JWT_EXPIRES_IN` are set in your environment.

## License

This project is licensed under ISC.
