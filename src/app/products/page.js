'use client';
import { products } from '../data';
import styles from './product.module.css';

// ~ https://vercel.com/georgedevs-projects?projectDeleted=unsplash_clone
const page = () => {
  return (
    <div className={styles.products}>
      {products.map((el, i) => {
        return (
          <a href={`/products/${el.id}`}  key={i}>
            <img src={el.img} alt="" width={200} height={100} />
            <div>
              <p>{el.name}</p>
              <p>{el.description}</p>
              <p>{el.price}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
};
// https://vercel.com/products/6487484874389ijiod

export default page;

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
