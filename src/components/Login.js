import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../assets/logo_1.jpg'
// import { loginWithProvider } from '../firebase/firebase';
import ButtonStyles from '../components/Button.css';
import Styles from '../components/Login.css';



const Login = () => {
//   const user = useUser();
  const history = useHistory();

//   useEffect(() => {
//     if(user) history.replace('/main');
//   }, [user]);

  const handleClick = () => {
    // loginWithProvider();
  };

  return (
    <>
        <div className={Styles.main}>
            <img src={logo} />
            <h2>PRACTICE ROOM SIGNUP</h2>
            <button className={ButtonStyles.button2} style={{"margin" : "0"}}onClick={handleClick}>SignUp/Login</button>
        </div>
    </>
  );
};

export default Login;