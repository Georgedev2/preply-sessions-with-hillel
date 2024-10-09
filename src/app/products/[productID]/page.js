'use client';
// import { useSearchParams } from 'next/navigation'
import React from 'react';
import { products } from '../../data';

const Page = (props) => {
  // useSearchParams
  const { params, searchParams } = props;
  console.log(props);
  const productId = parseInt(params.productID);
  //  products.f
  /* {
  params: { id: '7899' },
  searchParams: { name: 'go', address: 'jdbc' }
} */
  const product = products.find((el) => {
    if (el.id === productId) return true;
  });
  console.log('product', product);
  return (
    <div>
      <img src={product.img} alt="" width={200} height={100} />
      <div>
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default Page;
