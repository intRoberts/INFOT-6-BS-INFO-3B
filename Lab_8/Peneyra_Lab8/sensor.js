const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect', () => {
    console.log('Sensor connected to MQTT');

    // Simulate sending data
    setInterval(() => {
        const temp = Math.random() * 30 + 20; // Random temp 20-50
        const payload = {
            sensor_id: 'WH_01',
            temp: Math.round(temp * 10) / 10,
            unit: 'C'
        };
        client.publish('warehouse/temp', JSON.stringify(payload));
        console.log('Published:', payload);
    }, 5000); // Every 5 seconds
});