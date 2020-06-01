import React from 'react'
import ReactDOM from 'react-dom'
import Profile from './components/profile'
import DoctorsList from './components/doctorsList'
import Appointments from './components/appointments'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export default function Router1() {
    return (
      <Router>
        <div>
          <ul>
            <li class="nav-item">
              <Link to="/">Profile</Link>
            </li>
            <li class="nav-item">
              <Link to="/doctors">Doctors</Link>
            </li>
            <li class="nav-item">
              <Link to="/appointments">Appointments</Link>
            </li>
            <li class="nav-item">
              <Link to="/reports">Reports</Link>
            </li>
          </ul>
  
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/">
              <Profile1 />
            </Route>
            <Route path="/doctors">
              <Doctors1 />
            </Route>
            <Route path="/appointments">
              <Appointments1 />
            </Route>
            <Route path="/reports">
              <Reports1 />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
  // You can think of these components as "pages"
  // in your app.
  
  function Profile1() {
    return (
      <Profile />
    );
  }
  
  function Doctors1(){
    return (
      <DoctorsList />
    );
  }
  
  function Appointments1(){
    return (
      <Appointments />
    );
  }
  
  function Reports1() {
    return (
      <div>
        <h2>Reports</h2>
      </div>
    );
  }