import React from "react";
import { Box, Container, Flex, Heading, Text, VStack, HStack, Stat, StatLabel, StatNumber, StatHelpText, SimpleGrid, Icon, IconButton } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { FaUsers, FaChartBar, FaCalendarAlt, FaBell } from "react-icons/fa";

const DashboardCard = ({ title, value, icon, subtext }) => (
  <Stat
    px={{ base: 2, md: 4 }}
    py={'5'}
    shadow={'xl'}
    border={'1px solid'}
    borderColor={'gray.800'}
    rounded={'lg'}
  >
    <Flex justifyContent={'space-between'}>
      <Box pl={{ base: 2, md: 4 }}>
        <StatLabel fontWeight={'medium'} isTruncated>
          {title}
        </StatLabel>
        <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
          {value}
        </StatNumber>
        <StatHelpText>{subtext}</StatHelpText>
      </Box>
      <Box
        my={'auto'}
        color={'gray.800'}
        alignContent={'center'}
      >
        <Icon as={icon} w={8} h={8} />
      </Box>
    </Flex>
  </Stat>
);

const Index = ({ toggleSidebar }) => {
  return (
    <Box bg="gray.100" minH="100vh">
      <Container maxW="container.xl" py={5}>
        <VStack spacing={8} align="stretch">
          <Flex justifyContent="space-between" alignItems="center">
            <Flex alignItems="center">
              <IconButton
                display={{ base: "flex", md: "none" }}
                onClick={toggleSidebar}
                icon={<FaBars />}
                size="sm"
                aria-label="Open menu"
                mr={2}
              />
              <Heading size="lg">Dashboard</Heading>
            </Flex>
            <HStack>
              <Icon as={FaBell} w={6} h={6} />
              <Text>John Doe</Text>
            </HStack>
          </Flex>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
            <DashboardCard title="Total Users" value="1,234" icon={FaUsers} subtext="23% increase" />
            <DashboardCard title="Revenue" value="$56,789" icon={FaChartBar} subtext="10% increase" />
            <DashboardCard title="Appointments" value="45" icon={FaCalendarAlt} subtext="Today" />
            <DashboardCard title="Pending Tasks" value="12" icon={FaBell} subtext="5 urgent" />
          </SimpleGrid>

          <Box bg="white" p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <Heading size="md" mb={4}>Recent Activity</Heading>
            <VStack align="stretch" spacing={3}>
              {[1, 2, 3, 4, 5].map((item) => (
                <HStack key={item} justify="space-between">
                  <Text>Activity {item}</Text>
                  <Text color="gray.500">2 hours ago</Text>
                </HStack>
              ))}
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;