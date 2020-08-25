import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import { loginWithProvider } from '../firebase/firebase';
import ButtonStyles from '../components/Button.css';
import Styles from '../components/Main.css';
import map from '../assets/Evans_Lower_Level.jpg';



const Main = () => {
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
            <h2>PRACTICE ROOM SIGNUP</h2>
            <div className={Styles.electricPianoStudios}>
            <button className={ButtonStyles.button2}>01N</button>
            <button className={ButtonStyles.button2}>010</button>
            </div>
            <div className={Styles.southBlock}>
            <button className={ButtonStyles.button2}>01M</button>
            <button className={ButtonStyles.button2}>O1G</button>
            <button className={ButtonStyles.button2}>01L</button>
            <button className={ButtonStyles.button2}>01H</button>
            <button className={ButtonStyles.button2}>01K</button>
            <button className={ButtonStyles.button2}>01J</button>
            </div>
            <div className={Styles.northBlock}> 
            <button className={ButtonStyles.button2}>01D</button>
            <button className={ButtonStyles.button2}>01A</button>
            <button className={ButtonStyles.button2}>01E</button>
            <button className={ButtonStyles.button2}>01B</button>
            <button className={ButtonStyles.button2}>01F</button>
            <button className={ButtonStyles.button2}>01C</button>
            </div>
            <div className={Styles.groupStudios}>

            <button className={ButtonStyles.button2}>030</button>
            <button className={ButtonStyles.button2}>029</button>
            <button className={ButtonStyles.button2}>028</button>
            </div>
            <img src={map}></img>
        </div>
    </>
  );
};

export default Main;