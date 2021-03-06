import React, { useEffect, useState } from 'react';
import ButtonStyles from '../components/Button.css';
import Styles from '../components/Calendar.css';
// import ModalAlert from './ModalAlert.js';
import { useSocketState, useEmitEvent } from 'react-socket-io-hooks';
import { useHistory } from 'react-router-dom';
import ModalAlert from './ModalAlert';


const Calendar = (props) => {
  //   const user = useUser();
  const history = useHistory();
  const emitNewTime = useEmitEvent('NEW_TIME');
  const emitRetriveTimes = useEmitEvent('RETRIEVE_TIMES');
  const [room, setRoom] = useState('')
  const [newTime, setNewTime] = useState(null);
  const socketState = useSocketState();
  console.log(socketState);


  
  useEffect(() => {
    emitRetriveTimes({payload : socketState.user.email})
    setRoom(localStorage.getItem('room name'));
    console.log('!')
  }, []);

  const makeModal = () => {
    console.log('*****//')
    if(!newTime) return
    else {
      const factory = {
        roomName : room,
        time : newTime,
      }
      return (
        <ModalAlert props={factory} />
        )
      }
    }

  const times = () => {
    let arrOfTimes;
    if(room === 'A' || room === 'C' || room === 'E' || room === 'H' || room === 'K' || room === 'M' || room === 'O' || room === '29'){
    arrOfTimes = [6,8,10,12,14,16,18,20,22]
    }
    else if(room === '12' || room === '14'){
      arrOfTimes = ['20']
    }
    else arrOfTimes = [7, 9, 11, 13, 15, 17, 19, 21]
    let takenTimesInSameRoom = null;
    let usersTakenTimes;
    if(socketState.user.myTimes){
      usersTakenTimes = socketState.user.myTimes.map((time) => {
        return time.time;
      })
    }
    if(socketState.takenTimes){
      takenTimesInSameRoom = socketState.takenTimes.reduce((acc, curr) => {
        if(curr.roomName[0] === room){
          acc.push(curr.time)
        }
        return acc;
      }, [])
    }
    const timeElements = arrOfTimes.map((time) => {
      if(takenTimesInSameRoom && takenTimesInSameRoom.includes(time)) return;
      if(usersTakenTimes && usersTakenTimes.includes(time)) return;
        return (
        <button className={ButtonStyles.button3} value={time} onClick={() =>{ 
          setNewTime(event.target.value)
          emitNewTime({
          payload : {
          email: socketState.user.email,
          time: event.target.value,
          roomName: room
          }
        })
      }
      } >{`${time}:00`}</button>
        )
    })
    return timeElements;
}
  return (
    <>
        <div className={Styles.main}>
            <h2 className={Styles.box2}>PRACTICE ROOM SIGNUP</h2>
            <h3 className={Styles.box3}>{`${room}`}</h3>
            {times()}
            <button className={ButtonStyles.button3} onClick={() => {
              history.goBack()
            }}
        >Back</button>
        {makeModal()}
        </div>
    </>
  );
}

export default Calendar;