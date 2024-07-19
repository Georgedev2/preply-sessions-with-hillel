import Link from 'next/link';
import styles from './page.module.css';

export default function Home(prop) {
  console.log(prop); // { params: {}, searchParams: { step: '2' } }
  // prop.searchParams.step

  const currentStep = Number(prop.searchParams.step);
  // const STEP='step';
  console.log('currentStep', currentStep);
  switch (Number(prop.searchParams.step)) {
    case 1:
      return (
        <div>
          jhfsjkjkfs
          jhfjhkfjkjfk
          <div className={styles.progress}>
            <div
              className={` ${styles.step} ${
                currentStep <= 1 ? styles.bg : styles.bm
              }`}
            ></div>{' '}
            <div
              className={` ${styles.step} ${
                currentStep <= 1 ? styles.bg : styles.bm
              }`}
            ></div>{' '}
            <div
              className={` ${styles.step} ${
                currentStep <= 1 ? styles.bg : styles.bm
              }`}
            ></div>
          </div>
          <p>step {currentStep}/3</p>
          <h3>step 1</h3>
          <Link href={`?step=2`}> Go step 2 </Link>
        </div>
      );
    case 2:
      return (
        <div>
          <p>step {currentStep}/3</p>
          <h3>step 2</h3>
          <Link href={`?step=3`}> Go Step 3 </Link>
        </div>
      );
    case 3:
      return (
        <div>
          <p>step {currentStep}/3</p>
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
  // return <main className={styles.main}></main>;
}

// <Home isUser='true' age={10}/>

// prop={
//    isUser:'true',
//    age:10
// }
