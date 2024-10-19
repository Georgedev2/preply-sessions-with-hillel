import styles from './product.module.css';
import Product from './Product';
import wooCommerce from '../components/utils/wooCommerceUtils'

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

const getProductFromWooCommerce = async () => {
  try {
    const res = await wooCommerce.get('products?per_page=10');;
    if (res.status == 200) {
     return {
        products: res.data,
        error: null,
      };
    }
  } catch (error) {
    return {
      products: [],
      error: {
        message: error.message,
      },
    };
  }

};

const page = async () => {
  const { products, error } = await getProduct();
  const dataFromWooCommerce = await getProductFromWooCommerce();

  return (
    <div>
      <section className={styles.productPage}>
        {/* displaying product from woo commerce */}
        <h2>Products from woo commerce</h2>

        <div className={styles.products}>
          {dataFromWooCommerce.products.length > 0 ? (
            dataFromWooCommerce.products.map((el, i) => {
              return (
                <Product
                  productDetail={{
                    id: el.id,
                    price: el.price,
                    name: el.name,
                    img: el.images[0].src,
                  }}
                  key={i}
                />
              );
            })
          ) : (
            <div>{dataFromWooCommerce.error.message}, Please try again later</div>
          )}
        </div>
      </section>
      <section className={styles.productPage}>
        <h2>Products from our backend api</h2>
        {/* displaying product from our API */}
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
          <div>{error.message}</div>
        )}
      </section>
    </div>
  );
};
// Sorry, we couldn't find the page you're looking for.
export default page;
