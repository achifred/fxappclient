
import { useEffect, useLayoutEffect, useMemo, useState } from "react"
import { fetchQuery } from "../services/query"
import {
    List,
    SimpleGrid,
    CardBody,
    CardHeader,
    Card,
    Heading,
    CardFooter,
    Text,
    Container,
    
        Table,
        Thead,
        Tbody,
        Tfoot,
        Tr,
        Th,
        Td,
        TableCaption,
        TableContainer,
      
  } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { END_POINTS } from "../shared/endpoint"
import Wallet from "../components/Wallet"


function Home() {
    const [wallets, setWallets] = useState([])
    const [amountInWallet, setAmountInWallet] = useState([])
    const result = localStorage.getItem("auth")
   const value = JSON.parse(result)

    
        const config = {
            method: 'GET',
            headers: {
                mode:'no-cors',
                "Content-Type":"application/json",
                Authorization: `Bearer ${value?.token}`
              
            }
          };
    
    const getWallets = async() => {
          let response = await fetchQuery(END_POINTS.GET_CURRENCIES, config)
          return response
    }
    const getAmountInWallet = async() =>{
        let response = await fetchQuery(END_POINTS.GET_AMOUNT_IN_WALLET+value?.accountId, config)
        return response
    }

    useEffect(() =>{
        getWallets().then(res =>setWallets(res))
   },[])

   useEffect(() =>{
    getAmountInWallet().then(res =>setAmountInWallet(res))
},[])
   
   
    return (
       <Container>
        
        <Wallet wallets={wallets} amountInWallet={amountInWallet}/>
       
        </Container>
    )


}



export default Home