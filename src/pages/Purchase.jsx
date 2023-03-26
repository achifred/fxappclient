import { json, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchQuery, postQuery } from "../services/query";
import { END_POINTS } from "../shared/endpoint";
import {
   Flex
 } from "@chakra-ui/react";
import AddTransaction from "../components/AddTransaction";

function Purchase() {
   const location = useLocation()
   const item = location.state.value
   const symbol = location.state.symbol
   const type  = location.state.type
   const result = localStorage.getItem("auth")
  const value = JSON.parse(result)

   const[amount, setAmount] = useState(0)
  const[accountId, setAccountId] = useState(value?.accountId)
  const[providerId, setProviderId] = useState(item.providerId)
  const[wallet, setWallet] = useState(symbol)
  const[transactionType, setTransactionType] = useState(type)
  const[walletId, setWalletId] = useState(location.state.walletId)
  const[bank, setBank] = useState()
  const[paymentOptions, setPaymentOptions] = useState()

 
  const onAmountChange = (event) => setAmount(event.target.value)
   const onBankChange = (event) => setBank(event.target.value)

   const handleSubmit = async(e) =>{
       e.preventDefault()
       let payload = {accountId,amount, wallet,providerId,transactionType,walletId,bank}
       console.log(JSON.stringify(payload))
       let config = {
           method:'POST',
           headers:{
               "Content-Type":"application/json",
               Authorization: `Bearer ${value?.token}`
           },
           body:JSON.stringify(payload)
       }
       let response = await postQuery(END_POINTS.CREATE_TRANSACTION,config)
       if(response.status =="201") {
           alert("transaction "+response.message)
           window.location.replace("/")
       }
       
   }

   useEffect(() => {
    getPaymentOptions().then(response => {
      setPaymentOptions(response)})
}, [])

   const getPaymentOptions = async() => {
    const config = {
        method: 'GET',
        headers: {
            mode:'no-cors',
            Authorization: `Bearer ${value.token}`
          
        }
      };

      const response = await fetchQuery(END_POINTS.GET_PAYMENT_OPTION+"BANK", config)
      return response
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
     <AddTransaction paymentOptions={paymentOptions} rate={item?.rate} amount={amount} wallet={wallet} transactionType={transactionType} onBankChange={onBankChange} onAmountChange={onAmountChange} handleSubmit={handleSubmit} />
   </Flex>
            
           
          
   )
}


export default Purchase