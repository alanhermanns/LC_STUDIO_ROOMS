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
    if(socketState.error){
      return (
      <h1>{`Please, return to the previous page, if you will, & double check your email : that ${socketState.error}`}</h1>
      )
    }
    if(!socketState.user.myTimes){
    console.log('USER sans times')
    return
    }
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
          <li style={{"font-size" : "16px", "margin-bottom" : '24px'}}>
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

  const ifTheoryStudent = () => {
      return (
      <>
      <button className={ButtonStyles.button2} style={{"margin-right" : "50px"}} value={'N'} onClick={handleClick}>N</button>
      </>)
  }

  const ifPianoStudent = () => {
    if(!socketState.user.flaggedPianoStudent) return
    else {
      return (
      <>
      <button className={ButtonStyles.button2} onClick={handleClick} value={'12'}>12</button>
      <button className={ButtonStyles.button2} onClick={handleClick} value={'14'}>14</button>
      </>)
    }
  }

  const ifUnderclassPianoStudent = () => {
    if(!socketState.user.pianoStudent) return
    else {
      return (
        <>
        <button className={ButtonStyles.button2} onClick={handleClick} value={'30'}>30</button>
        <button className={ButtonStyles.button2} onClick={handleClick} value={'29'}>29</button>
        <button className={ButtonStyles.button2} onClick={handleClick} value={'28'}>28</button>
        </>
        )
    }
  }

  const ifPercussionStudentM = () => {
    if(!socketState.user.percussionStudent) return
    else {
      return (
    <button className={ButtonStyles.button2} onClick={handleClick} value={'M'}>M</button>
    )
  }
}
const ifPercussionStudentH = () => {
  if(!socketState.user.percussionStudent) return
  else {
    return (
      <button className={ButtonStyles.button2} style={{"margin-left" : "200px"}} onClick={handleClick} value={'H'}>H</button>
    )
  }
}
const ifPercussionStudent122B = () => {
  if(!socketState.user.percussionStudent) return
  else {
    return (
      <button className={ButtonStyles.button2} style={{"padding" : "55px"}} onClick={handleClick} value={'122B'}>122B</button>
    )
  }
}

const southBlock = () => {
  if(!socketState.user.percussionStudent) {
    return (
      <div className={Styles.southBlock}>
      {ifPercussionStudentM()}
      <button className={ButtonStyles.button2} style={{"z-index" : "2"}} onClick={handleClick} value={'K'}>K</button>
      {ifPercussionStudentH()}
      <button className={ButtonStyles.button2} style={{"z-index" : "2"}} onClick={handleClick} value={'J'}>J</button>
      <button className={ButtonStyles.button2} style={{"z-index" : "2"}} onClick={handleClick} value={'G'}>G</button>
      </div>
    )
  } 
  else {
    return (
    <div className={Styles.southBlock2}>
    {ifPercussionStudentM()}
    <button className={ButtonStyles.button2} onClick={handleClick} value={'G'}>G</button>
    {ifPercussionStudentH()}
    <button className={ButtonStyles.button2} onClick={handleClick} value={'K'}>K</button>
    <button className={ButtonStyles.button2} onClick={handleClick} value={'J'}>J</button>
    </div>
    )
  }
}

  if(!socketState.error){
  return (
    <>
        <div className={Styles.main}>
            <h2>PRACTICE ROOM SIGNUP</h2>
            <img src={map}></img>
            <h4>My Times</h4>
            {userRoomTimes()}
            <div className={Styles.electricPianoStudios}>
            {ifTheoryStudent()}
            <button className={ButtonStyles.button2} value={'O'} onClick={handleClick}>O</button>
            </div>
            {southBlock()}
            <div className={Styles.northBlock}> 
            <button className={ButtonStyles.button2} onClick={handleClick} value={'D'}>D</button>
            <button className={ButtonStyles.button2} onClick={handleClick} value={'A'}>A</button>
            <button className={ButtonStyles.button2} onClick={handleClick} value={'E'}>E</button>
            <button className={ButtonStyles.button2} onClick={handleClick} value={'B'}>B</button>
            <button className={ButtonStyles.button2} onClick={handleClick} value={'F'}>F</button>
            <button className={ButtonStyles.button2} onClick={handleClick} value={'C'}>C</button>
            </div>

            <div className={Styles.groupStudios}>
            {ifUnderclassPianoStudent()}
            </div>

            <div className={Styles.pianoStudios}>
            {ifPianoStudent()}
            </div>

            <div className={Styles.drumUpstairs}>
            {ifPercussionStudent122B()}
            </div>
            
      </div>
    </>
  );
}
else {
  return (
    <>
    <div className={Styles.main}>
            <h2>PRACTICE ROOM SIGNUP</h2>
            <img src={map}></img>
            <h4>My Times</h4>
            {userRoomTimes()}
    </div>
    </>
  )
}
}

export default Main;