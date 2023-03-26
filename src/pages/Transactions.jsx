import { useState, useEffect } from "react";
import { END_POINTS } from "../shared/endpoint";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Container,
  } from '@chakra-ui/react'
import { fetchQuery } from "../services/query";
import Transaction from "../components/Transaction";

function Transactions() {
    const result = localStorage.getItem("auth")
   const value = JSON.parse(result)
   const[transactions, setTransactions] = useState([])
    
   useEffect(() => {
        getTransactions().then(response =>{ 
            
             setTransactions(response)})
   }, [])

   const getTransactions = async() => {
    
    const config = {
        method: 'GET',
        headers: {
            mode:'no-cors',
            Authorization: `Bearer ${value?.token}`
          
        }
      };

      const response = await fetchQuery(END_POINTS.GET_TRANSACTIONS+value?.accountId, config)
      return response
}
        return(
            
            <Container>
                <Transaction transactions={transactions}/>
            </Container>
        )
}

export default Transactions