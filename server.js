var express = require('express');
var app = express();

app.get('/:date', function (req, res) {
  var date = req.params.date;
  if(isNaN(Number(date))) {
    date = new Date(date);
  } else {
    date = new Date(date * 1000);
  }
  var time = {};
  time.unix = Number(date.getTime()/1000);
  if (isNaN(time.unix)) {
    time.natural = null;
  } else {
    time.natural = (date).toString();
  }
  
  res.send(time);
  
  
})

app.listen(8080, function () {
  console.log('Timestamp server is running');
})
