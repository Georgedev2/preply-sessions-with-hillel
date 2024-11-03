import mongoose from 'mongoose';
import { connectToDB } from '../dbConfig';
import { type } from 'os';

connectToDB();
const { Schema } = mongoose;

const sessionSchema = new Schema({
  sessionId: {
    type: Schema.Types.UUID,
    required: [true, 'sessionId is required']
    
  },
  fullName: {
    type: String,
  },
  email: {
    type: String,
    required: [true, 'email is required']
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
  expire:{
    type: Date,
    required: [true, 'expiration date is required']
  }
});
// if there is an exiting model with the name session use it else create new one. 
export const SessionModel = mongoose.models.session || mongoose.model('session',sessionSchema);

export default  SessionModel