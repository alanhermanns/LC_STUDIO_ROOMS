import React from 'react';
import Main from './Main';
import Login from './Login';
import Calendar from './Calendar';
import reducer from '../reducer';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { SocketProvider } from 'react-socket-io-hooks';
import Login2 from './Login2';


export default function App() {
  return (
    <SocketProvider uri="localhost:7890"
    reducer={reducer}
    initialState={{
      takenTimes: [{
          time: '',
          roomName : ''
      }],
      usersTimes : [{
          time: '',
          roomName : ''
      }],
      user: ''
    }}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/admin' component={Login2}></Route> 
          <Route exact path='/' component={Login}></Route>
          <Route exact path='/main' component={Main}></Route>
          <Route exact path= '/times' component={Calendar}></Route>
        </Switch>
      </BrowserRouter>
    </SocketProvider>
  )
}
  