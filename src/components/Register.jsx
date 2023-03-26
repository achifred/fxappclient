import { Link,  } from "react-router-dom"
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
  
  InputRightElement
} from "@chakra-ui/react";

function Register({showPassword,handleShowClick, onEmailChange,onNameChange, onPasswordChange,handleSubmit}) {
  return (
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
                  
                  <Input type="text" placeholder="Full Name" onChange={(event)=>onNameChange(event)} />
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
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                onClick={(event)=>handleSubmit(event)}
              >
                Create Account
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Already have an Account?{" "}
        <Link color="teal.500" to="/login">
          Login
        </Link>
      </Box>
    </Flex>
  );
}

export default Register