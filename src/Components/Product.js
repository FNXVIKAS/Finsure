import React from 'react'
import product1 from './product1.jpeg'
import product2 from './product2.jpeg'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useHistory } from "react-router-dom";
import Menu from './Menu'
import  House  from './House.png';

const Product = () => {
    let history = useHistory();
    const Continue = (evt) => {
        history.push("/1")
    }
    return (
        <div style={{ display: "flex" }}>
            {/*
            <p><b>Available Services</b></p>
            <div className="Container">

                <div>
                    <div style={{display:"inline-block",width:"40%",height:"182px",background: "linear-gradient(90deg, #023E8A 0%, rgba(2, 62, 138, 0.6) 100%)",borderRadius: "10px",marginRight:"60px"}}>
                        <div style={{width:"30%",height:"80%",borderRadius: "10px",backgroundPosition: "center",backgroundRepeat:"no-repeat",display:"inline-block",backgroundImage: `url(${product1})` }}>
                         
                        </div>
                        <div style={{color:"white",width:"60%",height:"80%",borderRadius: "10px",padding:"10px",display:"inline-block"}}>
                        <h3>Property Insurance</h3>
                        <p>Protect your house, properties against natural disasters!</p>
                       <p>Get Quote <ArrowForwardIcon style={{paddingLeft:"10px",paddingTop:"10px"}} /></p> 
                        </div>
                    </div>
            
                    <div style={{display:"inline-block",width:"40%",height:"182px",background: "linear-gradient(90deg, #023E8A 0%, rgba(2, 62, 138, 0.6) 100%)",borderRadius: "10px",marginRight:"60px"}} onClick={Continue}>
                        <div style={{width:"30%",height:"80%",borderRadius: "10px",backgroundPosition: "center",backgroundRepeat:"no-repeat",display:"inline-block",backgroundImage: `url(${product1})` }}>
                         
                        </div>
                        <div style={{color:"white",width:"60%",height:"80%",borderRadius: "10px",padding:"10px",display:"inline-block"}}>
                        <h3>Auto Insurance</h3>
                        <p>Protect your vehicles against any typr of accidents!</p>
                       <p>Get Quote <ArrowForwardIcon style={{paddingLeft:"10px",paddingTop:"10px"}} /></p> 
                        </div>
                    </div>
                   
                </div>
            </div>
        
            */}
            <div style={{ width: "20%", backgroundColor: "white", margin: "15px", borderRadius: "10px" }}>
                <Menu />
            </div>
            <div style={{ height: "300px", width: "70%", margin: "15px" }}>
                <p style={{fontFamily: "Inter",fontStyle: "normal",fontWeight: "500",fontSize: "25px"}}>Available Services</p>
                <div style={{ height: "180px", width: "100%", backgroundColor: "white", display: "flex", borderRadius: "10px", padding: "25px", justifyContent: "space-between" }}>
                    <div style={{ background: "linear-gradient(90deg, #023E8A 0%, rgba(2, 62, 138, 0.6) 100%)", borderRadius: "10px", color: "white", display: "flex", width: "48.5%" }}>
                        <div style={{ width: "35%", textAlign: "center", paddingTop: "60px" }}>
                            <img style={{ borderRadius: "5px", height: "50px", width: "60px" }} src={product1}></img>
                        </div>
                        <div style={{ padding: "10px" }}>
                            <h3>Property Insurance</h3>
                            <p>Protect your house, properties against natural disasters!</p>
                        </div>

                    </div>
                    <div style={{ background: "linear-gradient(90deg, #023E8A 0%, rgba(2, 62, 138, 0.6) 100%)", borderRadius: "10px", color: "white", display: "flex", width: "48.5%" }} onClick={Continue}>
                        <div style={{ width: "35%", textAlign: "center", paddingTop: "60px" }}>
                            <img style={{ borderRadius: "5px", height: "50px", width: "60px" }} src={product2}></img>
                        </div>
                        <div style={{ padding: "10px" }}>
                            <h3>Auto Insurance</h3>
                            <p>Protect your vehicles against any typr of accidents!</p>
                        </div>

                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product;
