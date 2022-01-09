import mongoose, { Schema, model } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const connection = mongoose.createConnection();
autoIncrement.initialize(connection)

interface User {
  name: string;
  email: string;
  password: string;
  profilePictureURI: string;
  createdAt: Date;
}

const schema = new Schema<User>({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profilePictureURI: {
    type: String
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
})

schema.plugin(autoIncrement.plugin, 'User');
export const UserModel = model<User>('User', schema);
