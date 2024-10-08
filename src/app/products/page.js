'use client';
import styles from './product.module.css';
const products = [
  {
    img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/20fd3517-9957-41c2-8398-47434e21a607/WMNS+NIKE+WAFFLE+DEBUT.png',
    name: 'Nike Waffle Debut',
    description: "Women's Shoes",
    price: 61.97,
    currency: 'usd',
    discount: 16,
    size: ['xl', 'l', 'm', 's', '2xl'],
  },
  {
    img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/20fd3517-9957-41c2-8398-47434e21a607/WMNS+NIKE+WAFFLE+DEBUT.png',
    name: 'Nike Waffle Debut',
    description: "Women's Shoes",
    price: 61.97,
    currency: 'usd',
    discount: 16,
    size: ['xl', 'l', 'm'],
  },
  {
    img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/20fd3517-9957-41c2-8398-47434e21a607/WMNS+NIKE+WAFFLE+DEBUT.png',
    name: 'Nike Waffle Debut',
    description: "Women's Shoes",
    price: 61.97,
    currency: 'usd',
    discount: 16,
    size: ['s', '2xl'],
  },
  {
    img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/20fd3517-9957-41c2-8398-47434e21a607/WMNS+NIKE+WAFFLE+DEBUT.png',
    name: 'Nike Waffle Debut',
    description: "Women's Shoes",
    price: 61.97,
    currency: 'usd',
    discount: 16,
    size: ['m'],
  },
  {
    img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/20fd3517-9957-41c2-8398-47434e21a607/WMNS+NIKE+WAFFLE+DEBUT.png',
    name: 'Nike Waffle Debut',
    description: "Women's Shoes",
    price: 61.97,
    currency: 'usd',
    discount: 16,
    size: ['xl', 'l', 'm', 's', '2xl'],
  },
  {
    img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/20fd3517-9957-41c2-8398-47434e21a607/WMNS+NIKE+WAFFLE+DEBUT.png',
    name: 'Nike Waffle Debut',
    description: "Women's Shoes",
    price: 61.97,
    currency: 'usd',
    discount: 16,
    size: ['xl', 'l', 'm', 's', '2xl'],
  },
  {
    img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/20fd3517-9957-41c2-8398-47434e21a607/WMNS+NIKE+WAFFLE+DEBUT.png',
    name: 'Nike Waffle Debut',
    description: "Women's Shoes",
    price: 61.97,
    currency: 'usd',
    discount: 16,
    size: ['xl'],
  },
  {
    img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/20fd3517-9957-41c2-8398-47434e21a607/WMNS+NIKE+WAFFLE+DEBUT.png',
    name: 'Nike Waffle Debut',
    description: "Women's Shoes",
    price: 61.97,
    currency: 'usd',
    discount: 16,
    size: ['xl'],
  },
];
/*    products.map(()=>{
        return <div>''</div>
            
    }) */
//    Array prototype
// x prototype   Array

const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist',
];
const page = () => {
    const loop = () => {
      const list = [];
      for (let count = 0; count < 5; count++) {
        list.push(`<li key=${count}>${people[count]}</li>`);
      }
      return list;
    };

    const r = loop();
    console.log('r', r);

    const k = people.map((el, i) => {
      return `<li key=${i}>${el}</li>`;
    });
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
  return (
    <div className={styles.products}>
      {products.map((el, i) => {
        return (
          <div key={i}>
            <img src={el.img} alt="" width={200} height={100} />
            <div>
              <p>{el.name}</p>
              <p>{el.description}</p>
              <p>{el.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default page;

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
