import { products } from '../../data';
import { wooCommerce } from '../../components/utils/wooCommerceUtils';
import ProductDetail from './ProductDetail';
import { describe } from 'node:test';

const wooProductVariations = async (productId) => {
  // 10614
  // console.log('parentID', productId);
  try {
    const res = await wooCommerce.get(`products/${productId}/variations`);
    if (!res.data) {
      throw new Error('No data found in response');
    }

    const variations = res.data;
    console.log('DATA=', res.data);
    const result = variations.map((variation) => {
      // console.log('    attributes', variation.attributes);

      return {
        parent_id: variation.parent_id,
        sku: variation.sku,
        id: variation.id,
        price: variation.price,
        attributes: variation.attributes,
        image: variation.image.src,
      };
    });
    // console.log('result', result);
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

  const attributes = product
  ? product.attributes.map((attribute) => {
      return attribute.options;
    })
  : []; // attribute could either be color or subscription
  // console.log(' productVariations', productVariations[0].  attributes);

// console.log('productRAW',product. attributes[0])
  return (
    <div>
      {product ? (
        <ProductDetail
          product_={{
            name: product.name,
            description: product.description,
            image: product.images[0].src,
            price: product.price,
            attributes: attributes
          }}
          productVariations={productVariations}
        />
      ) : (
        <div> {error.message}</div>
      )}
    </div>
  );
};

export default ProductDetailPage;
