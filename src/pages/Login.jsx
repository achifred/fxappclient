
import { useState, useEffect} from "react";

import { postQuery } from "../services/query";
import { END_POINTS } from "../shared/endpoint";
import { getToken } from "../util/tokenUtil";
import Authenticate from "../components/Authenticate";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [accountEmail, setEmail] = useState()
    const [password, setPassword] = useState()
    
  const onPasswordChange = (event) => setPassword(event.target.value);
  const onEmailChange = (event) => setEmail(event.target.value);
  useEffect(()=>{
    let token = getToken()
    if(token !=null){
      window.location.replace("/")
    }
  },[])
  
    const handleShowClick = () => setShowPassword(!showPassword);

    const handleSubmit = async(e) =>{
        e.preventDefault()
        let payload = {accountEmail, password}
        let config = {
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        }
       try {
         let response = await postQuery(END_POINTS.LOGIN,config)
        if(response.status == "201") {
            localStorage.setItem("auth",JSON.stringify(response))
            window.location.replace("/")
        }
        
       } catch (error) {
        
       }

        
    }
    
  
    return(
      
    <Authenticate showPassword={showPassword} handleSubmit={handleSubmit} handleShowClick={handleShowClick} onPasswordChange={onPasswordChange} onEmailChange={onEmailChange}/>
        
    )
}

export default Login