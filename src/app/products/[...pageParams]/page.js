import { wooCommerce } from '../../components/utils/wooCommerceUtils';
import ProductDetail from './ProductDetail';
import Image from 'next/image';

const wooProductVariations = async (productId) => {
  // 10614
  try {
    const res = await wooCommerce.get(`products/${productId}/variations`);

    if (res.status == 200) {
      const result = res.data.map((variation) => {
        return {
          parent_id: variation.parent_id,
          sku: variation.sku,
          id: variation.id,
          price: variation.price,
          attributes: variation.attributes,
          image: variation.image.src,
        };
      });
      return {
        productVariations: result,
        error: null,
      };
    }
  } catch (error) {
    return {
      productVariations: null,
      error: {
        message: error.message,
      },
    };
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
  const m = params.pageParams[0].split('-');
  const productId = m[m.length - 1];
  const secondParams = params.pageParams[1];
  const { product, error } = await getProductById(productId);
  const { productVariations } = await wooProductVariations(productId); ////
  
  // const all= await Promise.all([getProductById(productId), wooProductVariations(productId)])
  // console.log('all90000', all)
  
  // LOOK
  // const XX = async () => {
  //   console.log('VVV--', `products/${productId}/variations/${secondParams}`);
  //   const res = await wooCommerce.get(
  //     `products/${productId}/variations/${secondParams}`
  //   );
  //   // console.log('RES', res);
  //   // console.log(res.data)
  // };
  // XX();
  
  

  const attributes = product
    ? product.attributes.map((attribute) => {
        // attribute could either be color or subscription
        return attribute.options;
      })
    : [];
  // console.log('paramsBB', params); // paramsBB { productID: [ 'microsoft-xbox-series-x-11601' ] }
  // console.log('productVariationsBBB',productVariations)
  // console.log('product default_attributes',product. default_attributes)
  
  console.log('productBBB',product)
  console.log('product.attributes9000',product.attributes)
  return (
    <div>
      {product ? (
        <>
          <ProductDetail
            product_={{
              productID: product.id,
              name: product.name,
              description: product.description,
              image: product.images[0].src,
              price: product.price,
              attributes: attributes,
              slug:product.  slug,
              default_attributes: product. default_attributes
            }}
            productVariations={productVariations}
          />
          <div>
            {product.images.map((image) => {
              <Image
                src={image.src}
                key={image.id}
                width={50}
                alt=""
                height={50}
              />;
            })}
          </div>
        </>
      ) : (
        <div> {error.message}</div>
      )}
    </div>
  );
};

export default ProductDetailPage;

/* 
 [
  { id: 5, name: 'Select a subscription term', option: '12' },
  {
    id: 22,
    name: 'Select a color you love',
    option: 'xbox-series-x-carbon-black'
  }
]
*/
