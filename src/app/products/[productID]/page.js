
import { products } from '../../data';
import { wooCommerce } from '../../components/utils/wooCommerceUtils';
import ProductVariation from '../ProductVariation';

const getProductById = async (productId) => {
  try {
    const res = await wooCommerce.get(`products/${productId}`);
    return {
      product: res.data,
      error: null,
    };
  } catch (error) {
    return {
      product: false,
      error: {
        message: error.message,
      },
    };
  }
};

const ProductDetailPage = async (props) => {
  const { params } = props;
  const productId = parseInt(params.productID);
  const { product, error } = await getProductById(productId);

  const variation = product
    ? product.attributes.map((attribute) => {
        return attribute.options;
      })
    : [];
  return (
    <div>
      {product ? (
        <div>
          <img src={product.images[0].src} alt="" width={200} height={100} />
          <div>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
          {product.images.map((image) => {
            return (
              <img key={image.id} src={image.src} width={80} height={80} />
            );
          })}
          <div>
            <div>
              <b>Subscription Terms: </b>
              <ProductVariation variation={variation[0]} />
            </div>

            <div>
              <b>Colors: </b>
              <ProductVariation variation={variation[1]} />
            </div>
          </div>
        </div>
      ) : (
        <div> {error.message}</div>
      )}
    </div>
  );
};
// [['Black', 'Green'], ['S', 'M']]
export default ProductDetailPage;
