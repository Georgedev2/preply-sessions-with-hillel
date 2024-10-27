'use client';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
// import wooCommerce from '../../components/utils/wooCommerceUtils';
// import wooCommerce from '../../components/utils/wooCommerceUtils'

const ProductDetail = ({ product_, productVariations }) => {
  const [product, setProduct] = useState(product_);
  const router = useRouter();
  const pathname = usePathname();

  const addProductVariationIdToURL = (input, re) => {
    const arr = input.split('/');
    arr.splice(3, Infinity, re);
    return arr.join('/');
  };
  // console.log('product',product)
  // useEffect(()=>{
  //   // wooCommerce.get(`products/${productId}/variations`);
  // },[product. productVariationID])
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
                        productVariationID: productVariation.id,
                      }));
                      console.log('productVariation',productVariation)
                      router.push(
                        addProductVariationIdToURL(
                          `${pathname}/${productVariation.id}`,
                          productVariation.id
                        )
                      );
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




// const obj = [
//   {
//     parent_id: 11427,
//     sku: '70007',
//     id: 11431,
//     price: '1124.941667',
//     attributes: [
//       {
//         id: 5,
//         name: 'Select a subscription term',
//         slug: 'pa_select-a-subscription-term',
//         option: '12',
//       },
//       {
//         id: 22,
//         name: 'Select a color you love',
//         slug: 'pa_select-a-color-you-love',
//         option: 'TUF Gaming F15 FX506HCB-I58512B0W Graphite Black',
//       },
//     ],
//     image:
//       'https://res.cloudinary.com/dvqsg4pdp/images/f_auto,q_auto/v1695736835/TUF_Gaming_F15_FX506HCB-I58512B0W_Graphite_Black_1_hdermj/TUF_Gaming_F15_FX506HCB-I58512B0W_Graphite_Black_1_hdermj.png?_i=AA',
//   },
//   {
//     parent_id: 11427,
//     sku: '70007',
//     id: 11430,
//     price: '1237.435833',
//     attributes: [
//       {
//         id: 5,
//         name: 'Select a subscription term',
//         slug: 'pa_select-a-subscription-term',
//         option: '6',
//       },
//       {
//         id: 22,
//         name: 'Select a color you love',
//         slug: 'pa_select-a-color-you-love',
//         option: 'TUF Gaming F15 FX506HCB-I58512B0W Graphite Black',
//       },
//     ],
//     image:
//       'https://res.cloudinary.com/dvqsg4pdp/images/f_auto,q_auto/v1695736835/TUF_Gaming_F15_FX506HCB-I58512B0W_Graphite_Black_1_hdermj/TUF_Gaming_F15_FX506HCB-I58512B0W_Graphite_Black_1_hdermj.png?_i=AA',
//   },
//   {
//     parent_id: 11427,
//     sku: '70007',
//     id: 11429,
//     price: '1608.666583',
//     attributes: [
//       {
//         id: 5,
//         name: 'Select a subscription term',
//         slug: 'pa_select-a-subscription-term',
//         option: '3',
//       },
//       {
//         id: 22,
//         name: 'Select a color you love',
//         slug: 'pa_select-a-color-you-love',
//         option: 'TUF Gaming F15 FX506HCB-I58512B0W Graphite Black',
//       },
//     ],
//     image:
//       'https://res.cloudinary.com/dvqsg4pdp/images/f_auto,q_auto/v1695736835/TUF_Gaming_F15_FX506HCB-I58512B0W_Graphite_Black_1_hdermj/TUF_Gaming_F15_FX506HCB-I58512B0W_Graphite_Black_1_hdermj.png?_i=AA',
//   },
//   {
//     parent_id: 11427,
//     sku: '70007',
//     id: 11428,
//     price: '1769.533242',
//     attributes: [
//       {
//         id: 5,
//         name: 'Select a subscription term',
//         slug: 'pa_select-a-subscription-term',
//         option: '1',
//       },
//       {
//         id: 22,
//         name: 'Select a color you love',
//         slug: 'pa_select-a-color-you-love',
//         option: 'TUF Gaming F15 FX506HCB-I58512B0W Graphite Black',
//       },
//     ],
//     image:
//       'https://res.cloudinary.com/dvqsg4pdp/images/f_auto,q_auto/v1695736835/TUF_Gaming_F15_FX506HCB-I58512B0W_Graphite_Black_1_hdermj/TUF_Gaming_F15_FX506HCB-I58512B0W_Graphite_Black_1_hdermj.png?_i=AA',
//   },
// ];

// const x = {};
// obj.map((el) => {
//   x[el.id] = {
//     price: el.price,
//     attributes: el.attributes,
//     parent_id: el.parent_id,
//   };

//   // el.attributes.map((el2) => (x.attributes[el2.option] = el2));
// });
// console.log('X', x);

//   const createProductURL = (variationInput) => {
//     if (variationInput) {
//       return `/${variationInput.replaceAll(' ', '-')}`.toLowerCase();
//     }
//     return '';
//   };
