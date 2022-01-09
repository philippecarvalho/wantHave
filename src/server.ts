import dotenv from 'dotenv'
import express from 'express';
import mongoose from 'mongoose';

dotenv.config()

mongoose.connect(process.env.DB_URL);
const app = express();

app.get('/', (req, res) => {
  res.send('Want/Have');
});

app.listen(process.env.PORT, () => {
  return console.log(
    `Express is listening at http://localhost:${process.env.PORT}`
  );
});
