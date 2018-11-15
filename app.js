const express = require('express');
const app = express();
//const port = 3000;
var path = require('path');
app.use(express.static('public'))

app.get('/', (req, res) =>     res.sendFile(path.join(__dirname + '/index.html')));

app.listen(() => console.log(`three.js playground app running on !`));