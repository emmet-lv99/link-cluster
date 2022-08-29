const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const tmp = 'test message'

app.get('/api/test', (req, res) => {
  res.send(tmp)
});

app.listen(port, () => {
  // console.log(`server is listening at localhost:${process.env.PORT}`);
  console.log(`server is listening at localhost:${port}`);
});
