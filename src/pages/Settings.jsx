import React from "react";
import { Box, Container, Heading, VStack, FormControl, FormLabel, Input, Switch, Button } from "@chakra-ui/react";

const Settings = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      <Container maxW="container.xl" py={5}>
        <VStack spacing={8} align="stretch">
          <Heading size="lg">Settings</Heading>
          <Box bg="white" p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <VStack spacing={4} align="stretch">
              <FormControl>
                <FormLabel>Email Notifications</FormLabel>
                <Switch id="email-alerts" />
              </FormControl>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input placeholder="Enter your username" />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="Enter your password" />
              </FormControl>
              <Button colorScheme="blue">Save Changes</Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Settings;