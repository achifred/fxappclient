import { Link,  } from "react-router-dom"
import { useState, useEffect } from "react";
import {
  Flex
 
} from "@chakra-ui/react";
import { END_POINTS } from "../shared/endpoint";
import { postQuery } from "../services/query";
import { getToken } from "../util/tokenUtil";
import Register from "../components/Register";

function CreateAccount() {
    const [showPassword, setShowPassword] = useState(false);
    const [accountEmail, setEmail] = useState()
    const [password, setPassword] = useState()
    const [accountName, setName] = useState()

  const handleShowClick = () => setShowPassword(!showPassword);
  const onPasswordChange = (event) => setPassword(event.target.value);
  const onEmailChange = (event) => setEmail(event.target.value);
  const onNameChange = (event) => setName(event.target.value);

  useEffect(()=>{
    let token = getToken()
    if(token !=null){
      window.location.replace("/")
    }
  },[])

  const handleSubmit = async(e) =>{
    e.preventDefault()
    let payload = {accountEmail:accountEmail,accountName:accountName, password:password}
    let config = {
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
    }
    let response = await postQuery(END_POINTS.CREATE_ACCOUNT,config)
    console.log(response)
    if (response.status == "201") {
        window.location.replace("/login")
    }
    
}

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
        
     <Register showPassword={showPassword} onNameChange={onNameChange} onEmailChange={onEmailChange} handleSubmit={handleSubmit} handleShowClick={handleShowClick} onPasswordChange={onPasswordChange}/>
    </Flex>
  );
}

export default CreateAccount