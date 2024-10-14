'use client';
// import { useSearchParams } from 'next/navigation'
import React from 'react';
import { products } from '../../data';

const ProductDetailPage = (props) => {

  const { params } = props;
  console.log(props);
  const productId = parseInt(params.productID);

  const product = products.find((el) => {
    if (el.id === productId) return true;
  });
  console.log('product', product);
  return (
    <div>
      {/* { product ?} */}
      {product ?<>  <img src={product.img} alt="" width={200} height={100} />
      <div>
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>{params.productID}</p>
      </div></>:<div> no product with such id {productId}</div>}
    
    </div>
  );
};

export default ProductDetailPage;
