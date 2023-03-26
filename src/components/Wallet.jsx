
import {
   
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
     
        Tr,
        Th,
        Td,
       
        TableContainer,
      
  } from '@chakra-ui/react'
import { Link } from "react-router-dom"

function Wallet({wallets, amountInWallet}) {

   
    return (
       <Container>
        
        <div>
        {amountInWallet?(
            <div>  

            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            {amountInWallet.map(item => (
                
                <Card size='sm' key={item?.wallet}>
                <CardHeader>
                <Heading size='sm'> {item?.wallet} Wallet</Heading>
                </CardHeader>
                <CardBody>
                <Text> Total:{item?.wallet} {item?.totalAmount} </Text>
                </CardBody>
                <CardFooter>
                <Link to="/provider" state={{symbol:item.wallet,walletId:item.walletId,transactionType:"SELL"}}>
                    <Text color='green.500'>Withdraw</Text>
                    </Link>
                </CardFooter>
            </Card>
            
            
            ))}
            </SimpleGrid>
            </div>
        ):(<p>sorry no data</p>)}
        </div>


        <div>
        {wallets?(
            <div>  
                <Text textAlign='center' fontSize='2xl' paddingTop='10' color='gray.500'>Available Currencies</Text>
            
                <TableContainer>
            <Table size='sm'>
                <Thead>
                <Tr>
                    <Th>Currency</Th>
                    <Th>Symbol</Th>
                    <Th>Action</Th>
                </Tr>
                </Thead>
                <Tbody>
                
               
                {wallets.map(wallet => (
                    <Tr key={wallet.walletId}>
                    <Td>{wallet.walletName}</Td>
                    <Td>{wallet.symbol}</Td>
                    <Td ><Link  to="/provider" state={{symbol:wallet.symbol,walletId:wallet.walletId,transactionType:"BUY"}}><Text  color='green.500'>Buy</Text></Link></Td>
                </Tr>

                        
                        
                            
                        ))}
                
                </Tbody>
               
            </Table>
            </TableContainer>
            
            </div>
        ):(<p>sorry no data</p>)}
        </div>
        
       
        </Container>
    )


}



export default Wallet