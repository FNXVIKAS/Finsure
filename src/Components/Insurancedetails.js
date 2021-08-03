import React, { useState } from 'react'
import CheckIcon from '@material-ui/icons/Check';
import { Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
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
  
const Insurancedetails = (props) => {
    let history = useHistory();
    const Continue = () => {

        props.handleNext();
     
    
      }
      const Previous = () => {
        history.push("/4")
      }
      const classes = useStyles();
    const [long, setLong] = useState();
    const [currentCarrier, setCurrentCarrier] = useState();
    console.log(long)
    return (
        
      <div style={{ display: "flex" }}>
      <div style={{ width: "20%", backgroundColor: "white", margin: "15px", borderRadius: "10px" }}>
          <Menu />
      </div>
      <div style={{ width: "73%", margin: "15px"}}>
      <div style={{ padding: "15px 10px",marginRight:"20px",display: "flex",position:"relative",fontFamily: "Inter",fontStyle: "normal",fontWeight: "500",fontSize: "25px"}} onClick={Previous}><ArrowBackIcon  style={{paddingRight:"10px",paddingTop: "2px"}}/>Insurance Details</div>
     <div style={{ width: "100%", backgroundColor: "white", borderRadius: "10px", padding: "25px" }}>
     <p><b>Who is your current Insurance carrier?</b></p>
        <div style={{display:"flex",padding:"20px",flexWrap:"wrap"}}>
        
         <div className= {currentCarrier === 'AllState' ? 'priorInsuranceclick' : 'priorInsurance'} onClick={() => setCurrentCarrier('AllState')}>
                        <div className= {currentCarrier === 'AllState' ? 'tikclick' : 'tik'}>
                        <CheckIcon />
                        </div>
         </div>
         <div className= {currentCarrier === 'BristolWest' ? 'priorInsuranceclick' : 'priorInsurance'} onClick={() => setCurrentCarrier('BristolWest')}>
                        <div className= {currentCarrier === 'BristolWest' ? 'tikclick' : 'tik'}>
                        <CheckIcon />
                        </div>
                    </div>
                    <div className= {currentCarrier === 'Farmers' ? 'priorInsuranceclick' : 'priorInsurance'} onClick={() => setCurrentCarrier('Farmers')}>
                        <div className= {currentCarrier === 'Farmers' ? 'tikclick' : 'tik'}>
                        <CheckIcon />
                        </div>
                    </div>
                    <div className= {currentCarrier === 'Infinity' ? 'priorInsuranceclick' : 'priorInsurance'} onClick={() => setCurrentCarrier('Infinity')}>
                        <div className= {currentCarrier === 'Infinity' ? 'tikclick' : 'tik'}>
                        <CheckIcon />
                        </div>
                    </div>
                    <div className= {currentCarrier === 'Mercury' ? 'priorInsuranceclick' : 'priorInsurance'} onClick={() => setCurrentCarrier('Mercury')}>
                        <div className= {currentCarrier === 'Mercury' ? 'tikclick' : 'tik'}>
                        <CheckIcon />
                        </div>
                    </div>
                    <div className= {currentCarrier === 'Root' ? 'priorInsuranceclick' : 'priorInsurance'} onClick={() => setCurrentCarrier('Root')}>
                        <div className= {currentCarrier === 'Root' ? 'tikclick' : 'tik'}>
                        <CheckIcon />
                        </div>
                    </div>

        </div>
        <hr></hr>
        <p><b>How long have you been insured?</b></p>
        <div style={{display:"flex",padding:"20px",flexWrap:"wrap"}}>
        <div className={long === '5-6 years' ? 'howlonginsuredclick' : 'howlonginsured'} onClick={() => setLong('5-6 years')}>
                        <div style={{}}>5 - 6 Years</div>
                        <div style={{ }}><CheckIcon /></div>
                    </div>
                    <div className={long === '3-4 years' ? 'howlonginsuredclick' : 'howlonginsured'} onClick={() => setLong('3-4 years')}>
                        <div style={{ display: "inline-block", marginTop: "20px" }}>3 - 4 Years</div>
                        <div style={{ display: "inline-block", marginLeft: "20%", color: "rgba(243, 245, 248, 1)", paddingTop: "15px" }}><CheckIcon /></div>
                    </div>
                    <div className={long === '1-2 years' ? 'howlonginsuredclick' : 'howlonginsured'} onClick={() => setLong('1-2 years')}>
                        <div style={{ display: "inline-block", marginTop: "20px" }}>1 - 2 Year</div>
                        <div style={{ display: "inline-block", marginLeft: "20%", color: "rgba(243, 245, 248, 1)", paddingTop: "15px" }}><CheckIcon /></div>
                    </div>
                    <div className={long === '6-12 months' ? 'howlonginsuredclick' : 'howlonginsured'} onClick={() => setLong('6-12 months')}>
                        <div style={{ display: "inline-block", marginTop: "20px" }}>6 - 12 Months</div>
                        <div style={{ display: "inline-block", marginLeft: "15%", color: "rgba(243, 245, 248, 1)", paddingTop: "15px" }}><CheckIcon /></div>
                    </div>
                    <div className={long === '6 months' ? 'howlonginsuredclick' : 'howlonginsured'} onClick={() => setLong('6 months')}>
                        <div style={{ display: "inline-block", marginTop: "20px" }}>6 Months</div>
                        <div style={{ display: "inline-block", marginLeft: "20%", color: "rgba(243, 245, 248, 1)", paddingTop: "15px" }}><CheckIcon /></div>
                    </div>
            </div>
     </div>
      </div>
      </div>
        /*
        <div>
            <div className="Container">
                <div>
                    <p><b>Who is your current Insurance carrier?</b></p>
                    <div className= {currentCarrier === 'AllState' ? 'priorInsuranceclick' : 'priorInsurance'} onClick={() => setCurrentCarrier('AllState')}>
                        <div className= {currentCarrier === 'AllState' ? 'tikclick' : 'tik'}>
                        <CheckIcon />
                        </div>
                    </div>
                    <div className= {currentCarrier === 'BristolWest' ? 'priorInsuranceclick' : 'priorInsurance'} onClick={() => setCurrentCarrier('BristolWest')}>
                        <div className= {currentCarrier === 'BristolWest' ? 'tikclick' : 'tik'}>
                        <CheckIcon />
                        </div>
                    </div>
                    <div className= {currentCarrier === 'Farmers' ? 'priorInsuranceclick' : 'priorInsurance'} onClick={() => setCurrentCarrier('Farmers')}>
                        <div className= {currentCarrier === 'Farmers' ? 'tikclick' : 'tik'}>
                        <CheckIcon />
                        </div>
                    </div>
                    <div className= {currentCarrier === 'Infinity' ? 'priorInsuranceclick' : 'priorInsurance'} onClick={() => setCurrentCarrier('Infinity')}>
                        <div className= {currentCarrier === 'Infinity' ? 'tikclick' : 'tik'}>
                        <CheckIcon />
                        </div>
                    </div>
                    <div className= {currentCarrier === 'Mercury' ? 'priorInsuranceclick' : 'priorInsurance'} onClick={() => setCurrentCarrier('Mercury')}>
                        <div className= {currentCarrier === 'Mercury' ? 'tikclick' : 'tik'}>
                        <CheckIcon />
                        </div>
                    </div>
                    <div className= {currentCarrier === 'Root' ? 'priorInsuranceclick' : 'priorInsurance'} onClick={() => setCurrentCarrier('Root')}>
                        <div className= {currentCarrier === 'Root' ? 'tikclick' : 'tik'}>
                        <CheckIcon />
                        </div>
                    </div>
                </div>
                <div>
                    <p><b>How long have you been insured?</b></p>
                    <div className={long === '5-6 years' ? 'howlonginsuredclick' : 'howlonginsured'} onClick={() => setLong('5-6 years')}>
                        <div style={{ display: "inline-block", marginTop: "20px" }}>5 - 6 Years</div>
                        <div style={{ display: "inline-block", marginLeft: "20%", color: "rgba(243, 245, 248, 1)", paddingTop: "15px" }}><CheckIcon /></div>
                    </div>
                    <div className={long === '3-4 years' ? 'howlonginsuredclick' : 'howlonginsured'} onClick={() => setLong('3-4 years')}>
                        <div style={{ display: "inline-block", marginTop: "20px" }}>3 - 4 Years</div>
                        <div style={{ display: "inline-block", marginLeft: "20%", color: "rgba(243, 245, 248, 1)", paddingTop: "15px" }}><CheckIcon /></div>
                    </div>
                    <div className={long === '1-2 years' ? 'howlonginsuredclick' : 'howlonginsured'} onClick={() => setLong('1-2 years')}>
                        <div style={{ display: "inline-block", marginTop: "20px" }}>1 - 2 Year</div>
                        <div style={{ display: "inline-block", marginLeft: "20%", color: "rgba(243, 245, 248, 1)", paddingTop: "15px" }}><CheckIcon /></div>
                    </div>
                    <div className={long === '6-12 months' ? 'howlonginsuredclick' : 'howlonginsured'} onClick={() => setLong('6-12 months')}>
                        <div style={{ display: "inline-block", marginTop: "20px" }}>6 - 12 Months</div>
                        <div style={{ display: "inline-block", marginLeft: "15%", color: "rgba(243, 245, 248, 1)", paddingTop: "15px" }}><CheckIcon /></div>
                    </div>
                    <div className={long === '6 months' ? 'howlonginsuredclick' : 'howlonginsured'} onClick={() => setLong('6 months')}>
                        <div style={{ display: "inline-block", marginTop: "20px" }}>6 Months</div>
                        <div style={{ display: "inline-block", marginLeft: "20%", color: "rgba(243, 245, 248, 1)", paddingTop: "15px" }}><CheckIcon /></div>
                    </div>
                </div>
            </div>
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
        */
    )
}
export default Insurancedetails
