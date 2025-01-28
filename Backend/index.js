import express from 'express';
const app = express();

app.get('/', (req, res) => {
  console.log('djkjkj');
});

app.listen(3000, () => {
  console.log('server started');
});
