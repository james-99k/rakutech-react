import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/Pages/home'
import Signin from './Components/Pages/signin'
import Signup from './Components/Pages/signup'
import Checkout from './Components/Pages/checkout'
import SingleProduct from './Components/Pages/singleProduct'
import Store from './Components/Pages/store'
import Detail from './Components/Footer/detail'
import NavFooter from './Components/Footer/navFooter'
import Payment from './Components/Footer/payment'

import FakeProduct from './Components/FAKEPRODUCT/page'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/product/:id" exact component={SingleProduct} />
          <Route path="/store" exact component={Store} />
          <Route path="/fake-product" exact component={FakeProduct} />
        </Switch>
      </Router>

      <Detail />
      <NavFooter />
      <Payment />
    </div>
  );
}

export default App;
