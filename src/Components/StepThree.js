import React,{useState} from 'react';
import {Stepper,Step,StepLabel,Typography,Button,FormControlLabel,Checkbox} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import Icon1 from './Icon1.jpeg'

//import {  } from '@fortawesome/react-fontawesome'


const initialState = { comp: false, coll: false }
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

function StepThree(props){
  const [comp,setComp] = useState();
  const [coll,setColl]  = useState();
  
  const Continue = () => {
var arr =[]
    props.handleNext();
    var json_string = localStorage.getItem('document');
    console.log('json',json_string);
    var json_obj = JSON.parse( json_string );
    json_obj.coberage = {comp,coll};
    arr = [...arr, json_obj];
     
    localStorage.setItem('document', JSON.stringify(arr));
  }
  const addNew = ()=>{
    
    props.handleNew();
  }
  const [value,setValue] = useState(initialState);
      const Previous = ()=> {
    
        props.handleBack();
      }

      const classes = useStyles();
      const handleChange = (event) => {
        setValue({ ...value, [event.target.name]: event.target.checked });
      };
      console.log(comp);
      console.log(coll);

    return (
        <div>
         
          <div className="Container">
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
            */}
            </div>
            <div className="addMore" onClick={addNew}>
            <LocalShippingOutlinedIcon style={{paddingRight:"12px"}}/>
            Add Another Vehicle
            </div>
               <div style={{ marginLeft: "65%" }}>
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
export default StepThree;