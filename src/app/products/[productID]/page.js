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
  const m = params.productID.split('-');
  const productId = m[m.length - 1];
  const { product, error } = await getProductById(productId);
  const { productVariations}= await wooProductVariations(productId); ////

  const attributes = product
    ? product.attributes.map((attribute) => {
        return attribute.options;
      })
    : []; // attribute could either be color or subscription
// console.log('productVariationsBBB',productVariations)
// console.log('productId',productId)
  return (
    <div>
      {product ? (
        <>
          <ProductDetail
            product_={{
              name: product.name,
              description: product.description,
              image: product.images[0].src,
              price: product.price,
              attributes: attributes,
            }}
            productVariations={ productVariations}
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
