const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // Allow frontend to communicate with backend

// Database connection
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Aadya@1234',
    database: 'AlumniStudentPortal',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (email === 'alumini1@gmail.com' && password === 'password123') {
        res.json({ success: true, message: 'Login successful!' });
    } else {
        res.status(401).json({ error: 'Invalid email or password' });
    }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
