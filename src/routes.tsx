/* tslint:disable */
import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import { Hello } from './components/index';
import { Products, ProductDetails } from './containers/index';

require('./routes.css');

class Routes extends React.Component {

  render() {
    return (
      <Router>
        <div className="wrapper">
          <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
          </div>
          <div className="main">
            <Switch>
              <Route exact={true} path="/" component={Hello} />
              <Route path="/products/:productId" component={ProductDetails} />
              <Route path="/products" component={Products} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Routes;
