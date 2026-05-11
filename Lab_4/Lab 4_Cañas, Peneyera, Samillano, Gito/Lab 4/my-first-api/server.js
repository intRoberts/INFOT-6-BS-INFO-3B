const express = require('express');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// GET Endpoint
app.get('/api/greeting', (req, res) => {
    res.status(200).json({
        message: "Hello! Your API is working."
    });
});

// POST Endpoint
app.post('/api/echo', (req, res) => {

    const data = req.body;

    res.status(201).json({
        success: true,
        message: "Data received successfully",
        data: data
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});