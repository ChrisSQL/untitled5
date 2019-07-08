import React from 'react';
import logo from './logo.svg';
import './App.css';
import FacebookLogin from 'react-facebook-login';

function App() {

    const responseFacebook = (response) => {
        console.log(response);
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            <FacebookLogin
                appId="2009920755997639" //APP ID NOT CREATED YET
                fields="name,email,picture"
                callback={responseFacebook}
            />
        </p>

      </header>
    </div>
  );
}

export default App;
