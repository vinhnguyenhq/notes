import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import { Hello, ProductDetails } from './components/index';
import { Products } from './containers/index';

class Routes extends React.Component {

  render() {
    return (
      <Router>
        <div style={{ width: 1000, margin: '0 auto' }}>
          <header>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
              </ul>
            </nav>
          </header>
          <main>
            <Switch>
              <Route exact={true} path="/" component={Hello} />
              <Route path="/products/:productId" component={ProductDetails} />
              <Route path="/products" component={Products} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default Routes;
