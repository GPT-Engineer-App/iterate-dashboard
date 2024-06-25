import React from "react";
import { Box, Container, Heading, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, VStack } from "@chakra-ui/react";

const Analytics = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      <Container maxW="container.xl" py={5}>
        <VStack spacing={8} align="stretch">
          <Heading size="lg">Analytics</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            <Stat
              px={{ base: 2, md: 4 }}
              py={'5'}
              shadow={'xl'}
              border={'1px solid'}
              borderColor={'gray.800'}
              rounded={'lg'}
            >
              <StatLabel fontWeight={'medium'}>Total Visits</StatLabel>
              <StatNumber fontSize={'2xl'} fontWeight={'medium'}>45,678</StatNumber>
              <StatHelpText>23% increase from last month</StatHelpText>
            </Stat>
            <Stat
              px={{ base: 2, md: 4 }}
              py={'5'}
              shadow={'xl'}
              border={'1px solid'}
              borderColor={'gray.800'}
              rounded={'lg'}
            >
              <StatLabel fontWeight={'medium'}>Conversion Rate</StatLabel>
              <StatNumber fontSize={'2xl'} fontWeight={'medium'}>4.5%</StatNumber>
              <StatHelpText>1.2% increase from last week</StatHelpText>
            </Stat>
            <Stat
              px={{ base: 2, md: 4 }}
              py={'5'}
              shadow={'xl'}
              border={'1px solid'}
              borderColor={'gray.800'}
              rounded={'lg'}
            >
              <StatLabel fontWeight={'medium'}>Average Session Duration</StatLabel>
              <StatNumber fontSize={'2xl'} fontWeight={'medium'}>2m 35s</StatNumber>
              <StatHelpText>10s increase from last month</StatHelpText>
            </Stat>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Analytics;