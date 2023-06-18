import express from 'express';
const app = express();
const port = 3000;

app.get('/', (_req, res) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`The server is running on port ${port}!`);
});
