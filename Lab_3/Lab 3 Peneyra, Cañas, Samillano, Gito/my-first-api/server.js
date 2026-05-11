const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api/greeting', (req, res) => {
	res.status(200).json({ message: 'Hello! Your API is working.' });
});

app.post('/api/echo', (req, res) => {
	const receivedData = req.body;

	res.status(201).json({
		message: 'Data received successfully.',
		data: receivedData,
	});
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
