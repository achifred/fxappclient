import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from "@chakra-ui/react";
import AuthProvider from './context/AuthProvider';
import { Header } from './components/Header';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
       <Header>
       <App />
       </Header>
    </ChakraProvider>
  </React.StrictMode>,
)
