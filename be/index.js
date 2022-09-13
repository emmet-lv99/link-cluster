const express = require('express');
const app = express();
// const port = process.env.PORT || 3000;
const port = 3000;
const bodyParser = require('body-parser')

const auth = {}

app.use(bodyParser.json())

app.get('/api/auth', (req, res) => {
  res.send(auth)
});

app.post('/api/setUserInfo', (req, res) => {
  console.log(req.body.content)
  res.send(auth)

});


app.listen(port, () => {
  // console.log(`server is listening at localhost:${process.env.PORT}`);
  console.log(`server is listening at localhost:${port}`);
});
