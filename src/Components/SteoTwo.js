import React,{useState} from 'react'
import { Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));


function SteoTwo(props) {
  const Continue = () => {

    props.handleNext();
    var json_string = localStorage.getItem('document');
    console.log('json',json_string);
    var json_obj = JSON.parse( json_string );
    json_obj.uses = {use,distance};
    localStorage.setItem('document', JSON.stringify(json_obj));

  }
  const Previous = () => {
    props.handleBack();
  }
  const classes = useStyles();
  const [use,setUse] = useState();
  const [distance,setDistance] = useState();
  console.log('use',use);
  console.log('distanc',distance)
  return (
    <div>

      <div className="Container">
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
    </div>
  )
}
export default SteoTwo;