import mongoose, { connection } from 'mongoose';
const localHostURL = 'mongodb://127.0.0.1:27017/store';
const atlasURL = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@book-cluster.gbuns7z.mongodb.net/?retryWrites=true&w=majority&appName=book-cluster`;

const getConnectionString = (env) => {
  switch (env) {
    case 'production':
      return `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@book-cluster.gbuns7z.mongodb.net/?retryWrites=true&w=majority&appName=book-cluster`;

    case 'test':
      return `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@book-cluster.gbuns7z.mongodb.net/?retryWrites=true&w=majority&appName=book-cluster`;
    default:
      return 'mongodb://127.0.0.1:27017/store';
  }
};

export const connectToDB = () => {
  mongoose.connect(getConnectionString(process.env.NODE_ENV));
  connection.on('connected', () => {
    console.log('connection successful');
  });
};

/* 
NodeJS.ProcessEnv.NODE_ENV: "development" | "production" | "test"
*/
// preply
// process.env.NODE_ENV= 'production'
//     "dev": "next dev", process.env.NODE_ENV= 'development'
