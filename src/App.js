import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import PageNotFound from './components/PageNotFound';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <ProductList />
        <Details />
        <Cart />
        <PageNotFound />
      </Fragment>
    );
  }
}

export default App;
