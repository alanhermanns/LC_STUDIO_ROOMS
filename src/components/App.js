import React from 'react';
import Main from './Main';
import Login from './Login';
import Calendar from './Calendar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


export default function App() {
  return (
  <BrowserRouter>
    <Switch>
    <Route exact path='/' component={Login}></Route>
    <Route exact path='/main' component={Main}></Route>
    <Route exact path= '/times' component={Calendar}></Route>
    </Switch>
  </BrowserRouter>
  )
}
  