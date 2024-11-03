import { NextResponse } from 'next/server';
import User from '../model/UserModel';
import bcrypt from 'bcrypt';
import SessionModel from '../model/sessionModel';
import { v4 as uuidv4 } from 'uuid';
import { cookies } from 'next/headers';

export const POST = async (req) => {
  try {
    const body = (await req.json()) || {};
    const { username, password } = body;

    const foundUser = await User.findOne({
      email: username,
    });

    if (!foundUser) {
      return NextResponse.json(
        {
          error: {
            hasError: true,
            message: 'User dose not exist',
            status: 404,
          },
        },
        {
          status: 404,
        }
      );
    }

    const isAMatch = await bcrypt.compare(password, foundUser.password);
    if (isAMatch) {
      const uuid = uuidv4();

      const session = new SessionModel({
        sessionId: uuid,
        email: foundUser.email,
        fullName: '',
        expire: Date.now(),
      });
      
      await session.save();
      cookies().set('session', uuid, {
        httpOnly: true,
      });
      return NextResponse.json({
        isAuthenticated: true,
        user: foundUser,
      });
    }

    return NextResponse.json({
      message: 'invalid user name or password',
      user: foundUser,
    });
  } catch (err) {
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
//03bcaf15-346a-4844-9b74-5c9c67c25119