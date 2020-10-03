import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductContextProvider } from "./contexts/ProductContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetail from "./components/ProductDetail";
import Slider from "./components/Slider";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

function App() {
  return (
    <ProductContextProvider>
      <Router>
        <div className="App">
          <Navigation />
          <Slider />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail/:id" component={ProductDetail} />
          </Switch>
          <Footer />
          <ToastContainer />
        </div>
      </Router>
    </ProductContextProvider>
  );
}

export default App;
