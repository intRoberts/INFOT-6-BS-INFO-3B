const mqtt = require('mqtt');
const axios = require('axios');

const client = mqtt.connect('mqtt://test.mosquitto.org'); // Public broker

client.on('connect', () => {
    console.log('Gateway connected to MQTT');
    client.subscribe('warehouse/temp');
});

client.on('message', (topic, message) => {
    const data = JSON.parse(message.toString());
    console.log('Received:', data);

    if (data.temp > 25) {
        // Trigger alert
        axios.post('http://localhost:3000/alerts', data, {
            headers: {
                'Authorization': 'Bearer warehouse-api-key-123'
            }
        }).then(() => {
            console.log('Alert sent to ERP');
        }).catch(err => {
            console.error('Error sending alert:', err.message);
        });
    } else {
        console.log('Temp normal, logging locally');
    }
});