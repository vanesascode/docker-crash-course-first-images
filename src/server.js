const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World! This is vanesascode learning Docker')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
