import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cardListRouter from './routes/cardList';

dotenv.config();

mongoose.connect(process.env.DB_URL).catch((e) => console.log(e));

const app = express();
app.use(express.json());
app.use('/cardlist', cardListRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Want/Have');
});

app.listen(process.env.PORT, () => {
  return console.log(
    `Express is listening at http://localhost:${process.env.PORT}`
  );
});
