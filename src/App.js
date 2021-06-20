import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import SignIn from './Components/Pages/page-signIn'
// import SignUp from './Components/Pages/page-signUp'
import Home from './Components/Pages/home'
import Checkout from './Components/Pages/checkout'
import SingleProduct from './Components/Pages/singleProduct'
// import Product from './Components/Pages/page-product'
// import Store from './Components/Pages/page-store'
// import Detail from './Components/Footer/detail';
// import NavFooter from './Components/Footer/navFooter';
// import Payment from './Components/Footer/payment';
// import Accessories from './Components/Pages/page-accessories';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} /> */}
          <Route path="/" exact component={Home} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/product/:id" exact component={SingleProduct} />
          {/* <Route path="/product" exact component={Product} />
          <Route path="/store" exact component={Store} />
          <Route path="/accessories" exact component={Accessories} /> */}
          {/* <Route>404 Not Found</Route>   */}
        </Switch>
      </Router>

      {/* <Detail />
      <NavFooter />
      <Payment /> */}
    </div>
  );
}

export default App;
