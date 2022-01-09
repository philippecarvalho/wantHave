import mongoose, { Schema, model } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const connection = mongoose.createConnection();
autoIncrement.initialize(connection)

interface Card {
  cardTitle: string;
  quantity: number;
  imageURI: string;
  user: number;
}

interface CardList {
  listTitle: string;
  cards: Card[];
}

const schema = new Schema<CardList>({
  listTitle: { type: String, required: true },
  cards: [
    {
      cardTitle: { type: String, required: true },
      quantity: { type: Number, required: true },
      imageURI: { type: String, required: true },
      user: { type: Number, required: true },
    }
  ]
});

schema.plugin(autoIncrement.plugin, 'CardList');
export const CardModel = model<CardList>('CardList', schema);
