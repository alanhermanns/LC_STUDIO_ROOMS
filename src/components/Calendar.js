import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../assets/logo_1.jpg'
// import { loginWithProvider } from '../firebase/firebase';
import ButtonStyles from '../components/Button.css';
import Styles from '../components/Calendar.css';



const Calendar = () => {
//   const user = useUser();
  const history = useHistory();

//   useEffect(() => {
//     if(user) history.replace('/main');
//   }, [user]);

const times = () => {
    let arrOfTimes = [6,8,10,12,2,4,6,8,10]
    console.log(Date.UTC);
    const timeElements = arrOfTimes.map((time) => {
        return (
        <button className={ButtonStyles.button3} >{`${time}:00`}</button>
        )
    })
    return timeElements;
}

  const handleClick = () => {
    // loginWithProvider();
  };

  return (
    <>
        <div className={Styles.main}>
            <h2>PRACTICE ROOM SIGNUP</h2>
            {times()}
            <button className={ButtonStyles.button2} style={{"margin" : "0"}}onClick={handleClick}>SignUp/Login</button>
        </div>
    </>
  );
};

export default Calendar;