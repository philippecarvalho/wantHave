import dotenv from 'dotenv';
import mongoose, { Schema, model } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
dotenv.config();

const connection = mongoose.createConnection(process.env.DB_URL);
autoIncrement.initialize(connection);

export interface Card {
  cardTitle: string;
  quantity: number;
  imageURI: string;
  user: number;
}

interface CardList {
  listTitle: string;
  cards: Card[];
  user: number;
}

const schema = new Schema<CardList>({
  listTitle: { type: String, required: true },
  user: { type: Number, required: true },
  cards: [
    {
      cardTitle: { type: String, required: true },
      quantity: { type: Number, required: true },
      imageURI: { type: String, required: true },
    },
  ],
});

schema.plugin(autoIncrement.plugin, 'CardList');
export const CardModel = model<CardList>('CardList', schema);
