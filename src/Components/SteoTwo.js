import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useHistory } from "react-router-dom";
import Menu from './Menu'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));


function SteoTwo(props) {
  let history = useHistory();

  const Continue = () => {
    history.push("/3");
    var json_string = localStorage.getItem('document');
    console.log('json', json_string);
    var json_obj = JSON.parse(json_string);
    json_obj.uses = { use, distance };
    localStorage.setItem('document', JSON.stringify(json_obj));

  }
  const Previous = () => {
    history.push("/1");
  }
  const classes = useStyles();
  const [use, setUse] = useState();
  const [distance, setDistance] = useState();
  console.log('use', use);
  console.log('distanc', distance)
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "20%", backgroundColor: "white", margin: "15px", borderRadius: "10px" }}>
        <Menu />
      </div>
      <div style={{ width: "73%", margin: "15px" }}>
        <div style={{ padding: "15px 10px", marginRight: "20px", display: "flex", position: "relative", fontFamily: "Inter", fontStyle: "normal", fontWeight: "500", fontSize: "25px" }} onClick={Previous}><ArrowBackIcon style={{ paddingRight: "10px", paddingTop: "2px" }} />Car Details</div>
        <div style={{ width: "100%", backgroundColor: "white", borderRadius: "10px", padding: "15px" }}>
          <p><b>I primarily use my car to</b></p>
          <div style={{ display: "flex", margin: "10px",marginBottom:"30px" }}>

            <br></br>
            <RadioGroup row aria-label="position" value={use} onChange={e => setUse(e.target.value)}>
              <div className={use === 'Commute to work' ? 'useForClick' : 'useFor'}>
                <FormControlLabel value="Commute to work" control={<Radio color="default" />} label="Commute to work" labelPlacement="start" />
              </div>
              <div className={use === 'Commute to school' ? 'useForClick' : 'useFor'}>
                <FormControlLabel value="Commute to school" control={<Radio color="default" />} label="Commute to school" labelPlacement="start" />
              </div>
              <div className={use === 'Vacation / Pleasure' ? 'useForClick' : 'useFor'}>
                <FormControlLabel value="Vacation / Pleasure" control={<Radio color="default" />} label="Vacation / Pleasure" labelPlacement="start" />
              </div>
            </RadioGroup>
          </div>
          <hr></hr>
        <p><b>Distance each way (in miles)</b></p>
<div style={{display:"flex", margin: "10px"}}>
<div className={distance === '5' ? 'distanceClick' : 'distance'} onClick={() => setDistance('5')}>
            5
          </div>
          <div className={distance === '10' ? 'distanceClick' : 'distance'} onClick={() => setDistance('10')}>
            10
          </div>

          <div className={distance === '15' ? 'distanceClick' : 'distance'} onClick={() => setDistance('15')}>
            15
          </div>
          <div className={distance === '25' ? 'distanceClick' : 'distance'} onClick={() => setDistance('25')}>
            25
          </div>
          <div className={distance === '50' ? 'distanceClick' : 'distance'} onClick={() => setDistance('50')}>
            50
          </div>
          <div className={distance === '50+' ? 'distanceClick' : 'distance'} onClick={() => setDistance('50+')}>
            50+
          </div>

</div>
        </div>
        <div style={{position:"absolute",right:"0px",margin:"20px"}}>
                <Button style={{ backgroundColor: "#ECF0F3", padding: "15px 10px" ,color:"rgba(10, 33, 62, 0.4)",marginRight:"20px"}} onClick={Previous}><ArrowBackIcon  style={{paddingRight:"10px"}}/> Previous</Button>
      <Button variant="contained" style={{ backgroundColor: "#1AC29A", padding: "15px 10px", color: "white"}} onClick={Continue}>Proceed to Next step <ArrowForwardIcon style={{paddingLeft:"10px"}} /></Button>
    </div>
      </div>


      {/*  <div className="Container">
        <p><b>I primarily use my car to</b></p>
        <RadioGroup row aria-label="position" value={use} onChange={e => setUse(e.target.value)}>
          <div className={use === 'Commute to work' ? 'useForClick' : 'useFor'}>
            <FormControlLabel value="Commute to work" control={<Radio color="default" />} label="Commute to work" labelPlacement="start" />
          </div>
          <div className={use === 'Commute to school' ? 'useForClick' : 'useFor'}>
            <FormControlLabel value="Commute to school" control={<Radio color="default" />} label="Commute to school" labelPlacement="start" />
          </div>
          <div className={use === 'Vacation / Pleasure' ? 'useForClick' : 'useFor'}>
            <FormControlLabel value="Vacation / Pleasure" control={<Radio color="default" />} label="Vacation / Pleasure" labelPlacement="start" />
          </div>
        </RadioGroup>
        <br>
        </br>
        <hr></hr>
        <div>
          <p><b>Distance each way (in miles)</b></p>
          <div className={distance === '5' ? 'distanceClick' : 'distance'} onClick={() => setDistance('5')}>
            5
          </div>
          <div className={distance === '10' ? 'distanceClick' : 'distance'} onClick={() => setDistance('10')}>
            10
          </div>

          <div className={distance === '15' ? 'distanceClick' : 'distance'} onClick={() => setDistance('15')}>
            15
          </div>
          <div className={distance === '25' ? 'distanceClick' : 'distance'} onClick={() => setDistance('25')}>
            25
          </div>
          <div className={distance === '50' ? 'distanceClick' : 'distance'} onClick={() => setDistance('50')}>
            50
          </div>
          <div className={distance === '50+' ? 'distanceClick' : 'distance'} onClick={() => setDistance('50+')}>
            50+
          </div>
        </div>
      </div>

      <br></br>
      <div style={{ marginLeft: "65%",paddingBottom: "10px"}}>
        <Button style={{ backgroundColor: "#ECF0F3", padding: "15px 10px" ,color:"rgba(10, 33, 62, 0.4)"}} onClick={Previous} className={classes.button}>
        <ArrowBackIcon  style={{paddingRight:"10px"}}/> Previous
        </Button>
        <Button
          style={{ backgroundColor: "#1AC29A", padding: "15px 10px", color: "white" }}
          variant="contained"
          color="primary"
          onClick={Continue}
          className={classes.button}
        >
          Proceed to Next step
          <ArrowForwardIcon style={{paddingLeft:"10px"}} />
        </Button>
      </div>
  */}
    </div>
  )
}
export default SteoTwo;