import { products } from '../../data';
import { wooCommerce } from '../../components/utils/wooCommerceUtils';
import ProductVariation from '../ProductVariation';
import SubscriptionTerm  from './SubscriptionTerm';

const wooProductVariations = async (productId) => {
  
  try {
  const res = await wooCommerce.get(`products/${productId}/variations`) 
  //`products/${productId}/variations`);
  console.log('res-', res)
  if (!res.data) {
  throw new Error('No data found in response');
  }
  
  const variations = res.data;
  
  const result = variations.map(variation => ({
  parent_id: variation.parent_id,
  sku: variation.sku,
  id: variation.id,
  price: variation.price,
  attributes: variation.attributes
  }));
  return  result ;
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
const getPrice=()=>{
  return 0
}
const ProductDetailPage = async (props) => {
  const { params } = props;
  const productId = parseInt(params.productID);
  const { product, error } = await getProductById(productId);
  const variationPP =await   wooProductVariations(productId);////
  console.log('variationPPP', variationPP)

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
          </div>
          <SubscriptionTerm  variation={variation} price={product.price}/>
          {product.images.map((image) => {
            return (
              <img key={image.id} src={image.src} width={80} height={80} />
            );
          })}
          <div>
    
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
