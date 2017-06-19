//We are running in the framework express so this must be at the beginning of the app


const express = require('express');
const app = express();

//Loading lorem ipsum to call text 

var loremIpsum = require('lorem-ipsum');

//output = loremIpsum({count:req.params.number, units:'paragraph', format:'html'});

//asking for a number back from input for number of paragraphs (parameters) 

app.get('/lorem/:number', function(req, res) {
  res.send(loremIpsum({count:req.params.number, units:'paragraph', format:'html'}));
});



app.listen(3000, function () {
  console.log('Successfully started express application!')
});  