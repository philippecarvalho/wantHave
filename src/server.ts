import * as dotenv from 'dotenv';
import express from 'express';
const app = express();

dotenv.config();

app.get('/', (req, res) => {
  res.send('Want/Have');
});

app.listen(process.env.PORT, () => {
  return console.log(`Express is listening at http://localhost:${process.env.PORT}`);
});