import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import FacebookLogin from 'react-facebook-login';
import fire from './fire';


function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    const responseFacebook = (response) => {
        const payload = {
            id: response.id,
            name: response.name,
            email: response.email,
            token: response.accessToken,
            picture: response.picture

        }

        writeUserData(response.id, response.name, response.email)
    };

    function writeUserData(id, name, email) {
        fire.database().ref('usersUsername/' + name).set({
            fbID: id,
            name: name,
            refDJ: "none",
            email: email
        }, function(error) {
            if (error) {
                // The write failed...
            } else {
                // Data saved successfully!
                setLoggedIn(true)

                // Change Button to Text Coming soon to IOS
            }
        });
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                { !loggedIn ?
                    <FacebookLogin
                        //autoLoad={true}
                        appId="2009920755997639" //APP ID NOT CREATED YET
                        fields="name,email,picture"
                        callback={responseFacebook}
                        textButton = "Join the Sesh"
                        icon="fa-facebook"
                    />
                    :
                    <p>Logged In!</p>
                }
            </header>
        </div>

    ); }

export default App ;
