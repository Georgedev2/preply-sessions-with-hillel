import { NextResponse } from 'next/server';
import { products } from '../../data';

export const GET = () => {
  return NextResponse.json({
    data: products,
  });
};
