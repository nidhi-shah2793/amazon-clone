import React from "react";
import "./CheckoutProduct.css";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    //   remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutproduct">
      <img src={image} className="checkoutproduct__image" />
      <div className="checkoutproduct__info">
        <p className="checkoutproduct__title">{title}</p>
        <p className="checkout__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <StarRateIcon />
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
