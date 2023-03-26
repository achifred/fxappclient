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
  } from '@chakra-ui/react'
import { fetchQuery } from "../services/query";

function Transaction({transactions}) {
    

        return(
            
                
                <TableContainer>
                    <Table variant='striped' colorScheme='gray.200'>
                        <TableCaption>Transactions</TableCaption>
                        <Thead>
                        <Tr>
                            <Th>Currency</Th>
                            <Th>Amount</Th>
                            <Th>Status</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                            {transactions?(<>
                                {transactions.map(item => (
                                    <Tr key={item?.transactionsId}>
                                    <Td>{item?.currency}</Td>
                                    <Td>{item?.amount}</Td>
                                    <Td>{item?.status}</Td>
                                </Tr>
                                ))}
                            </>):(<p></p>)}
        
                        </Tbody>
                    </Table>
            </TableContainer>
           
        )
}

export default Transaction