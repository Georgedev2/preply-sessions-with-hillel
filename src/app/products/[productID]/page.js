
import { products } from '../../data';
import { wooCommerce } from '../../components/utils/wooCommerceUtils';
import ProductDetail  from './ProductDetail';

const wooProductVariations = async (productId) => {
  // 10614
  console.log('parentID', productId);
  try {
    const res = await wooCommerce.get(`products/${productId}/variations`);
    if (!res.data) {
      throw new Error('No data found in response');
    }

    const variations = res.data;
    console.log('res.data', res.data);
    const result = variations.map((variation) => {
      console.log('    attributes', variation.attributes);

      return {
        parent_id: variation.parent_id,
        sku: variation.sku,
        id: variation.id,
        price: variation.price,
        attributes: variation.attributes,
        image: variation.image.src,
      };
    });
    console.log('result ', result);
    return result;
    // console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('Error fetching variations:', error);
  }
};

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
  const productVariations = await wooProductVariations(productId); ////

  return (
    <div>
      {product ? (
    <ProductDetail product={product} productVariations={productVariations}/>
      ) : (
        <div> {error.message}</div>
      )}
    </div>
  );
};

export default ProductDetailPage;
