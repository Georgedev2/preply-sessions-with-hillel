import { NextResponse } from 'next/server';

export const POST = async (res) => {
  const data = res.json();
  return NextResponse.json({
    data,
    message: 'successful',
  });
};
// /Users/georgenwobodo/Desktop/preply-students/preply-new-hillel/src/app/api/multi-step-api