import styles from './product.module.css';
import Product from './Product';

const getProduct = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/products');

    if (res.status == 200) {
      const body = await res.json();
      return {
        products: body.data,
        error: null,
      };
    }
    return {
      products: [],
      error: {
        hasError: true,
        message: `An error with a code of ${res.status} just happens`,
        status: res.status,
      },
    };
  } catch (error) {
    return {
      products: [],
      error: {
        hasError: true,
        message: error.message,
        status: '30000000',
      },
    };
  }
};

const page = async () => {
  const { products, error } = await getProduct();
  // console.log('resBody', resBody);
  return (
    <div className={styles.productPage}>
      <input
        placeholder="Search for products"
        // onChange={handleSearchTerms}
        className={styles.search}
      />
      {products.length > 0 ? (
        <div className={styles.products}>
          {products.map((el, i) => {
            return <Product productDetail={el} key={i} />;
          })}
        </div>
      ) : (
        <div>
          {error.message} 
        </div>
      )}
    </div>
  );
};

export default page;

// const handleSearchTerms = (e) => {
//   setSearchTerms(e.target.value);
// };
// const [searchTerm, setSearchTerms] = useState('');
// const [productFromAPI, setProductFromAPI] = useState([]);
/* 
{
      products: [],
      error: {
        hasError: false,
        message: `An error with a code of ${res.status} happen on the server, please try again latter`,
        cause: '',
        code: res.status,
      },
    };
*/
