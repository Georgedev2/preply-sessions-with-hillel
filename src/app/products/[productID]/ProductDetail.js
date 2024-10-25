'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const ProductDetail = ({ product_, productVariations }) => {
  const [product, setProduct] = useState(product_);
  return (
    <div>
      <Image src={product.image} alt="" width={200} height={100} />
      <div>
        <p>{product.name}</p>
        <p>{product.description}</p>
      </div>
      <div>
        <p> R {Math.ceil(product.price)}</p>
        <div>
          <b>Subscription Terms: </b>
          {product.attributes[0].map((subTerm, i) => (
            <button
              key={i}
              onClick={() => {
                productVariations.map((productVariation) => {
                  productVariation.attributes.find((attribute) => {
                    if (subTerm === attribute.option) {
                      setProduct((prevProduct) => ({
                        ...prevProduct,
                        price: productVariation.price,
                      }));
                    }
                  });
                });
              }}
              style={{ marginRight: '5px' }}
            >
              {subTerm}
            </button>
          ))}
        </div>
      </div>
      <div>
        <div>
          <b>Colors: </b>
          {product.attributes[1].map((item, i) => (
            <button
              key={i}
              onClick={() => {
                productVariations.map((productVariation) => {
                  productVariation.attributes.find((attribute) => {
                    if (item.toLowerCase() === attribute.option.toLowerCase()) {
                      setProduct((prevProduct) => ({
                        ...prevProduct,
                        image: productVariation.image,
                      }));
                    }
                  });
                });
              }}
              style={{ marginRight: '5px' }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

