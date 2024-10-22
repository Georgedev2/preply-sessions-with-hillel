'use client';
import React, { useState } from 'react';
import SubscriptionTerm from './SubscriptionTerm';

const ProductDetail = ({ product, productVariations }) => {
    const [matchingVariation, setMatchingVariation]=useState({})
    
  const attributes = product
    ? product.attributes.map((attribute) => {
        return attribute.options;
      })
    : []; // attribute could either be color or subscription
console.log('matchingVariation',matchingVariation)
  return (
    <div>
      <img src={matchingVariation.image|| product.images[0].src} alt="" width={200} height={100} />
      <div>
        <p>{product.name}</p>
        <p>{product.description}</p>
      </div>
      <SubscriptionTerm variation={attributes[0]} price={product.price} />
      {product.images.map((image) => {
        return <img key={image.id} src={image.src} width={80} height={80} />;
      })}
      <div>
        <div>
          <b>Colors: </b>
          {attributes[1].map((item, i) => (
            <button
              key={i}
              onClick={() => {
                console.log(item);
                productVariations.map((productVariation)=>{
                    productVariation.attributes.find((attribute)=>{
                        if(item.toLowerCase()=== attribute.option.toLowerCase()){
                            setMatchingVariation(productVariation) 
                        }
                    })
                    
                })
              }}
              style={{ marginRight: '5px' }}
            >
              {item}
            </button>
          ))}
        </div>
        {/* <div>
          {productVariations.map((item, i) => {
            return (
              <span key={i}>
                <img src={item.image} alt="" width={80} height={50} />
              </span>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default ProductDetail;

/* 

[
    {
        "parent_id": 11601,
        "sku": "10006",
        "id": 11611,
        "price": "1008.275",
        "attributes": [
            {
                "id": 5,
                "name": "Select a subscription term",
                "slug": "pa_select-a-subscription-term",
                "option": "12"
            },
            {
                "id": 22,
                "name": "Select a color you love",
                "slug": "pa_select-a-color-you-love",
                "option": "Xbox Series X Carbon Black"
            },
            {
                "id": 20,
                "name": "Product line",
                "slug": "pa_product-line",
                "option": "Xbox Series X"
            },
            {
                "id": 19,
                "name": "Storage",
                "slug": "pa_storage",
                "option": "1TB"
            }
        ],
        "image": "https://res.cloudinary.com/dvqsg4pdp/images/f_auto,q_auto/v1695996964/Xbox_Series_X_Carbon_Black_1_zacbdd/Xbox_Series_X_Carbon_Black_1_zacbdd.png?_i=AA"
    },
    {
        "parent_id": 11601,
        "sku": "10006",
        "id": 11610,
        "price": "1109.1025",
        "attributes": [
            {
                "id": 5,
                "name": "Select a subscription term",
                "slug": "pa_select-a-subscription-term",
                "option": "6"
            },
            {
                "id": 22,
                "name": "Select a color you love",
                "slug": "pa_select-a-color-you-love",
                "option": "Xbox Series X Carbon Black"
            },
            {
                "id": 20,
                "name": "Product line",
                "slug": "pa_product-line",
                "option": "Xbox Series X"
            },
            {
                "id": 19,
                "name": "Storage",
                "slug": "pa_storage",
                "option": "1TB"
            }
        ],
        "image": "https://res.cloudinary.com/dvqsg4pdp/images/f_auto,q_auto/v1695996964/Xbox_Series_X_Carbon_Black_1_zacbdd/Xbox_Series_X_Carbon_Black_1_zacbdd.png?_i=AA"
    },
    {
        "parent_id": 11601,
        "sku": "10006",
        "id": 11609,
        "price": "1441.83325",
        "attributes": [
            {
                "id": 5,
                "name": "Select a subscription term",
                "slug": "pa_select-a-subscription-term",
                "option": "3"
            },
            {
                "id": 22,
                "name": "Select a color you love",
                "slug": "pa_select-a-color-you-love",
                "option": "Xbox Series X Carbon Black"
            },
            {
                "id": 20,
                "name": "Product line",
                "slug": "pa_product-line",
                "option": "Xbox Series X"
            },
            {
                "id": 19,
                "name": "Storage",
                "slug": "pa_storage",
                "option": "1TB"
            }
        ],
        "image": "https://res.cloudinary.com/dvqsg4pdp/images/f_auto,q_auto/v1695996964/Xbox_Series_X_Carbon_Black_1_zacbdd/Xbox_Series_X_Carbon_Black_1_zacbdd.png?_i=AA"
    },
    {
        "parent_id": 11601,
        "sku": "10006",
        "id": 11608,
        "price": "1874.383225",
        "attributes": [
            {
                "id": 5,
                "name": "Select a subscription term",
                "slug": "pa_select-a-subscription-term",
                "option": "1"
            },
            {
                "id": 22,
                "name": "Select a color you love",
                "slug": "pa_select-a-color-you-love",
                "option": "Xbox Series X Carbon Black"
            },
            {
                "id": 20,
                "name": "Product line",
                "slug": "pa_product-line",
                "option": "Xbox Series X"
            },
            {
                "id": 19,
                "name": "Storage",
                "slug": "pa_storage",
                "option": "1TB"
            }
        ],
        "image": "https://res.cloudinary.com/dvqsg4pdp/images/f_auto,q_auto/v1695996964/Xbox_Series_X_Carbon_Black_1_zacbdd/Xbox_Series_X_Carbon_Black_1_zacbdd.png?_i=AA"
    }
]
*/