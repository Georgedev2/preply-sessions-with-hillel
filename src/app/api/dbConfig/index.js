import mongoose, { connection } from 'mongoose';

export const connectToDB = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/store');
  connection.on('connected', () => {
    console.log('connection successful');
  });
};
