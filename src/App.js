/*//import './App.css';
import HomePage from'../src/Pages/HomePage/HomePage';
function App() {
  return (
    <>
    <HomePage/>

    </>

  );
}

export default App;
*/

import React from "react";
import './App.css';
import Contact from '../src/Pages/Contact/Contact'

import HomePage from "./Pages/HomePage/HomePage";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom/SingleRoom";
import Error from "../src/Pages/Error/Error";
//import Services from '../src/Pages/Services/Services'

import {BrowserRouter, Route , Switch} from 'react-router-dom';
//import Rooms from './Pages/Rooms/Rooms';
import Navbar from "./Components/Navbar/Navbar";
//import Room from "./Components/Room/Room";


function App() {
  return (
    <>
    <BrowserRouter>
   <Navbar/>
   <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/Contact" component={Contact}/>
      <Route exact path="/room" component={Room}/>
      <Route exact path="/singleroom" component={SingleRoom}/>
      
     <Route component={Error}/>
    </Switch>
  
    </BrowserRouter>
      
    </>
  );
}

export default App;
