const express = require('express');
const app = express();
// const port = process.env.PORT || 3000;
const port = 3000;
const bodyParser = require('body-parser')

const auth = {
  userBasicInfo: {
    userId: ''
  }
}

app.use(bodyParser.json())

app.get('/api/auth', (req, res) => {
  res.send(auth)
});

app.post('/api/setUserInfo', (req, res) => {
  auth.userBasicInfo = req.body
  res.send(auth)
});

app.post('/api/setInitialUserId', (req, res) => {
  auth.userBasicInfo.userId = req.body.userId
  res.send(auth)
});

app.listen(port, () => {
  // console.log(`server is listening at localhost:${process.env.PORT}`);
  console.log(`server is listening at localhost:${port}`);
});
