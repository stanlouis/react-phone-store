import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/cart";
import PageNotFound from "./components/PageNotFound";
import Modal from "./components/Modal";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={PageNotFound} />
        </Switch>
        <Modal />
      </Fragment>
    );
  }
}

export default App;
