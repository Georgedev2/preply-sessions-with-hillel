import { NextResponse } from 'next/server';
import { connectToDB } from '../dbConfig';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from '../model/UserModel';


export const POST = async (req, res) => {
  console.log('mongoose.model', mongoose.models); // mongoose.model { user: Model { user },post:Model {post} }
  try {
    const data = await req.json();
    const { username, password } = data || {};
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
    const match = await User.findOne({
      email: username,
    });
    console.log('match', match);
    if (match) {
      return NextResponse.json(
        {
          error: {
            hasError: true,
            message: 'user already exist',
          },
        },
        { status: 400 }
      );
    }
    const newPassword = await bcrypt.hash(data.password, 10);

    const user = new User({
      email: username,
      password: newPassword,
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

/* 
OverwriteModelError: Cannot overwrite `user` model once compiled.
    at Mongoose.model
*/
