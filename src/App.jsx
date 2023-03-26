import { Box } from '@chakra-ui/react'
import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import GuardedRoutes from './util/GuardedRoutes';
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import Providers from './pages/Providers';
import CreateAccount from './pages/CreateAcount';
import Purchase from './pages/Purchase';
import Login from './pages/Login';

const App = () => {
  return (
    <Box height='100vh'>
      <BrowserRouter>
      <Routes>
        <Route element={<GuardedRoutes/>}>
        <Route path='/' element ={<Home/>} />
        <Route path='/transaction' element ={<Transactions/>} />
        <Route path='/buy' element={<Purchase/>}/>
        <Route path='/provider' element ={<Providers/>} />
        </Route>
        <Route path='/login' element ={<Login/>} />
        <Route path='/register' element ={<CreateAccount/>} />
        
      </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App