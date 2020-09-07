import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation"
import Footer from "./components/Footer";
import Home from "./pages/Home"
import Products from "./components/Products";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
 
        </Switch>
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
