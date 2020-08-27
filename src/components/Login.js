import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../assets/logo_1.jpg'
// import { loginWithProvider } from '../firebase/firebase';
import ButtonStyles from '../components/Button.css';
import Styles from './Login.css';
import {useEmitEvent} from 'react-socket-io-hooks';



const Login = () => {
//   const user = useUser();
  const history = useHistory();
  const [email, setEmail]=useState('@lclark.edu');
  const emit = useEmitEvent('LOGIN_USER');
//   useEffect(() => {
//     if(user) history.replace('/main');
//   }, [user]);

  const handleClick = () => {
    emit({
      payload : {
        email : 'dog@lclark.edu',
        vocalStudent: false,
        theoryStudent: false,
        percussionStudent: false,
      }
    })
  };

  return (
    <>
        <div className={Styles.primary}>
            <img src={logo}/>
            <h2>PRACTICE ROOM SIGNUP</h2>
            <input className={ButtonStyles.button2} style={{"margin" : "0"}} onClick={handleClick}onChange={(event) => setEmail(event.target.value)} value={email}>
            </input>
        </div>
    </>
  );
};

export default Login;