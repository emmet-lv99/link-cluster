const express = require('express');
const app = express();
// const port = process.env.PORT || 3000;
const port = 3000;

const auth = {test : 'test message'}

app.get('/api/auth', (req, res) => {
  res.send(auth)
});

app.listen(port, () => {
  // console.log(`server is listening at localhost:${process.env.PORT}`);
  console.log(`server is listening at localhost:${port}`);
});
