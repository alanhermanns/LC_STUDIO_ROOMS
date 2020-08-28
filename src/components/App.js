import React from 'react';
import Main from './Main';
import Login from './Login';
import Calendar from './Calendar';
import reducer from '../reducer';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { SocketProvider } from 'react-socket-io-hooks';


export default function App() {
  return (
    <SocketProvider uri="https://lc-rooms-be.herokuapp.com/"
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
          <Route exact path='/' component={Login}></Route>
          <Route exact path='/main' component={Main}></Route>
          <Route exact path= '/times' component={Calendar}></Route>
        </Switch>
      </BrowserRouter>
    </SocketProvider>
  )
}
  