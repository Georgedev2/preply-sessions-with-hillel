import mongoose from 'mongoose';
import { connectToDB } from '../dbConfig';


connectToDB();
const { Schema } = mongoose;

const userSchema = new Schema({
  email: String, // String is shorthand for {type: String}
  password: String,
  dob:{
    type:Date,
    default: null,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  createOn: { type: Date, default: Date.now() },
  isEmailVerify: Boolean,
  status: {
    type: String,
    enum: ['active', 'inactive', 'cancelled', 'hold'],
    default: 'inactive',
  },
  deliveryStatus:{
    type:String,
    enum:['not_initiated','initiated','in_transit','delivered'],
    default:'not_initiated'
  },
  plan: {
    type: String,
    enum: ['beginner', 'pro', 'business'],
    default: 'beginner',
  },
  planType:{
    type: String,
    enum: ['monthly', 'yearly',null],
    default: null,
 
  },
  verificationStatus:{
    type:String,
    enum:['verify', 'not_verify','processing'],
    default:'not_verify'
  },
  payStackCustomerId: String
});
const User = mongoose.models.user || mongoose.model('user', userSchema);

export default User;
