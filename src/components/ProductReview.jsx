import React from 'react'
import "../styles/productreview.css"
const ProductReview = ({products}) => {
  return (
    <div className="productreview">
      {products.map((item, idx) => (
        <div>
          <img src={item.image} alt={`${idx} product`} />
          <div>
            <p>{item.review}</p>
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductReview
