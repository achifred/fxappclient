
import {  Link } from "react-router-dom";
import { Card,CardBody,CardHeader,SimpleGrid, CardFooter,Text,Heading} from "@chakra-ui/react";

function Provider({provider, id, symbol, type}) {
  
    return (
        <div>
         
        {provider?(<div>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            {provider.map(item => (
                
                <Card size='sm' key={item.providerId}>
                <CardHeader>
                <Heading size='sm'> {item.providerName}</Heading>
                </CardHeader>
                <CardBody>
                <Text>Rate {item.rate}</Text>
                <Text> {symbol}{item.amountMini} -  {symbol}{item.amountMax} available</Text>
                </CardBody>
                <CardFooter>
                <Link to="/buy" state={{value:item,symbol,walletId:id,type}}>
                    <Text color='green.500'>Select</Text>
                    </Link>
                </CardFooter>
            </Card>
            
            
            ))}
            </SimpleGrid>
        </div>):(<p>no data</p>)}
       
        
           
        </div>
    )
}


export default Provider