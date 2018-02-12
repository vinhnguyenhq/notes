import * as React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect,
  RouteComponentProps,
  RouteProps
} from 'react-router-dom';

import { Products, ProductDetails, Home } from './containers/index';

require('./routes.css');

export const isLoggedIn = () => {
  const auth = localStorage.getItem('auth');
  if (auth && auth !== '') {
    return true;
  }
  return false;
};

type RouteComponent = React.StatelessComponent<RouteComponentProps<{}>> | React.ComponentClass<{}>;

const PrivateRoute: React.StatelessComponent<RouteProps> = ({ component, ...rest }) => {
  const renderFn = (Component?: RouteComponent) => (props: RouteProps) => {
    if (!Component) {
      return null;
    }

    if (isLoggedIn()) {
      return <Component {...props} />;
    }

    const redirectProps = {
      to: {
        pathname: '/',
        state: { from: props.location },
      },
    };

    return <Redirect {...redirectProps} />;
  };

  return <Route {...rest} render={renderFn(component)} />;
};

class Routes extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
          </div>
          <div className="main">
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <PrivateRoute path="/products/:productId" component={ProductDetails} />
              <PrivateRoute path="/products" component={Products} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
