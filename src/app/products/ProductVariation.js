'use client';

const ProductVariation = ({ variation, getItem }) => {
  return variation.map((item, i) => (
    <button
      key={i}
      onClick={()=>{
        getItem (item)
      }}
      style={{ marginRight: '5px' }}
    >
      {item}
    </button>
  ));
};

export default ProductVariation;
