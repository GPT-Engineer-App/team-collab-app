import { Container, Text, VStack, Button, Flex, Image } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';
import { FaHome, FaUserFriends, FaUsers, FaBroadcastTower, FaSignOutAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" w="100%" h="100vh">
      <Flex as="nav" bg="gray.100" p={3} justifyContent="space-between" alignItems="center" position="fixed" w="100%" zIndex="banner">
        <Button leftIcon={<FaHome />} variant="ghost">Home</Button>
        <Flex>
          <Button as={RouterLink} to="/members" leftIcon={<FaUserFriends />} variant="ghost">Member</Button>
          <Button as={RouterLink} to="/teams" leftIcon={<FaUsers />} variant="ghost">Team</Button>
          <Button as={RouterLink} to="/channels" leftIcon={<FaBroadcastTower />} variant="ghost">Channel</Button>
        </Flex>
        <Button rightIcon={<FaSignOutAlt />} variant="ghost">Log Out</Button>
      </Flex>
      <Container centerContent flex="1" pt="75px">
        <VStack spacing={4}>
          <Image src="path/to/illustration.png" boxSize="300px" />
          <Text fontSize="2xl">Welcome to Your Dashboard</Text>
          <Button colorScheme="blue">Getting Started</Button>
        </VStack>
      </Container>
    </Flex>
  );
};

export default Index;