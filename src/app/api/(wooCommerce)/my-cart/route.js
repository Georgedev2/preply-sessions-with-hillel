import { NextResponse } from 'next/server';


export const GET = () => {

  return NextResponse.json({
    data: {hay:'car is great for meeting'},
  });
};
// api/my-cart
//  api/hay