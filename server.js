const express = require('express');
const path = require('path');
const transmorgrify = require('./server/routes');

const app = express();
app.use(express.static(path.join(__dirname,'/client/dist/client')));

transmorgrify(app);
app.all("**", (req, res) => res.sendFile(path.join(__dirname,'/client/dist/client/index.html')));

app.listen(8000, function(){
    console.log("listening on 8000");
});
