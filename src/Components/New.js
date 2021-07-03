import React, { useEffect, useState } from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Stepper,Step,StepLabel,Typography,Button} from '@material-ui/core';
import StepOne from './StepOne';
import SteoTwo from './SteoTwo';
import StepThree from './StepThree';
import Driverinfo from './Driverinfo'
import Insurancedetails from './Insurancedetails'
import Pastinformation from './Pastinformation'


const useStyles = makeStyles((theme) => ({
    root: {
      width: '20%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));
  
  
export const New = () => {
    const [activeStep,setActiveStep] = useState(0);
    function getSteps() {
        return ['', '', '','','',''];
        
    }

    
      const handleNext = ()=>{
          setActiveStep(prevActiveStep => prevActiveStep+1);
      }
      const handleNew = ()=>{
        setActiveStep(prevActiveStep => prevActiveStep-2);
    }
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
     
      const steps = getSteps();
    function getStepContent(stepIndex) {
        switch (stepIndex) {
          case 0:
            return <StepOne handleNext={handleNext}/>;
          case 1:
            return <SteoTwo handleBack={handleBack} handleNext={handleNext} />;
          case 2:
            return <StepThree handleBack={handleBack} handleNext={handleNext} handleNew={handleNew}/>;
            case 3:
              return <Driverinfo handleBack={handleBack} handleNext={handleNext} handleNew={handleNew}/>;
              case 4:
                return <Insurancedetails handleBack={handleBack} handleNext={handleNext} handleNew={handleNew}/>;
                case 5:
                  return <Pastinformation handleBack={handleBack} handleNext={handleNext} handleNew={handleNew}/>;
          default:
            return 'Unknown stepIndex';
        }
      }
      
    //const [activeStep, setActiveStep] = useState(0);

  
  
//  const handleNext = () => {
//    setActiveStep((prevActiveStep) => prevActiveStep + 1);
//  };
//
//
//
const handleReset = () => {
    setActiveStep(0);
  };

const classes = useStyles();
    return (
        <div>
            <Stepper style={{width:"20%",marginLeft:"70%",backgroundColor: "#E5E5E5"}}activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}

      </Stepper>

      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
           
            </div>
          </div>
        )}
      </div>
      
     
        </div>
    )
}
export default New;