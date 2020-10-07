import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductContextProvider } from "./contexts/ProductContext";
import { CartContextProvider } from "./contexts/CartContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./components/ProductDetail";
import Slider from "./components/Slider";
import Checkout from "./components/Checkout";
import ScrollToTop from "./components/ScrollToTop";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Router>
          <div className="App">
            <ScrollToTop />
            <Navigation />
            <Slider />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/detail/:id" component={ProductDetail} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/checkout" component={Checkout} />
            </Switch>
            <Footer />
            <ToastContainer />
          </div>
        </Router>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;


