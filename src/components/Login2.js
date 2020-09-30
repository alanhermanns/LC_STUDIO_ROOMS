import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../assets/logo_1.jpg'
// import { loginWithProvider } from '../firebase/firebase';
import ButtonStyles from '../components/Button.css';
import Styles from './Login.css';
import {useEmitEvent, useSocketState} from 'react-socket-io-hooks';
import bcrypt from 'bcryptjs'

const Login2 = (props) => {
  const history = useHistory();
  const [password, setPassword]=useState('enter password');
  const emit = useEmitEvent('RETRIEVE_TODAY_USERTIMES_ADMIN');
  const socketState = useSocketState()
    
    const handleClick = () => {
        bcrypt.hash(password, 12)
        .then(hash => {
            return hash;
        })
        .then(hash => {

            emit({
                payload : {
                    hash : hash
                }
            })
        })
      console.log(socketState);
  };
    const displayBookings = () => {
        if(socketState.bookings){
            const bookingsElements = socketState.bookings.reduce((acc, curr) => {
                console.log(curr)
                let room = curr[0].roomName;
                console.log(room)
                acc[room].push({email : curr[0].email, time: curr[0].time})
                return acc;
            },{
            K: [],
            G: [],
            J: [],
            O: [],
            D: [],
            E: [],
            F: [],
            A: [],
            B: [],
            C: [],
            30: [],
            29: [],
            28: [] 
            })
            console.log(bookingsElements)
            return bookingsElements;
        }
        else return
    }
    if(!socketState.bookings){

        return (
            <>
        <div className={Styles.primary} style={{"display": "flex", "flex-direction" : "column", "justify-content" : "space-around", "height" : "75vh"}}>
            <img style={{"z-index": "-1", "top": '14vh'}} src={logo}/>
            <h2>PRACTICE ADMIN SIGNIN</h2>
            <input className={ButtonStyles.button2} style={{"margin" : "0"}}onChange={(event) => setPassword(event.target.value)} value={password}>
            </input>
            <button className={ButtonStyles.button3} onClick={handleClick}>LOGIN</button>
        </div>
    </>
  );
}
else return (
    <>
    {displayBookings()}
    </>
)
  }

export default Login2;