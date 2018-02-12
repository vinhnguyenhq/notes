/* tslint:disable */
import * as React from 'react';
import { GoogleLogin } from 'react-google-login';
import { isLoggedIn } from '../../routes';
import { Helmet } from 'react-helmet';

require('./index.css');

interface HomeObj {
  history: {
    push: Function;
  };
}

function Home({ history }: HomeObj) {

  const responseGoogle = (response: object) => {
    const authString = JSON.stringify(response);
    localStorage.setItem('auth', authString);
    history.push('/');
  };

  const logoutHandle = () => {
    localStorage.removeItem('auth');
    history.push('/');
  };

  const getCurrentUserName = () => {
    const auth = localStorage.getItem('auth') || '';
    const authObj = JSON.parse(auth);

    return authObj.profileObj.name;
  }

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>

      {isLoggedIn() ?
        <div>
          <h3>{`Welcom to this site, ${getCurrentUserName()}`}</h3>
          <a className="button" href="#" onClick={() => logoutHandle()}>Logout</a>
        </div> :
        (<GoogleLogin
          clientId="954634457832-fsmitrknpf68nbf759q35em8h0p5fujc.apps.googleusercontent.com"
          buttonText="Google Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />)}
    </div>
  );
}

export default Home;
