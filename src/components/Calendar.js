import React, { useEffect, useState } from 'react';
import ButtonStyles from '../components/Button.css';
import Styles from '../components/Calendar.css';
import { useSocketState, useEmitEvent } from 'react-socket-io-hooks';
import { useHistory } from 'react-router-dom';


const Calendar = (props) => {
  //   const user = useUser();
  const history = useHistory();
  const emitNewTime = useEmitEvent('NEW_TIME');
  const emitRetriveTimes = useEmitEvent('RETRIEVE_TIMES');
  const [room, setRoom] = useState('')
  const socketState = useSocketState();
  console.log(socketState);


  
  useEffect(() => {
    emitRetriveTimes({payload : ''})
    setRoom(localStorage.getItem('room name'));
    console.log('!')
  }, []);

  const times = () => {
    let arrOfTimes = [6,8,10,12,2,4,6,8,10]
    console.log(Date.UTC);
    let takenTimesInSameRoom = null;
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
        return (
        <button className={ButtonStyles.button3} value={time} onClick={() => emitNewTime({
          payload : {
          email: socketState.user.email,
          time: event.target.value,
          roomName: room
          }
        })} >{`${time}:00`}</button>
        )
    })
    return timeElements;
}
  return (
    <>
        <div className={Styles.main}>
            <h2>PRACTICE ROOM SIGNUP</h2>
            <h3>{`${room}`}</h3>
            {times()}
            <button className={ButtonStyles.button3} onClick={() => {
              history.goBack()
            }}
        >Back</button>
        </div>
    </>
  );
};

export default Calendar;