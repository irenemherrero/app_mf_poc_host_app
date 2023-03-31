const express = require('express');
const http = require('http');
const path = require('path')

const app = express();

const server = http.createServer(app);

app.use(express.static('dist'))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})


server.listen(process.env.PORT || 8080, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});