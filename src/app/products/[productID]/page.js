
import { products } from '../../data';
import { wooCommerce } from '../../components/utils/wooCommerceUtils';
import ProductVariation from '../ProductVariation';
import SubscriptionTerm from './SubscriptionTerm';

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
  const variationPP = await wooProductVariations(productId); ////
  // console.log('variationPPP', variationPP)
  // console.log(' variationPP ', variationPP )
  const variation = product
    ? product.attributes.map((attribute) => {
        return attribute.options;
      })
    : [];

  // console.log(' variation', variation)
  return (
    <div>
      {product ? (
        <div>
          <img src={product.images[0].src} alt="" width={200} height={100} />
          <div>
            <p>{product.name}</p>
            <p>{product.description}</p>
          </div>
          <SubscriptionTerm variation={variation[0]} price={product.price} />
          {product.images.map((image) => {
            return (
              <img key={image.id} src={image.src} width={80} height={80} />
            );
          })}
          <div>
            <div>
              <b>Colors: </b>
              
          
              <ProductVariation
                variation={variation[1]}
              />
            </div>
            <div>
              {variationPP.map((item, i) => {
                return (
                  <span key={i}>
                    <img src={item.image} alt="" width={80} height={50} />
                  </span>
                );
              })}
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
