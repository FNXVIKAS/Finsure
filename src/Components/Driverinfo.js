import React,{useState,useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
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

const Driverinfo = () => {
let history = useHistory();
  const Continue = () => {
history.push("/5")
  }
  const Previous = ()=> {
    history.push("/3")
  }
  const classes = useStyles();
    const [firstName,setFirstName] = useState();
    const [lastName,setLastName] = useState();
    const [dob,setDob] = useState();
    const [gender,setGender] = useState();
    const [licenseNumber,setLicenseNumber] = useState();
    const [licenseStatus,setLicenseStatus] = useState();
    const [licenseSuspension,setLicenseSuspension] =useState();
    const[derogatoryReport,setDerogatoryReport] = useState();
    const [education,setEducation] = useState();
    const [licenseAge,setLicenseAge] = useState(0);
    const [makes,setMakes] = useState([]);
    const [models,setModels] = useState([]);
    const [years,setYears] = useState([]);

    console.log("gender",gender);
    console.log(licenseNumber,"license");
    useEffect(() => {
      var json_string = localStorage.getItem('document');
      console.log('json sads',json_string);
      var json_obj = JSON.parse( json_string );
      console.log(json_obj);
      json_obj.map((obj,i) => 
        setMakes(arr=>[...arr,obj.make])
      )
      json_obj.map((obj,i) => 
      setModels(arr=>[...arr,obj.model])
      
    )
     json_obj.map((obj,i) => 
     setYears(arr=>[...arr,obj.year])
    )
   

      console.log(makes);

    }, [])
    console.log(firstName);
    console.log(dob);
    return (
      <div style={{ display: "flex" }}>
      <div style={{ width: "20%", backgroundColor: "white", margin: "15px", borderRadius: "10px" }}>
          <Menu />
      </div>
      <div style={{ width: "73%", margin: "15px" }}>
      <div style={{ padding: "15px 10px",marginRight:"20px",display: "flex",position:"relative",fontFamily: "Inter",fontStyle: "normal",fontWeight: "500",fontSize: "25px"}} onClick={Previous}><ArrowBackIcon  style={{paddingRight:"10px",paddingTop: "2px"}}/> Driver Details</div>
      <div style={{ width: "100%", backgroundColor: "white", borderRadius: "10px", padding: "15px" }}>
        <div style={{display:"flex",  flexWrap: "wrap"}}>
          <div className="driveDetail">
          <lable style={{color:"rgba(10, 33, 62, 0.6)",fontSize: "14px"}}>First Name</lable>
                  <br></br>
                  <input style={{height:"50px",width:"100%",background: "rgba(251, 252, 253, 1)",border: "1px solid rgba(10, 33, 62, 0.1)",borderRadius: "5px",fontSize:"20px"}} type="text" value={firstName} onChange={e=>setFirstName(e.target.value)}></input>
               
          </div>
          <div className="driveDetail">
          <lable style={{color:"rgba(10, 33, 62, 0.6)",fontSize: "14px"}}>Last Name</lable>
                  <br></br>
                  <input style={{height:"50px",width:"100%",background: "rgba(251, 252, 253, 1)",border: "1px solid rgba(10, 33, 62, 0.1)",borderRadius: "5px",fontSize:"20px"}} type="text" value={lastName} onChange={e=>setLastName(e.target.value)}></input>
                
          </div>
          <div className="driveDetail">
          <lable style={{color:"rgba(10, 33, 62, 0.6)",fontSize: "14px"}}>Date Of Birth</lable>
                  <br></br>
                  <input style={{height:"50px",width:"100%",background: "rgba(251, 252, 253, 1)",border: "1px solid rgba(10, 33, 62, 0.1)",borderRadius: "5px",fontSize:"20px"}}type="date" value={dob} onChange={e=>setDob(e.target.value)}></input>
             
          </div>
     
        </div>
        <div style={{display:"flex",  flexWrap: "wrap"}}>
          <div className="driveDetail">
          <lable style={{color:"rgba(10, 33, 62, 0.6)",fontSize: "14px"}}>Gender</lable>
                  <br></br>
                <select style={{height:"50px",width:"100%",background: "rgba(251, 252, 253, 1)",border: "1px solid rgba(10, 33, 62, 0.1)",borderRadius: "5px",fontSize:"20px"}} value={gender} onChange={e=>setGender(e.target.value)}>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Non-Binary</option>
                </select>
          </div>
          <div className="driveDetail">
          <lable style={{color:"rgba(10, 33, 62, 0.6)",fontSize: "14px"}}>License Number</lable>
                  <br></br>
                  <input style={{height:"50px",width:"100%",background: "rgba(251, 252, 253, 1)",border: "1px solid rgba(10, 33, 62, 0.1)",borderRadius: "5px",fontSize:"20px"}} type="number" value={licenseNumber} onChange={e=>setLicenseNumber(e.target.value)}></input>
              
          </div>
          <div className="driveDetail">
          <lable style={{color:"rgba(10, 33, 62, 0.6)",fontSize: "14px"}}>License Status</lable>
                  <br></br>
                  <select style={{height:"50px",width:"100%",background: "rgba(251, 252, 253, 1)",border: "1px solid rgba(10, 33, 62, 0.1)",borderRadius: "5px",fontSize:"20px"}} name="cars" id="cars">
                      <option value="active">Active</option>
                      <option value="permit">Permit</option>
                      <option value="suspended">Suspended</option>
                      <option value="foreign">Foreign</option>
                      <option value="expired">Expired</option>
                </select>
          </div>
     
        </div>

        <div style={{display:"flex",  flexWrap: "wrap"}}>
          <div className="driveDetail">
          <lable style={{color:"rgba(10, 33, 62, 0.6)",fontSize: "14px"}}>Any Licens Suspensions?</lable>
                  <br></br>
                  <select style={{height:"50px",width:"100%",background: "rgba(251, 252, 253, 1)",border: "1px solid rgba(10, 33, 62, 0.1)",borderRadius: "5px",fontSize:"20px"}} name="cars" id="cars">
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                </select>
          </div>
          <div className="driveDetail">
          <lable style={{color:"rgba(10, 33, 62, 0.6)",fontSize: "14px"}}>Any Derogatory Report?</lable>
                  <br></br>
                  <select style={{height:"50px",width:"100%",background: "rgba(251, 252, 253, 1)",border: "1px solid rgba(10, 33, 62, 0.1)",borderRadius: "5px",fontSize:"20px"}} name="cars" id="cars">
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                </select>
          </div>
          <div className="driveDetail">
          <lable style={{color:"rgba(10, 33, 62, 0.6)",fontSize: "14px"}}>Age When obtained Driver???s license</lable>
                  <br></br>
                  <input style={{height:"50px",width:"100%",background: "rgba(251, 252, 253, 1)",border: "1px solid rgba(10, 33, 62, 0.1)",borderRadius: "5px",fontSize:"20px"}}type="Number"></input>
               
          </div>
     
        </div>

        <div style={{display:"flex",  flexWrap: "wrap"}}>
          <div className="driveDetail">
          <lable style={{color:"rgba(10, 33, 62, 0.6)",fontSize: "14px"}}>Highest Level of Education</lable>
                  <br></br>
                  <select style={{height:"50px",width:"100%",background: "rgba(251, 252, 253, 1)",border: "1px solid rgba(10, 33, 62, 0.1)",borderRadius: "5px",fontSize:"20px"}} name="cars" id="cars">
                  <option selected="selected">Select Education</option>
                      <option value="graduate">Graduate</option>
                      <option value="undergraduate">Under-Graduate</option>
                      <option value="postgraduate">Post-Graduate</option>

                </select>
          </div>
          <div className="driveDetail">
          <lable style={{color:"rgba(10, 33, 62, 0.6)",fontSize: "14px"}}>Car Make</lable>
                  <br></br>
                  <select style={{height:"50px",width:"100%",background: "rgba(251, 252, 253, 1)",border: "1px solid rgba(10, 33, 62, 0.1)",borderRadius: "5px",fontSize:"20px"}} name="cars" id="cars">
                  {makes.map((make)=>{
                    return <option value={make}>{make}</option>
                  })}
                  
                </select>
          </div>
          <div className="driveDetail">
          <lable style={{color:"rgba(10, 33, 62, 0.6)",fontSize: "14px"}}>Car Model</lable>
                  <br></br>
                  <select style={{height:"50px",width:"100%",background: "rgba(251, 252, 253, 1)",border: "1px solid rgba(10, 33, 62, 0.1)",borderRadius: "5px",fontSize:"20px"}} name="cars" id="cars">
                  
                  {models.map((model)=>{
                    return <option value={model}>{model}</option>
                  })}
                </select>    
          </div>
     
        </div>

      </div>
      <div style={{position:"absolute",right:"0px",margin:"20px"}}>
                <Button style={{ backgroundColor: "#ECF0F3", padding: "15px 10px" ,color:"rgba(10, 33, 62, 0.4)",marginRight:"20px"}} onClick={Previous}><ArrowBackIcon  style={{paddingRight:"10px"}}/> Previous</Button>
      <Button variant="contained" style={{ backgroundColor: "#1AC29A", padding: "15px 10px", color: "white"}} onClick={Continue}>Proceed to Next step <ArrowForwardIcon style={{paddingLeft:"10px"}} /></Button>
    </div>
      </div>
          {/*  <div className="Container">
                <div style={{marginBottom:"25px"}}> 
                    <div className="check">
                    <lable style={{color:"rgba(10, 33, 62, 0.6)",fontSize: "14px"}}>First Name</lable>
                  <br></br>
                  <input style={{height:"50px",width:"80%",background: "rgba(251, 252, 253, 1)",border: "1px solid rgba(10, 33, 62, 0.1)",borderRadius: "5px",fontSize:"20px"}} type="text" value={firstName} onChange={e=>setFirstName(e.target.value)}></input>
                </div>
                <div className="check">
                  <lable style={{color:"rgba(10, 33, 62, 0.6)",fontSize: "14px"}}>Last Name</lable>
                  <br></br>
                  <input style={{height:"50px",width:"80%",background: "rgba(251, 252, 253, 1)",border: "1px solid rgba(10, 33, 62, 0.1)",borderRadius: "5px",fontSize:"20px"}} type="text" value={lastName} onChange={e=>setLastName(e.target.value)}></input>
                </div>
                <div className="check">
                <lable style={{color:"rgba(10, 33, 62, 0.6)",fontSize: "14px"}}>Date Of Birth</lable>
                  <br></br>
                  <input style={{height:"50px",width:"80%",background: "rgba(251, 252, 253, 1)",border: "1px solid rgba(10, 33, 62, 0.1)",borderRadius: "5px",fontSize:"20px"}}type="date" value={dob} onChange={e=>setDob(e.target.value)}></input>
                </div>
                </div>
                <div style={{marginBottom:"25px"}}>
                    <div className="check">
                    <lable style={{color:"rgba(10, 33, 62, 0.6)",fontSize: "14px"}}>Gender</lable>
                  <br></br>
                <select style={{height:"50px",width:"80%",background: "rgba(251, 252, 253, 1)",border: "1px solid rgba(10, 33, 62, 0.1)",borderRadius: "5px",fontSize:"20px"}} name="cars" id="cars">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Non-Binary</option>
                </select>
                </div>
                <div className="check">
                  <lable style={{color:"rgba(10, 33, 62, 0.6)",fontSize: "14px"}}>License Number</lable>
                  <br></br>
                  <input style={{height:"50px",width:"80%",background: "rgba(251, 252, 253, 1)",border: "1px solid rgba(10, 33, 62, 0.1)",borderRadius: "5px",fontSize:"20px"}} type="number"></input>
                </div>
                <div className="check">
                <lable style={{color:"rgba(10, 33, 62, 0.6)",fontSize: "14px"}}>License Status</lable>
                  <br></br>
                  <select style={{height:"50px",width:"80%",background: "rgba(251, 252, 253, 1)",border: "1px solid rgba(10, 33, 62, 0.1)",borderRadius: "5px",fontSize:"20px"}} name="cars" id="cars">
                      <option value="active">Active</option>
                      <option value="permit">Permit</option>
                      <option value="suspended">Suspended</option>
                      <option value="foreign">Foreign</option>
                      <option value="expired">Expired</option>
                </select>
                </div>
                </div>
                <div style={{marginBottom:"25px"}}>
                    <div className="check">
                    <lable style={{color:"rgba(10, 33, 62, 0.6)",fontSize: "14px"}}>Any Licens Suspensions?</lable>
                  <br></br>
                  <select style={{height:"50px",width:"80%",background: "rgba(251, 252, 253, 1)",border: "1px solid rgba(10, 33, 62, 0.1)",borderRadius: "5px",fontSize:"20px"}} name="cars" id="cars">
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                </select>
                </div>
                <div className="check">
                  <lable style={{color:"rgba(10, 33, 62, 0.6)",fontSize: "14px"}}>Any Derogatory Report?</lable>
                  <br></br>
                  <select style={{height:"50px",width:"80%",background: "rgba(251, 252, 253, 1)",border: "1px solid rgba(10, 33, 62, 0.1)",borderRadius: "5px",fontSize:"20px"}} name="cars" id="cars">
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                </select>
                </div>
                <div className="check">
                <lable style={{color:"rgba(10, 33, 62, 0.6)",fontSize: "14px"}}>Age When obtained Driver???s license</lable>
                  <br></br>
                  <input style={{height:"50px",width:"80%",background: "rgba(251, 252, 253, 1)",border: "1px solid rgba(10, 33, 62, 0.1)",borderRadius: "5px",fontSize:"20px"}}type="Number"></input>
                </div>
                </div>
                <div style={{marginBottom:"25px"}}>
                    <div className="check">
                    <lable style={{color:"rgba(10, 33, 62, 0.6)",fontSize: "14px"}}>Highest Level of Education</lable>
                  <br></br>
                  <select style={{height:"50px",width:"80%",background: "rgba(251, 252, 253, 1)",border: "1px solid rgba(10, 33, 62, 0.1)",borderRadius: "5px",fontSize:"20px"}} name="cars" id="cars">
                  <option selected="selected">Select Education</option>
                      <option value="graduate">Graduate</option>
                      <option value="undergraduate">Under-Graduate</option>
                      <option value="postgraduate">Post-Graduate</option>

                </select>
                </div>
                <div className="check">
                  <lable style={{color:"rgba(10, 33, 62, 0.6)",fontSize: "14px"}}>Car Make</lable>
                  <br></br>
                  <select style={{height:"50px",width:"80%",background: "rgba(251, 252, 253, 1)",border: "1px solid rgba(10, 33, 62, 0.1)",borderRadius: "5px",fontSize:"20px"}} name="cars" id="cars">
                  {makes.map((make)=>{
                    return <option value={make}>{make}</option>
                  })}
                  
                </select>
                </div>
                <div className="check">
                <lable style={{color:"rgba(10, 33, 62, 0.6)",fontSize: "14px"}}>Car Model</lable>
                  <br></br>
                  <select style={{height:"50px",width:"80%",background: "rgba(251, 252, 253, 1)",border: "1px solid rgba(10, 33, 62, 0.1)",borderRadius: "5px",fontSize:"20px"}} name="cars" id="cars">
                  
                  {models.map((model)=>{
                    return <option value={model}>{model}</option>
                  })}
                </select>
                </div>
                </div>
            </div>
                */}
          
        </div>
    )
}
export default Driverinfo;