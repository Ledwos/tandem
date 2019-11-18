const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});
app.listen(8080, () => console.log("We're live on port 8080!"));
