import axios from 'axios';
import { CardModel, Card } from '../models/Card';

interface ReqBody {
  listTitle: string;
  userId: number;
  cards: Card[];
}

const getQuantity = (cardName, reqBod) => {
  const cardItem = reqBod.find(
    (card) => card.name.toLowerCase() === cardName.toLowerCase()
  );

  return cardItem.quantity;
};

export const getCardsFromScryfall = async (reqBody: ReqBody) => {
  const scryFallResponse = await axios({
    method: 'POST',
    url: 'https://api.scryfall.com/cards/collection',
    data: {
      identifiers: reqBody.cards,
    },
  });

  const cards = [];

  scryFallResponse.data.data.forEach((card) => {
    const cardObj = {
      cardTitle: card.name,
      imageURI: card.image_uris.normal,
      quantity: getQuantity(card.name, reqBody.cards),
    };
    cards.push(cardObj);
  });

  const cardList = new CardModel({
    listTitle: reqBody.listTitle,
    user: reqBody.userId,
    cards: cards,
  });

  return await cardList
    .save()
    .then((res) => res)
    .catch((error) => error);
};
