import React, { useEffect } from 'react';
import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';
import { useHistory } from 'react-router-dom';
const Homepage = () => {
   const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));


    if (!userInfo) history.push("/");
  }, [history]);
  return (
  <Container minW='X5'>
    <Box
    d="flex"
    textAlign="center"
    fontWeight='bold'
    bg={"lightgray"}
    w="100%"
    position= "relative"
    m="40px 0 15px 0"
    borderRadius="lg"
    borderWidth="2px"
    >
    <Text fontSize='3xl' fontFamily="Work Sans">UniChat</Text>
    </Box>
     <Box bg="lightgray" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded" colorScheme='blackAlpha'>
          <TabList mb="1em">
            <Tab width="50%">Log In</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />  
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage
