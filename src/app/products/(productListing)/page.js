import styles from './product.module.css';
import wooCommerce from '../../components/utils/wooCommerceUtils';
import Link from 'next/link';
import Image from 'next/image';

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
  // console.log('RUN')
  try {
    const res = await wooCommerce.get('products?per_page=15');
    // woo commerce by default throws error if the status is not 200
    // console.log('res', res)
    if (res.status == 200) {
      return {
        products: res.data,
        error: null,
      };
    }
  } catch (error) {
    // console.log('error', error)
    return {
      products: [],
      error: {
        message: error.message,
      },
    };
  }
};

const productListingPage = async (props) => {
  const { products, error } = await getProductFromWooCommerce();

  const createProductURL = (name, id) => {
    if (name && id) {
      return `/products/${name.replaceAll(' ', '-')}-${id}`.toLowerCase();
    }
    return '';
  };
// console.log('products ',products[0].default_attributes)
  return (
    <div>
      <section className={styles.productPage}>
        <h2>Products</h2>
        <div className={styles.products}>
          {products.length > 0 ? (
            products.map((el) => {
              return (
                <Link href={`${createProductURL(el.name, el.id)}`} key={el.id}>
                  <Image
                    src={el.images[0].src}
                    alt=""
                    width={200}
                    height={100}
                  />
                  <div>
                    <p>{el.name}</p>
                    <p>{el.price}</p>
                  </div>
                </Link>
              );
            })
          ) : (
            <div>
              {error.message}, Please try again later
            </div>
          )}
        </div>
      </section>
   
    </div>
  );
};
// Sorry, we couldn't find the page you're looking for.
export default productListingPage;

