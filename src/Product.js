import React from "react";
import "./Product.css";


function Product({ id, title, image, price, rating, imgSize }) {
  return (
    <div id="conty" className={imgSize}> 
      <div className="product">
        <div className="product__info">
          <p className="product__title">{title}</p>

          <p className="product__price">
            <small>€</small>
            <strong>{price}</strong>
          </p>

          <div className="product__rating">
            {Array(rating)
              .fill()
              .map(_ => (
                <span className="product__ratingStar">&#11088;</span>
              ))}
          </div>
        </div>
        <div className="product__imageWrapper">
          <img  className="product__image" src={image} alt={image} />
        </div>

        <div>
          <button className="product__button">Add to basket</button>
        </div>
        
      </div>
    </div>
  );
}

export default Product;
