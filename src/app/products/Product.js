import Link from "next/link";

 const Product = (props) => {
  const { productDetail } = props;
  return (
    <Link href={`/products/${productDetail.id}`}>
      <img src={productDetail.img} alt="" width={200} height={100} />
      <div>
        <p>{productDetail.name}</p>
        <p>{productDetail.description}</p>
        <p>{productDetail.price}</p>
      </div>
    </Link>
  );
};
export default  Product 