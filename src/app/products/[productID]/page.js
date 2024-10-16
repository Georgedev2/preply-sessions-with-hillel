import React from 'react';
import { products } from '../../data';

import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

const WooCommerce = new WooCommerceRestApi({
  url: process.env.DOMAIN, // Your store URL
  consumerKey: process.env.WOO_COMMERCE_CONSUMER_KEY, // Your consumer key
  consumerSecret: process.env.WOO_COMMERCE_CONSUMER_SECRET, // Your consumer secret
  version: 'wc/v3', // WooCommerce WP REST API version
});

const getProductById = async (productId) => {
  try {
    const res =await WooCommerce.get(`products/${productId}`);
    return {
      product: res.data,
      error: null,
    };
  } catch (error) {
    return {
      product: false,
      error: {
        message: error.message,
      },
    };
  }
};
const ProductDetailPage = async (props) => {
  const { params } = props;
  const productId = parseInt(params.productID);
  const { product,error} = await getProductById(productId);

  return (
    <div>
      {product ? (
        <div>
          <img src={product.images[0].src} alt="" width={200} height={100} />
          <div>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
          {product.images.map((image)=>{
            return <img key={image.id} src={image.src} width={80} height={80}/>
          })}
        </div>
      ) : (
        <div>  {error.message}</div>
      )}
    </div>
  );
};

export default ProductDetailPage;
