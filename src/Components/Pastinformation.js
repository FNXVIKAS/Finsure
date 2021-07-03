import React from 'react'
import { Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import pastimage1 from './pastimage1.jpeg'
import pastimage2 from './pastimage2.jpeg'
import AddCircleOutlineSharpIcon from '@material-ui/icons/AddCircleOutlineSharp';
import RemoveCircleOutlineSharpIcon from '@material-ui/icons/RemoveCircleOutlineSharp';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(3),
    },
    button: {
        margin: theme.spacing(1, 1, 0, 0),
    },
}));

const Pastinformation = (props) => {

    const [accident, setAccident] = React.useState(0);
    const [stop, setStop] = React.useState(0);
    const [speed, setSpeed] = React.useState(0);

    const Continue = () => {

        props.handleNext();


    }
    const Previous = () => {
        props.handleBack();
    }
    const classes = useStyles();
    return (
        <div>
            <div className="Container">
                <p><b>Any Accident and Insurance claims in last 3 Years?</b></p>
                <p style={{ fontFamily: "Inter", fontStyle: "normal", fontWeight: "normal", fontSize: "15px", color: "rgba(10, 33, 62, 0.6)" }}>Accurate information will provide a better quote rate</p>
                <div>

                    <div style={{ marginRight: "40px", backgroundColor: "#F3F5F8", display: "inline-block", width: "479px", height: "70px", border: "1px solid #DEE7ED", borderRadius: "5px" }}>
                        <div style={{ display: "inline-block", height: "60px", width: "10%", textAlign: "center", paddingTop: "10px" }}>
                            <img style={{ height: "30px" }} src={pastimage1}></img>
                        </div>
                        <div style={{ display: "inline-block", height: "30px", width: "50%", marginLeft: "20px" }}>
                            Accident
                        </div>
                        <div style={{ display: "inline-block", height: "30px", width: "30%", textAlign: "center" }}>
                            <RemoveCircleOutlineSharpIcon color="primary" style={{ paddingTop: "10px" }} onClick={() => setAccident(accident - 1)} /> <span style={{ padding: "5px" }}>{accident}</span>   <AddCircleOutlineSharpIcon color="primary" onClick={() => setAccident(accident + 1)} />
                        </div>
                    </div>
                    <div style={{ marginRight: "20px", backgroundColor: "#F3F5F8", display: "inline-block", width: "479px", height: "70px", border: "1px solid #DEE7ED", borderRadius: "5px" }}>
                        <div style={{ display: "inline-block", height: "60px", width: "10%", textAlign: "center", paddingTop: "10px" }}>
                            <img style={{ height: "30px" }} alt="" src={pastimage2}></img>
                        </div>
                        <div style={{ display: "inline-block", height: "30px", width: "50%", marginLeft: "20px" }}>
                            Failed to stop / Yield
                        </div>
                        <div style={{ display: "inline-block", height: "30px", width: "30%", textAlign: "center" }}>
                            <RemoveCircleOutlineSharpIcon color="primary" style={{ paddingTop: "10px" }} onClick={() => setStop(stop - 1)} /> <span style={{ padding: "5px" }}>{stop}</span>   <AddCircleOutlineSharpIcon color="primary" onClick={() => setStop(stop + 1)} />
                        </div>
                    </div>
                </div>
                <div>

                    <div style={{ marginRight: "40px", marginTop: "20px", backgroundColor: "#F3F5F8", display: "inline-block", width: "479px", height: "70px", border: "1px solid #DEE7ED", borderRadius: "5px" }}>
                        <div style={{ display: "inline-block", height: "60px", width: "10%", textAlign: "center", paddingTop: "10px" }}>
                            <img style={{ height: "30px" }} alt ="" src={pastimage1}></img>
                        </div>
                        <div style={{ display: "inline-block", height: "30px", width: "50%", marginLeft: "20px" }}>
                            Speeding Ticket
                        </div>
                        <div style={{ display: "inline-block", height: "30px", width: "30%", textAlign: "center" }}>
                            <RemoveCircleOutlineSharpIcon color="primary" style={{ paddingTop: "10px" }} onClick={() => setSpeed(speed - 1)} /> <span style={{ padding: "5px" }}>{accident}</span>   <AddCircleOutlineSharpIcon color="primary" onClick={() => setSpeed(speed + 1)} />
                        </div>
                    </div>
                    <div style={{ marginRight: "20px", marginTop: "20px", backgroundColor: "#F3F5F8", display: "inline-block", width: "479px", height: "70px", border: "1px solid #DEE7ED", borderRadius: "5px" }}>
                        <div style={{ display: "inline-block", height: "60px", width: "10%", textAlign: "center", paddingTop: "10px" }}>
                            <img style={{ height: "30px" }} src={pastimage1}></img>
                        </div>
                        <div style={{ display: "inline-block", height: "30px", width: "50%", marginLeft: "20px" }}>
                            Driving under the influence / while intoxicated
                        </div>
                        <div style={{ display: "inline-block", height: "30px", width: "30%", textAlign: "center" }}>
                            <RemoveCircleOutlineSharpIcon color="primary" style={{ paddingTop: "10px" }} onClick={() => setAccident(accident - 1)} /> <span style={{ padding: "5px" }}>{accident}</span>   <AddCircleOutlineSharpIcon color="primary" onClick={() => setAccident(accident + 1)} />
                        </div>
                    </div>
                </div>
                <div>

                    <div style={{ marginRight: "40px", marginTop: "20px", backgroundColor: "#F3F5F8", display: "inline-block", width: "479px", height: "70px", border: "1px solid #DEE7ED", borderRadius: "5px" }}>
                        <div style={{ display: "inline-block", height: "60px", width: "10%", textAlign: "center", paddingTop: "10px" }}>
                            <img style={{ height: "30px" }} src={pastimage1}></img>
                        </div>
                        <div style={{ display: "inline-block", height: "30px", width: "50%", marginLeft: "20px" }}>
                            Major violation (Reckless driving, Racing etc.)
                        </div>
                        <div style={{ display: "inline-block", height: "30px", width: "30%", textAlign: "center" }}>
                            <RemoveCircleOutlineSharpIcon color="primary" style={{ paddingTop: "10px" }} onClick={() => setAccident(accident - 1)} /> <span style={{ padding: "5px" }}>{accident}</span>   <AddCircleOutlineSharpIcon color="primary" onClick={() => setAccident(accident + 1)} />
                        </div>
                    </div>
                    <div style={{ marginRight: "20px", marginTop: "20px", backgroundColor: "#F3F5F8", display: "inline-block", width: "479px", height: "70px", border: "1px solid #DEE7ED", borderRadius: "5px" }}>
                        <div style={{ display: "inline-block", height: "60px", width: "10%", textAlign: "center", paddingTop: "10px" }}>
                            <img style={{ height: "30px" }} src={pastimage1}></img>
                        </div>
                        <div style={{ display: "inline-block", height: "30px", width: "50%", marginLeft: "20px" }}>
                            Driving without license / suspended / revoked license
                        </div>
                        <div style={{ display: "inline-block", height: "30px", width: "30%", textAlign: "center" }}>
                            <RemoveCircleOutlineSharpIcon color="primary" style={{ paddingTop: "10px" }} onClick={() => setAccident(accident - 1)} /> <span style={{ padding: "5px" }}>{accident}</span>   <AddCircleOutlineSharpIcon color="primary" onClick={() => setAccident(accident + 1)} />
                        </div>
                    </div>
                </div>
                <div>

                    <div style={{ marginRight: "40px", marginTop: "20px", backgroundColor: "#F3F5F8", display: "inline-block", width: "479px", height: "70px", border: "1px solid #DEE7ED", borderRadius: "5px" }}>
                        <div style={{ display: "inline-block", height: "60px", width: "10%", textAlign: "center", paddingTop: "10px" }}>
                            <img style={{ height: "30px" }} src={pastimage1}></img>
                        </div>
                        <div style={{ display: "inline-block", height: "30px", width: "50%", marginLeft: "20px" }}>
                            Driving without Insurance
                        </div>
                        <div style={{ display: "inline-block", height: "30px", width: "30%", textAlign: "center" }}>
                            <RemoveCircleOutlineSharpIcon color="primary" style={{ paddingTop: "10px" }} onClick={() => setAccident(accident - 1)} /> <span style={{ padding: "5px" }}>{accident}</span>   <AddCircleOutlineSharpIcon color="primary" onClick={() => setAccident(accident + 1)} />
                        </div>
                    </div>
                    <div style={{ marginRight: "20px", marginTop: "20px", backgroundColor: "#F3F5F8", display: "inline-block", width: "479px", height: "70px", border: "1px solid #DEE7ED", borderRadius: "5px" }}>
                        <div style={{ display: "inline-block", height: "60px", width: "10%", textAlign: "center", paddingTop: "10px" }}>
                            <img style={{ height: "30px" }} src={pastimage1}></img>
                        </div>
                        <div style={{ display: "inline-block", height: "30px", width: "50%", marginLeft: "20px" }}>
                            Passing Violation
                        </div>
                        <div style={{ display: "inline-block", height: "30px", width: "30%", textAlign: "center" }}>
                            <RemoveCircleOutlineSharpIcon color="primary" style={{ paddingTop: "10px" }} onClick={() => setAccident(accident - 1)} /> <span style={{ padding: "5px" }}>{accident}</span>   <AddCircleOutlineSharpIcon color="primary" onClick={() => setAccident(accident + 1)} />
                        </div>
                    </div>
                </div>
                <div>

                    <div style={{ marginRight: "40px", marginTop: "20px", backgroundColor: "#F3F5F8", display: "inline-block", width: "479px", height: "70px", border: "1px solid #DEE7ED", borderRadius: "5px" }}>
                        <div style={{ display: "inline-block", height: "60px", width: "10%", textAlign: "center", paddingTop: "10px" }}>
                            <img style={{ height: "30px" }} src={pastimage1}></img>
                        </div>
                        <div style={{ display: "inline-block", height: "30px", width: "50%", marginLeft: "20px" }}>
                            Other moving violation / Ticket
                        </div>
                        <div style={{ display: "inline-block", height: "30px", width: "30%", textAlign: "center" }}>
                            <RemoveCircleOutlineSharpIcon color="primary" style={{ paddingTop: "10px" }} onClick={() => setAccident(accident - 1)} /> <span style={{ padding: "5px" }}>{accident}</span>   <AddCircleOutlineSharpIcon color="primary" onClick={() => setAccident(accident + 1)} />
                        </div>
                    </div>

                </div>
            </div>
            <div style={{ marginLeft: "65%", paddingBottom: "10px" }}>
                <Button style={{ backgroundColor: "#ECF0F3", padding: "15px 10px", color: "rgba(10, 33, 62, 0.4)" }} onClick={Previous} className={classes.button}>
                    <ArrowBackIcon style={{ paddingRight: "10px" }} /> Previous
                </Button>
                <Button
                    style={{ backgroundColor: "#1AC29A", padding: "15px 10px", color: "white" }}
                    variant="contained"
                    color="primary"
                    onClick={Continue}
                    className={classes.button}
                >
                    Proceed to Next step
                    <ArrowForwardIcon style={{ paddingLeft: "10px" }} />
                </Button>
            </div>
        </div>
    )
}
export default Pastinformation
