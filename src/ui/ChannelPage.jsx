import { Box, Text, VStack, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Button, Image, HStack } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';
import { FaHome, FaUserFriends, FaUsers, FaBroadcastTower, FaSignOutAlt } from "react-icons/fa";

const channels = [
  {
    id: 1,
    name: "General",
    description: "Main communication channel",
    image: "path/to/channel1.png",
    members: ["John Doe", "Jane Smith", "Alice Johnson"]
  },
  {
    id: 2,
    name: "Development",
    description: "Channel for development team",
    image: "path/to/channel2.png",
    members: ["Bob Brown", "Charlie Davis", "Eve White"]
  },
  {
    id: 3,
    name: "Marketing",
    description: "Channel for marketing team",
    image: "path/to/channel3.png",
    members: ["Frank Green", "Grace Black", "Hank Blue"]
  }
];

const ChannelPage = () => {
  return (
    <Flex direction="column" w="100%" h="100vh">
      <Flex as="nav" bg="gray.100" p={3} justifyContent="space-between" alignItems="center" position="fixed" w="100%" zIndex="banner">
        <Button leftIcon={<FaHome />} variant="ghost" as={RouterLink} to="/">Home</Button>
        <Flex>
          <Button as={RouterLink} to="/members" leftIcon={<FaUserFriends />} variant="ghost">Member</Button>
          <Button as={RouterLink} to="/teams" leftIcon={<FaUsers />} variant="ghost">Team</Button>
          <Button as={RouterLink} to="/channels" leftIcon={<FaBroadcastTower />} variant="ghost">Channel</Button>
        </Flex>
        <Button rightIcon={<FaSignOutAlt />} variant="ghost">Log Out</Button>
      </Flex>
      <Box p={4} pt="75px">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink as={RouterLink} to="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Channel</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <VStack spacing={4} mt={4}>
          <Text fontSize="2xl">Channel Information</Text>
          <Text>This page will display details for channels.</Text>
        <HStack spacing={4} overflowX="auto" w="100%">
            {channels.map(channel => (
              <Box key={channel.id} borderWidth="1px" borderRadius="lg" overflow="hidden" minW="300px">
                <Image src={channel.image} alt={`${channel.name} image`} />
                <Box p={4}>
                  <Text fontSize="xl" fontWeight="bold">{channel.name}</Text>
                  <Text>{channel.description}</Text>
                  <Text mt={2} fontWeight="bold">Members:</Text>
                  <VStack align="start">
                    {channel.members.map((member, index) => (
                      <Text key={index}>{member}</Text>
                    ))}
                  </VStack>
                </Box>
              </Box>
            ))}
          </HStack>
        </VStack>
      </Box>
    </Flex>
  );
};

export default ChannelPage;