import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import SignUpController from './controllers/sign-up.controller.js';
import {getUser} from './controllers/getuser.controller.js';
// Initialize environment variables
dotenv.config();

// Create an Express application
const Server = express();

// Middleware to parse JSON
Server.use(express.json());

// Middleware to serve static files from a directory (e.g., public)
const __dirname = path.resolve();
Server.use(express.static(path.join(__dirname, 'public')));

// Route for sign-up
Server.post('/sign-up', SignUpController);

// Global error handler
Server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something broke!', error: err.message });
});
Server.get('/userdata',getUser)
// Start the server
const port = process.env.PORT || 3001;
Server.listen(port, () => {
    console.log(`Server connected to http://localhost:${port}`);
});
