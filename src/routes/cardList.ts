import { Router, Request, Response } from 'express';
import { createCardList } from '../controllers/cardList';

const route = Router();

route.post('/', async (req, res) => {
  const cardList = await createCardList(req.body);
  res.send(cardList);
});

export default route;
