import React from "react";
import { Box, Container, Heading, Table, Thead, Tbody, Tr, Th, Td, VStack } from "@chakra-ui/react";

const Users = () => {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
  ];

  return (
    <Box bg="gray.100" minH="100vh">
      <Container maxW="container.xl" py={5}>
        <VStack spacing={8} align="stretch">
          <Heading size="lg">Users</Heading>
          <Box bg="white" p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Role</Th>
                </Tr>
              </Thead>
              <Tbody>
                {users.map((user) => (
                  <Tr key={user.id}>
                    <Td>{user.name}</Td>
                    <Td>{user.email}</Td>
                    <Td>{user.role}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Users;