'use client';
import Image from 'next/image';
// import { useRouter } from 'next/router';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';

const ProductDetail = ({ product_, productVariations }) => {
  const [product, setProduct] = useState(product_);
  const router= useRouter()
  const pathname=usePathname()
  
//   const createProductURL = (variationInput) => {
//     if (variationInput) {
//       return `/${variationInput.replaceAll(' ', '-')}`.toLowerCase();
//     }
//     return '';
//   };
console.log('pathname',pathname)
  console.log(' productVariations', productVariations)
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
                      console.log('productVariation.id', productVariation.id )
                      console.log('bbb',`/${productVariation.id}`)
                      router.push(`${pathname}/${productVariation.id}` )
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

