import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ButtonStyles from '../components/Button.css';
import Styles from '../components/Main.css';
import map from '../assets/Evans_Lower_Level.jpg';
import reducer from '../reducer';


const Main = () => {
  const history = useHistory();
  const handleClick = (event) => {
    Promise.resolve(localStorage.setItem('room name', `${event.target.value}` ))
    .then(() => {
      history.replace('times')
    })
  };

  return (
    <>
        <div className={Styles.main}>
            <h2>PRACTICE ROOM SIGNUP</h2>
            <div className={Styles.electricPianoStudios}>
            <button className={ButtonStyles.button2} value={'01N'} onClick={handleClick}>01N</button>
            <button className={ButtonStyles.button2} value={'010'} onClick={handleClick}>010</button>
            </div>
            <div className={Styles.southBlock}>
            <button className={ButtonStyles.button2} onClick={handleClick} value={'01M'}>01M</button>
            <button className={ButtonStyles.button2} onClick={handleClick} value={'O1G'}>O1G</button>
            <button className={ButtonStyles.button2} onClick={handleClick} value={'O1L'}>01L</button>
            <button className={ButtonStyles.button2} onClick={handleClick} value={'O1H'}>01H</button>
            <button className={ButtonStyles.button2} onClick={handleClick} value={'O1K'}>01K</button>
            <button className={ButtonStyles.button2} onClick={handleClick} value={'O1J'}>01J</button>
            </div>
            <div className={Styles.northBlock}> 
            <button className={ButtonStyles.button2} onClick={handleClick} value={'O1D'}>01D</button>
            <button className={ButtonStyles.button2} onClick={handleClick} value={'O1A'}>01A</button>
            <button className={ButtonStyles.button2} onClick={handleClick} value={'O1E'}>01E</button>
            <button className={ButtonStyles.button2} onClick={handleClick} value={'O1B'}>01B</button>
            <button className={ButtonStyles.button2} onClick={handleClick} value={'O1F'}>01F</button>
            <button className={ButtonStyles.button2} onClick={handleClick} value={'O1C'}>01C</button>
            </div>
            <div className={Styles.groupStudios}>

            <button className={ButtonStyles.button2} onClick={handleClick} value={'O30'}>030</button>
            <button className={ButtonStyles.button2} onClick={handleClick} value={'O29'}>029</button>
            <button className={ButtonStyles.button2} onClick={handleClick} value={'028'}>028</button>
            </div>
            <img src={map}></img>
        </div>
    </>
  );
};

export default Main;