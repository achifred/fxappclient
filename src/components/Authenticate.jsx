import { Link, redirect } from "react-router-dom"
import { useState, useContext, useEffect} from "react";
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    Box,
      Avatar,
    FormControl,
    FormHelperText,
    InputRightElement
  } from "@chakra-ui/react";

function Authenticate({showPassword, handleSubmit, handleShowClick,onEmailChange, onPasswordChange}) {
    
  
  
    return(
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
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
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
                  
                  <Input type="email" placeholder="email address" onChange={(event)=>onEmailChange(event)} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={(event)=>onPasswordChange(event)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                onClick={(event)=>handleSubmit(event)}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link color="teal.500" to="/register">
          Sign Up
        </Link>
      </Box>
    </Flex>
        
    )
}

export default Authenticate