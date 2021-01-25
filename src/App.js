import "./App.css";
import React from "react";
import HomePage from "./pages/homepage/homepage.component.jsx";
import { Switch, Route } from "react-router-dom";
import ShopPage from './pages/shop/shop.component'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
