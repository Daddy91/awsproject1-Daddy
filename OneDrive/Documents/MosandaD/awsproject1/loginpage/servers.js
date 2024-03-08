// server.js
const express = require('express');
const app = express();

// Define a health check endpoint
app.use('/health', (req, res) => {
    //res.status(200).send('OK'); // Respond with a status code of 200 and 'OK'
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const html = '<html><body><h1>Hello World App</h1></body></html>';
    res.end(html);
});

// Start the server on a specific port (e.g., 8080)
const port = 8080;
app.listen(port, () => {
    console.log(`Hello world app started & listening on port ${port}!`);
});
