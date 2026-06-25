const express = require('express');
const app = express();
app.use(express.json());

const API_KEY = 'warehouse-api-key-123'; // Simple API key

app.post('/alerts', (req, res) => {
    const auth = req.headers['authorization'];
    if (auth !== `Bearer ${API_KEY}`) {
        return res.status(401).send('Unauthorized');
    }

    const { sensor_id, temp, unit } = req.body;
    console.log(`Alert received: Sensor ${sensor_id}, Temp ${temp}${unit}`);

    // Simulate actions
    console.log('Logging incident in maintenance module...');
    console.log('Sending push notification to warehouse manager...');
    console.log('Activating HVAC system...');

    res.send('Alert processed');
});

app.listen(3000, () => {
    console.log('ERP server running on port 3000');
});