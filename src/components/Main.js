import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ButtonStyles from '../components/Button.css';
import Styles from '../components/Main.css';
import map from '../assets/Evans_Lower_Level.jpg';
import {useSocketState, useEmitEvent} from 'react-socket-io-hooks';


const Main = (props) => {
  const history = useHistory();
  const socketState = useSocketState();
  const emit = useEmitEvent('DELETE_TIME');
  console.log(socketState);

  const handleClick = (event) => {
    Promise.resolve(localStorage.setItem('room name', `${event.target.value}` ))
    .then(() => {
      history.push('times')
    })
  };

  const handleDelete = (email , time, roomName) => {
    emit({
      payload : {
        email : email,
        time: time,
        roomName : roomName
      }
    })
  }

  const userRoomTimes = () => {
    if(!socketState.user.myTimes) return
    else {
      const b = new Date(Date.now());
      let h = b.getHours();
      let user = socketState.user;
      let userTimes = socketState.user.myTimes;

      return userTimes.map(roomTime => {
        console.log(roomTime)
        if(h > roomTime.time || h === roomTime.time){
          return (
            <>
          <li style={{"font-size" : "16px"}}>
            {`${roomTime.time} of the Clock : Room ${roomTime.roomName[0]}`}
          </li>
            </>
            )
        }
        else {
          return (
            <>
            <li style={{"font-size" : "16px"}}>
            {`${roomTime.time} of the Clock : Room ${roomTime.roomName[0]}`}
            </li>
            <h6 onClick={() => handleDelete(user.email, roomTime.time, roomTime.roomName)}>Delete</h6>
            </>
            )
          }
        })
    } 
  }

  const ifPianoStudent = () => {
    if(! socketState.user.pianoStudent) return
    else {
      return (
      <>
      <button className={ButtonStyles.button2} onClick={handleClick} value={'O12'}>012</button>
      <button className={ButtonStyles.button2} onClick={handleClick} value={'O14'}>014</button>
      </>)
    }
  }

  return (
    <>
        <div className={Styles.main}>
            <h2>PRACTICE ROOM SIGNUP</h2>
            <img src={map}></img>
            <h4>My Times</h4>
            {userRoomTimes()}
            <div className={Styles.electricPianoStudios}>
            <button className={ButtonStyles.button2} value={'01N'} onClick={handleClick}>01N</button>
            <button className={ButtonStyles.button2} value={'010'} onClick={handleClick}>01O</button>
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
            <div className={Styles.pianoStudios}>

            {ifPianoStudent()}
            </div>
      </div>
    </>
  );
};

export default Main;