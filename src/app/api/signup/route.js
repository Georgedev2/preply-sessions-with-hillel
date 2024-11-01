import { NextResponse } from 'next/server';
import { connectToDB } from '../dbConfig';
import mongoose from 'mongoose';
import { type } from 'os';
const { Schema } = mongoose;
connectToDB();

const userSchema = new Schema({
  email: String, // String is shorthand for {type: String}
  password: String,
  body: String,
  createOn: { type: Date, default: Date.now() },
  isEmailVerify: Boolean,
});
const User = mongoose.model.users || mongoose.model('user', userSchema);

export const POST = async (req, res) => {
  try {
    const data = await req.json();
    const { username, password } = data;
    if (username !== '' && password.length < 2) {
      return NextResponse.json(
        {
          error: {
            hasError: true,
            message: 'invalid username or password',
          },
          status: 400,
        },
        { status: 400 }
      );
    }
    const user = new User({
      email: data.username,
      password: data.password,
      isEmailVerify: false,
    });
    const u = await user.save();
    if (u) {
      return NextResponse.json({
        data: u,
      });
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      {
        error: {
          hasError: true,
          message: err.message,
        },
      },
      { status: 500 }
    );
  }
};
// POST http://localhost:3000/api/signup {username, password}
