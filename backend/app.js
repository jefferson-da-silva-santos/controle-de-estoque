import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(200).send('Ok');
});

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});