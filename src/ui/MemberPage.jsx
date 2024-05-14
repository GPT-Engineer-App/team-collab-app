import { Box, Text, VStack, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Button } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';
import { FaHome, FaUserFriends, FaUsers, FaBroadcastTower, FaSignOutAlt } from "react-icons/fa";

const MemberPage = () => {
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
            <BreadcrumbLink>Member</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <VStack spacing={4} mt={4}>
          <Text fontSize="2xl">Member Details</Text>
          <Text>This page will display details for members.</Text>
        </VStack>
      </Box>
    </Flex>
  );
};

export default MemberPage;