import React, { Component, Fragment } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import { ProductConsumer } from "../../context";
import EmptyCart from "./EmptyCart";

class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            return cart.length > 0 ? (
              <Fragment>
                <Title name="your" title="cart" />
                <CartColumns />
              </Fragment>
            ) : (
              <EmptyCart />
            );
          }}
        </ProductConsumer>
      </section>
    );
  }
}

export default Cart;
