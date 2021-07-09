import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Typography, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import Icon1 from './Icon1.jpeg'
import { useHistory } from "react-router-dom";
import Menu from './Menu'

//import {  } from '@fortawesome/react-fontawesome'

function StepThree() {
  let history = useHistory();
  const [comp, setComp] = useState(false);
  const [coll, setColl] = useState(false);

  const Continue = () => {
    history.push("/4")
    var arr = []
    var json_string = localStorage.getItem('document');
    console.log('json', json_string);
    var json_obj = JSON.parse(json_string);
    json_obj.coberage = { comp, coll };
    arr = [...arr, json_obj];

    localStorage.setItem('document', JSON.stringify(arr));
  }
  const addNew = () => {

    history.push("/1")
  }
  const Previous = () => {
    history.push("/2");
  }


  console.log(comp);
  console.log(coll);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "20%", backgroundColor: "white", margin: "15px", borderRadius: "10px" }}>
        <Menu />
      </div>
      <div style={{ width: "73%", margin: "15px" }}>

        <div style={{ padding: "15px 10px", marginRight: "20px", display: "flex", position: "relative", fontFamily: "Inter", fontStyle: "normal", fontWeight: "500", fontSize: "25px" }} onClick={Previous}><ArrowBackIcon style={{ paddingRight: "10px", paddingTop: "2px" }} />Insurance Details</div>
        <div style={{ width: "100%", backgroundColor: "white", borderRadius: "10px", padding: "15px",paddingBottom:"30px" }}>
          <p><b>What kind of coberage are you looking for?</b></p>
          <div style={{ display: "flex",    flexWrap: "wrap" }}>
            <div className={comp === true ? 'collClick' : 'coll'}>
              <FormControlLabel
                control={<Checkbox checked={comp} onChange={e => setComp(e.target.checked)} name="comp" color="primary" />}
                label="Comprehensive"
                labelPlacement="start"

              />
            </div>
            <div className={coll === true ? 'collClick' : 'coll'}>
              <FormControlLabel
                control={<Checkbox checked={coll} onChange={e => setColl(e.target.checked)} name="coll" color="primary" />}
                label="Collision"
                labelPlacement="start"

              />
            </div>
            
          </div>
        </div>
        <div style={{display:"flex",flexWrap: "wrap",justifyContent: "center"}}>
        <div className="addMore" onClick={addNew}>
            <LocalShippingOutlinedIcon style={{paddingRight:"15px"}}/>
            Add Another Vehicle
            </div>
        </div>
        <div style={{position:"absolute",right:"0px",margin:"20px"}}>
                <Button style={{ backgroundColor: "#ECF0F3", padding: "15px 10px" ,color:"rgba(10, 33, 62, 0.4)",marginRight:"20px"}} onClick={Previous}><ArrowBackIcon  style={{paddingRight:"10px"}}/> Previous</Button>
      <Button variant="contained" style={{ backgroundColor: "#1AC29A", padding: "15px 10px", color: "white"}} onClick={Continue}>Proceed to Next step <ArrowForwardIcon style={{paddingLeft:"10px"}} /></Button>
    </div>
      </div>


      {/*}  <div className="Container">
          <p><b>What kind of coberage are you looking for?</b></p>
            <div className={comp === true ? 'useForClick coll' : 'useFor coll'}>
                       <FormControlLabel
                        control={<Checkbox checked={comp} onChange={e => setComp(e.target.checked)} name="comp"  color="primary" />}
          label="Comprehensive"
          labelPlacement="start"
          
        />
        </div>
        <div style={{display:"inlineBlock"}} className={coll === true ? 'useForClick coll' : 'useFor coll'}>
        <FormControlLabel
                        control={<Checkbox checked={coll} onChange={e => setColl(e.target.checked)} name="coll"  color="primary"/>}
          label="Collision"
          labelPlacement="start"
          
        />
        </div>
 
            {/*
          <div onClick={event => setInput('comp',!value.comp)} className={value.comp === false ? 'useFor' : 'useForClick'}>
            <label>Comprehensive</label>
          <input value={value.comp} type="checkbox" onChange={event => setInput('comp',!value.comp)}/>
        </div>
            </div>
            <div className="addMore" onClick={addNew}>
            <LocalShippingOutlinedIcon style={{paddingRight:"12px"}}/>
            Add Another Vehicle
            </div>
               <div style={{ marginLeft: "65%" }}>
        <Button style={{ backgroundColor: "#ECF0F3", padding: "15px 10px" ,color:"rgba(10, 33, 62, 0.4)"}} onClick={Previous}>
        <ArrowBackIcon  style={{paddingRight:"10px"}}/> Previous
        </Button>
        <Button
          style={{ backgroundColor: "#1AC29A", padding: "15px 10px", color: "white" }}
          variant="contained"
          color="primary"
          onClick={Continue}
        
        >

          Proceed to Next step
  <ArrowForwardIcon style={{paddingLeft:"10px"}} />
        </Button>
          </div>
          */}

    </div>
  )
}
export default StepThree;