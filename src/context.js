import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
//Provider
class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct,
  };

  handleDetail = params => {
    console.log('detail from context');
  };

  addToCart = params => {
    console.log('addToCart from context');
  };

  // copy data in context by value and not by object reference keeping values in data.js fresh
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => ({
      products: tempProducts,
    }));
  };

  componentDidMount = () => {
    this.setProducts();
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

//Consumer
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
