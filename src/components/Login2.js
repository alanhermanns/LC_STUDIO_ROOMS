import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../assets/logo_1.jpg'
// import { loginWithProvider } from '../firebase/firebase';
import ButtonStyles from '../components/Button.css';
import Styles from './Login.css';
import Styles2 from './Login2.css'
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
                let room = curr[0].roomeName;
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
            let bookingsElementsArray = Object.entries(bookingsElements)
            let elements = bookingsElementsArray.map(booking => {
                console.log(booking)
                console.log(booking[1])
                return(
                <div className={Styles2.room}>
                <h2>{booking[0]}</h2>
                <ul>
                    {booking[1].map(person => {
                            return(
                                <>
                                <h3>{person.email}</h3>
                                <h3>Time : {person.time}</h3>
                                </>
                            )
                        })
                    }
                </ul>
                </div>
                )
            })
            return elements
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
    <div>
    <h1>ROOMS, BOOKINGS LIST</h1>
    {displayBookings()}
    </div>
)
  }

export default Login2;