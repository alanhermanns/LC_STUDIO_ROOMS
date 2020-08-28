import React, { useEffect } from 'react';
import Styles from '../components/ModalAlert.css';
import {useSocketState} from 'react-socket-io-hooks';


const ModalAlert = (props) => {
  const socketState = useSocketState();
  console.log(socketState);
  console.log('*&*&*&*', props.props)
  const roomName = props.props.roomName;
  const time = props.props.time;

  return (
    <>
        <div className={Styles.box}>
          <h5>{`ROOM ${roomName} at ${time}:00 CONFIRMED`}</h5>
        </div>
    </>
  );
};

export default ModalAlert;