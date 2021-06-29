import './App.css';
import React from 'react';
import {Route} from 'react-router-dom';
import New from './Components/New';
import VehicleInfo from './Components/VehicleInfo';
function App() {
  return (

    <div className="App">
   <Route path="/" component ={New}></Route>
   
    </div>
  );
}

export default App;
