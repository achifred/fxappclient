import { useEffect, useState } from "react";
import { Form, useLocation, Link } from "react-router-dom";
import { fetchQuery } from "../services/query";
import { Card,CardBody,CardHeader,Button,SimpleGrid,FormControl,FormLabel,Input, CardFooter,Text,Heading, Container} from "@chakra-ui/react";
import { END_POINTS } from "../shared/endpoint";
import Provider from "../components/Provider";
function Providers() {
   const[provider, setProvider] = useState([])
    const location = useLocation()
    const symbol =location.state.symbol
    const id = location.state.walletId
    const type = location.state?.transactionType
    const result = localStorage.getItem("auth")
   const value = JSON.parse(result)
   useEffect(() => {
        getProviders().then(response => setProvider(response))
   }, [])

   const getProviders = async() => {
    const config = {
        method: 'GET',
        headers: {
            mode:'no-cors',
            Authorization: `Bearer ${value.token}`
          
        }
      };

      const response = await fetchQuery(END_POINTS.GET_PROVIDERS+symbol+"/"+type, config)
      return response
}
   
    return (
        <Container>
            <Provider id={id} symbol={symbol} type={type} provider={provider}/>
        </Container>
    )
}


export default Providers