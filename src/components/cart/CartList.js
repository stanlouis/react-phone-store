import React from "react";
import CartItem from "./CartItem";

const CartList = ({ value }) => (
  <div className="container-fluid">
    {value.cart.map(item => (
      <CartItem key={item.id} item={item} value={value} />
    ))}
  </div>
);

export default CartList;
