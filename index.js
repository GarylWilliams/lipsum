//We are running in the framework express so this must be at the beginning of the app


const express = require('express');
const app = express();

//Loading lorem ipsum to call text 

var loremIpsum = require('lorem-ipsum'), output = loremIpsum({count: 3, units:'paragraph', format:'html'});

//the client is calling the lorem ipsum plug dependency
app.get('/lorem', function (req, res) {
  res.send(output);
});



app.listen(3000, function () {
  console.log('Successfully started express application!')
});  