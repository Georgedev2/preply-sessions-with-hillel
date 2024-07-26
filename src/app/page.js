import Link from 'next/link';
import styles from './page.module.css';

const createNSizeArray = (size = 0) => {
  let arr = [];
  for (let count = 0; count < size; count++) {
    arr.push(count);
  }
  return arr;
};

export default function Home(prop) {
  const currentStep = Number(prop.searchParams.step);
  let arr = createNSizeArray(currentStep);
  console.log(arr.map((el)=>{
  return <div key={el}>{el}</div>
}))
  switch (currentStep) {
    case 1:
      return (
        <div>
          <div className={styles.progress}>
            {arr.map((el) => {
              return <div key={el} className={styles.step} />;
            })}
          </div>
          <p>step {currentStep}/3</p>
          <h3>step 1</h3>
          <Link href={`?step=1`} className={styles.link}> Go step 1 </Link>   <Link href={`?step=2`} className={styles.link}> Go step 2 </Link>
        </div>
      );
    case 2:
      return (
        <div>
          <p>step {currentStep}/3</p>
          <div className={styles.progress}>
            {arr.map((el) => {
              return <div key={el} className={styles.step} />;
            })}
          </div>
          <h3>step 2</h3>
          <Link href={`?step=3`}> Go Step 3 </Link>
        </div>
      );
    case 3:
      return (
        <div>
          <p>step {currentStep}/3</p>
          <div className={styles.progress}>
            {arr.map((el) => {
              return <div key={el} className={styles.step} />;
            })}
          </div>
          <h3>step 3</h3>
          <Link href={`?step=4`}> Go step 4 </Link>
        </div>
      );

    default:
      return (
        <div>
          <h3>You Request has been accepted</h3>
        </div>
      );
  }
}

// console.log(arr.map((el)=>{
//   return <div key={el}>{el}</div>
// }))
