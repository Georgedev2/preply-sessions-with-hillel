import styles from './product.module.css';
import Product from './Product';

const getProduct = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/products');
    const body = await res.json();
    return body.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const page = async () => {
  const resBody = await getProduct();

  return (
    <div className={styles.productPage}>
      <input
        placeholder="Search for products"
        // onChange={handleSearchTerms}
        className={styles.search}
      />
      <div className={styles.products}>
        {resBody.map((el, i) => {
          return <Product productDetail={el} key={i} />;
        })}
      </div>
    </div>
  );
};

export default page;

// const handleSearchTerms = (e) => {
//   setSearchTerms(e.target.value);
// };
// const [searchTerm, setSearchTerms] = useState('');
// const [productFromAPI, setProductFromAPI] = useState([]);
