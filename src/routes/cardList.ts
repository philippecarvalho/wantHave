import { Router, Request, Response } from 'express';
import { getCardsFromScryfall } from '../controllers/cardList';

const route = Router();

route.post('/', async (req, res) => {
  const cardList = await getCardsFromScryfall(req.body);
  res.send(cardList);
});

export default route;
