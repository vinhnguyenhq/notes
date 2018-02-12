import * as React from 'react';
import { GoogleLogin } from 'react-google-login';
import { isLoggedIn } from '../../routes';

interface HomeObj {
  history: {
    push: Function;
  };
}

function Home({ history }: HomeObj) {

  const responseGoogle = (response: object) => {
    const authString = JSON.stringify(response);
    localStorage.setItem('auth', authString);
    history.push('/products');
  };

  const logoutHandle = () => {
    localStorage.removeItem('auth');
    history.push('/');
  };

  return (
    <div>
      {isLoggedIn() ? <a href="#" onClick={() => logoutHandle()}>Logout</a> : (
        <GoogleLogin
          clientId="954634457832-fsmitrknpf68nbf759q35em8h0p5fujc.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      )}
    </div>
  );
}

export default Home;
