 
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    Text,
    Box,
    Select,
  
    FormControl
    
  } from "@chakra-ui/react";
 function AddTransaction({paymentOptions, rate,amount,wallet,transactionType,onBankChange,onAmountChange,handleSubmit}) {
    
    return (
        <div>
             <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
        
      >
        <Heading color="teal.400">{transactionType=="SELL"?"Confirm Withdraw":"Confirm  "+transactionType}</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
              
            >
              <FormControl>
                <InputGroup>
                  
                  <Input type="number" placeholder={`Enter ${wallet} amount`} onChange={(event)=> onAmountChange(event)} />
                </InputGroup>
              </FormControl>
              <FormControl>
                {amount>0 ?(<div>
                  <Select  placeholder={transactionType=="SELL"?"Select Bank to credit":"Select Bank to debit"} onChange={(event)=> onBankChange(event)}>
                  {paymentOptions.map(item => (
                    
                     <option key={item.id} value={item.name}>{item.name}</option>
                    
                  ))}
                   </Select>
                </div>):(<p></p>)}
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                onClick={(event)=>handleSubmit(event)}
              >
                {transactionType=="SELL"?"Withdraw":transactionType}
              </Button>
            </Stack>
            
          </form>
          <Heading textAlign='center' paddingTop='10' size='md' color="gray.400">
          Amount in local Currency {amount*rate}
            </Heading>
          <Text>  </Text>
        </Box>
      </Stack>
    </Flex>
             
            
           </div>
    )
 }

 export default AddTransaction