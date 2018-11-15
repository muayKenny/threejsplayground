const express = require('express');
const app = express();
//const port = 3000;
var path = require('path');
app.use(express.static('public'))

app.get('/', (req, res) =>     res.sendFile(path.join(__dirname + '/index.html')));

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });