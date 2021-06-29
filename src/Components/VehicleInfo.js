import axios from 'axios'
import React,{useState,useEffect} from 'react'
const vehicalInfo = {makeName: '', modelName: '' ,modelYear:''}

const VehicleInfo = () => {
    const [info ,setInfo] = useState(vehicalInfo)
    const [makes,setmakes] = useState([])
    useEffect(() => {
     axios.get('https://newurl.free.beeceptor.com/newmake')
     .then(res =>{
         console.log(res)
     })
.catch(err=>{
    console.log(err)
})
    }, [])
    return (
        <div>
            
        </div>
    )
}
export default vehicalInfo;