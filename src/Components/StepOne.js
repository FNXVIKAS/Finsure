import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Stepper, Step, StepLabel, Typography, TextField, Button } from '@material-ui/core';
import Image1 from './Image1.jpeg'
import Image2 from './Image2.jpeg'
import Image3 from './Image3.jpeg'
import Image4 from './Image4.jpeg'
import Image5 from './Image5.jpeg'
import Image6 from './Image6.jpeg'
import Image7 from './Image7.jpeg'
import '../App.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function StepOne(props) {

  const Continue = (evt) => {
    evt.preventDefault();
    props.handleNext();
    var json_obj;
    json_obj = {make,model,year};
  localStorage.setItem('document', JSON.stringify(json_obj));
  }
  const Previous = () => {

    props.handleBack();
  }

  // 
  // useEffect(() => {
  // window.onunload = function () {
  //   localStorage.removeItem('documnet');
  // }
  //
  // const json = localStorage.getItem("document");
  // const savedNotes = JSON.parse(json);
  // if (savedNotes) {
  //   setFormState(savedNotes);
  // }
  // }, []);

  const years = [
    { value: '2015', year: 2015 },
    { value: '2016', year: 2016 },
    { value: '2017', year: 2017 },
    { value: '2018', year: 2018 },
    { value: '2019', year: 2019 },
    { value: '2020', year: 2020 },
    { value: '2021', year: 2021 },
  ]

  const [allmake, setAllmake] = useState([])
  const [allmodel, setAllModel] = useState([])
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year,setYear] = useState(0);
  
  useEffect(() => {
    axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json')
      .then(res => {
        console.log("hello make", res.data.Results)
        setAllmake(res.data.Results);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${make}/modelyear/${year}?format=json`)
      .then(res => {
        console.log("hello model", res.data.Results)
        setAllModel(res.data.Results);
      })
      .catch(err => {
        console.log(err)
      })
  }, [make,year])



  console.log(make);
  return (
    <div>
      <div className="Container">
        <p><b>Select from Popular Makers</b></p>
        <div class="wrapper">

          <div className={make === 'TESLA' ? 'border' : ''}>
            <div className={make === 'TESLA' ? 'te item border' : 'te item'} onClick={() => setMake('TESLA')}>
              <img alt="Tesla" style={{ height: "50px", paddingTop: "30px" }} src={Image1}></img>
            </div>
            <p>Tesla</p>
          </div>
          <div className={make === 'ASTON MARTIN' ? 'border' : ''}>
            <div className={make === 'ASTON MARTIN' ? 'te item border' : 'te item'} onClick={() => setMake('ASTON MARTIN')}>
              <img alt="Aston Martin" style={{ height: "40px", paddingTop: "30px" }} src={Image2}></img>
            </div>
            <p>Aston Martin</p>
          </div>
          <div className={make === 'LAMBORGHINI' ? 'border' : ''}>
            <div className={make === 'LAMBORGHINI' ? 'te item border' : 'te item'} onClick={() => setMake('LAMBORGHINI')}>
              <img alt="Lamborghini" style={{ height: "75px", paddingTop: "20px" }} src={Image3}></img>
            </div>
            <p>Lamborghini</p>
          </div>
          <div className={make === 'JAGUAR' ? 'border' : ''}>
            <div className={make === 'JAGUAR' ? 'te item border' : 'te item'} onClick={() => setMake('JAGUAR')}>
              <img alt="Jaguar" style={{ height: "35px", paddingTop: "35px" }} src={Image4}></img>
            </div>
            <p>Jaguar</p>
          </div>
          <div className={make === 'FERRARI' ? 'border' : ''} >
            <div className={make === 'FERRARI' ? 'te item border' : 'te item'} onClick={()=> setMake('FERRARI')}>
              <img alt="Ferrari" style={{ height: "75px", paddingTop: "15px" }} src={Image5}></img>
            </div>
            <p>Ferrari</p>
          </div>
          <div className={make === 'BENTLEY' ? 'border' : ''}>
            <div className={make === 'BENTLEY' ? 'te item border' : 'te item'} onClick={() => setMake('BENTLEY')}>
              <img alt="Bentley" style={{ height: "50px", paddingTop: "30px" }} src={Image6}></img>
            </div>
            <p>Bentley</p>
          </div>
          <div className={make === 'BUGATTI' ? 'border' : ''}>
            <div className={make === 'BUGATTI' ? 'te item border' : 'te item'} onClick={() => setMake('BUGATTI')}>
              <img alt="Bugatti" style={{ height: "60px", paddingTop: "25px" }} src={Image7}></img>
            </div>
            <p>Bugatti</p>
          </div>
          <div lassName={make === 'HONDA' ? 'border' : ''}>
            <div className={make === 'HONDA' ? 'te item border' : 'te item'} onClick={() => setMake('HONDA')}>
              <img alt="Honda" style={{ height: "75px", paddingTop: "20px" }} src={Image3}></img>
            </div>
            <p>Honda</p>
          </div>
          <div className={make === 'HUNDAI' ? 'border' : ''}>
            <div className={make === 'HUNDAI' ? 'te item border' : 'te item'} onClick={() => setMake('HUNDAI')}>
              <img alt="Hundai" style={{ height: "35px", paddingTop: "35px" }} src={Image4}></img>
            </div>
            <p>Hundai</p>
          </div>
          <div className={make === 'TOYOTA' ? 'border' : ''}>
            <div className={make === 'TOYOTA' ? 'te item border' : 'te item'} onClick={() => setMake('TOYOTA')}>
              <img alt="Toyota" style={{ height: "75px", paddingTop: "15px" }} src={Image5}></img>
            </div>
            <p>Toyota</p>
          </div>
        </div>
        <div>

        </div>
        <hr></hr>

        <div style={{ width: 300, margin: '50px', display: 'inline-block' }}>
       <p style={{fontFamily:"Inter",fontStyle: "normal",fontWeight: "500",fontSize: "14px",color: "rgba(10, 33, 62, 0.6)"}}>Select Car Year</p> 
        <Autocomplete
         value={year}
         onChange={(event, newYear) => {
           setYear(newYear);
         }}
      id="combo-box-demo"
      options={years.map((option) => option.value)}
      renderInput={(params) => <TextField {...params} variant="outlined" />}
    />
        </div>
        <div style={{ width: 300, margin: '50px', display: 'inline-block' }}>
        <p style={{fontFamily:"Inter",fontStyle: "normal",fontWeight: "500",fontSize: "14px",color: "rgba(10, 33, 62, 0.6)"}}>Select Make</p>
        <Autocomplete
         value={make}
         onChange={(event, newValue) => {
           setMake(newValue);
         }}
      id="combo-box-demo"
      options={allmake.map((option) => option.Make_Name)}
      renderInput={(params) => <TextField {...params} variant="outlined" />}
    />
        </div>
        <div style={{ width: 300, margin: '50px', display: 'inline-block' }}>
        <p style={{fontFamily:"Inter",fontStyle: "normal",fontWeight: "500",fontSize: "14px",color: "rgba(10, 33, 62, 0.6)"}}>Select Model</p>
        <Autocomplete
           value={model}
           onChange={(event, newModel) => {
             setModel(newModel);
           }}
           options={allmodel.map((option) => option.Model_Name)}
      id="combo-box-demo"
      renderInput={(params) => <TextField {...params} variant="outlined" />}
    />
          
        </div>

      </div>
      <br></br>
<div style={{paddingBottom: "10px"}}>
      
      <Button variant="contained" style={{ backgroundColor: "#1AC29A", marginLeft: "80%", padding: "15px 10px", color: "white" }} onClick={Continue}>Proceed to Next step <ArrowForwardIcon style={{paddingLeft:"10px"}} /></Button>
    </div>
    </div>

  )
}
export default StepOne;