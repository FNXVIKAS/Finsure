import './App.css';
import React from 'react';
import {Route} from 'react-router-dom';
import New from './Components/New';
import VehicleInfo from './Components/VehicleInfo';
import AutoPolicy from './Components/AutoPolicy';
import Menu from './Components/Menu';
import Product from './Components/Product';
function App() {
  return (

    <div className="App">
   <Route path="/" component ={AutoPolicy}></Route>
   
    </div>
  );
}

export default App;
