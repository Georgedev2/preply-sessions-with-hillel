'use client';
import { useEffect, useState } from 'react';
import { products } from '../data';
import styles from './product.module.css';
import Link from 'next/link';

const ProductListPage = () => {
  const [searchTerm, setSearchTerms] = useState('');
  const [productFromAPI, setProductFromAPI]= useState([]);

  const getProduct = async () => {
    const res = await fetch('http://localhost:3000/api/products');
    const body = await res.json();
    setProductFromAPI(body.data)
    console.log('body', body.data);
  };
  
  const handleSearchTerms = (e) => {
    setSearchTerms(e.target.value);
  };

  useEffect(() => {
    getProduct();
  }, []);

//   const j = products.filter((product, i) => {
//     if (product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
//       return product;
//     }
//   });
  return (
    <div className={styles.productPage}>
      <input
        placeholder="Search for products"
        onChange={handleSearchTerms}
        className={styles.search}
      />
      <div className={styles.products}>
        {productFromAPI.map((el, i) => {
          return (
            <a href={`/products/${el.id}`} key={i}>
              <img src={el.img} alt="" width={200} height={100} />
              <div>
                <p>{el.name}</p>
                <p>{el.description}</p>
                <p>{el.price}</p>
                {/* <p>{el.id}</p> */}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
// https://vercel.com/products/6487484874389ijiod

export default ProductListPage;

// const people = [
//     'Creola Katherine Johnson: mathematician',
//     'Mario José Molina-Pasquel Henríquez: chemist',
//     'Mohammad Abdus Salam: physicist',
//     'Percy Lavon Julian: chemist',
//     'Subrahmanyan Chandrasekhar: astrophysicist',
//   ];
/* 
  [{
    '$$typeof': Symbol(react.element),
    type: 'li',
    key: '1',
    ref: null,
    props: { children: 'Mario José Molina-Pasquel Henríquez: chemist' },
    _owner: null,
    _store: {}
}
....   
]

    // const loop = () => {
    //   const list = [];
    //   for (let count = 0; count < 5; count++) {
    //     list.push(`<li key=${count}>${people[count]}</li>`);
    //   }
    //   return list;
    // };

    // const r = loop();
    // console.log('r', r);

    // const k = people.map((el, i) => {
    //   return `<li key=${i}>${el}</li>`;
    // });
  //   console.log('K', k);

  //   console.log(
  //     'GGGG',
  //     people.map((el, i) => {
  //       return <li key={i}>{el}</li>;
  //     })
  //   );
  //   return (
  //     <div>
  //       {people.map((el, i) => {
  //         return <li key={i}>{el}</li>;
  //       })}
  //     </div>
  //   );
*/

// const people = [
//   {
//     id: 0,
//     name: 'Creola Katherine Johnson',
//     profession: 'mathematician',
//     accomplishment: 'spaceflight calculations',
//     imageId: 'MK3eW3A',
//   },
//   {
//     id: 1,
//     name: 'Mario José Molina-Pasquel Henríquez',
//     profession: 'chemist',
//     accomplishment: 'discovery of Arctic ozone hole',
//     imageId: 'mynHUSa',
//   },
//   {
//     id: 2,
//     name: 'Mohammad Abdus Salam',
//     profession: 'physicist',
//     accomplishment: 'electromagnetism theory',
//     imageId: 'bE7W1ji',
//   },
// ];
