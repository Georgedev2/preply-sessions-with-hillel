'use client';

const ProductVariation = ({ variation }) => {
  return variation.map((item, i) => (
    <button
      key={i}
      style={{ marginRight: '5px' }}
    >
      {item}
    </button>
  ));
};

export default ProductVariation;
