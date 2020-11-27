import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

//material-ui
import StarRateIcon from "@material-ui/icons/StarRate";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  const addToBasket = () => {
    // dispatch to context api
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <p>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarRateIcon />
              ))}
          </p>
        </div>
      </div>

      <img src={image} />

      <button onClick={addToBasket} className="product__add">
        Add to basket
      </button>
    </div>
  );
}

export default Product;
