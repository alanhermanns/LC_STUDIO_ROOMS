// import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import logo from '../assets/logo_1.jpg'
// // import { loginWithProvider } from '../firebase/firebase';
// import ButtonStyles from '../components/Button.css';
// import Styles from './Login.css';
// import {useEmitEvent, useSocketState} from 'react-socket-io-hooks';



// const Login2 = (props) => {
// //   const user = useUser();
//   const history = useHistory();
//   const [password, setPassword]=useState('enter password');
//   const emit = useEmitEvent('LOGIN_USER');
//   const socketState = useSocketState();
//   //   useEffect(() => {
//     //     if(user) history.replace('/main');
//     //   }, [user]);
    
//     const handleClick = () => {
//       emit({
//         payload : {
//           email : email,
//           vocalStudent: false,
//           theoryStudent: false,
//           percussionStudent: false,
//         }
//       })
//       console.log(socketState);
//       history.push('/admin/main')
//   };

//   return (
//     <>
//         <div className={Styles.primary} style={{"display": "flex", "flex-direction" : "column", "justify-content" : "space-around", "height" : "75vh"}}>
//             <img style={{"z-index": "-1", "top": '14vh'}} src={logo}/>
//             <h2>PRACTICE ADMIN SIGNIN</h2>
//             <input className={ButtonStyles.button2} style={{"margin" : "0"}}onChange={(event) => setPassword(event.target.value)} value={password}>
//             </input>
//             <button className={ButtonStyles.button3} onClick={handleClick}>LOGIN</button>
//         </div>
//     </>
//   );
// };

// export default Login2;