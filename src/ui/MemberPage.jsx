import { Box, Text, VStack, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Button, Input, FormControl, FormLabel, FormHelperText } from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink } from 'react-router-dom';
import { FaHome, FaUserFriends, FaUsers, FaBroadcastTower, FaSignOutAlt } from "react-icons/fa";

const MemberPage = () => {
  const [formData, setFormData] = useState({
    username: "john_doe",
    email: "john@example.com",
    bio: "Software developer",
    location: "San Francisco",
    website: "https://johndoe.com"
  });

  const [isSaveDisabled, setIsSaveDisabled] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setIsSaveDisabled(false);
  };

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
        <FormControl>
            <FormLabel>Username</FormLabel>
            <Input name="username" value={formData.username} onChange={handleInputChange} />
            <FormHelperText>Enter your username.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input name="email" value={formData.email} onChange={handleInputChange} />
            <FormHelperText>Enter your email address.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Bio</FormLabel>
            <Input name="bio" value={formData.bio} onChange={handleInputChange} />
            <FormHelperText>Enter a short bio.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Location</FormLabel>
            <Input name="location" value={formData.location} onChange={handleInputChange} />
            <FormHelperText>Enter your location.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Website</FormLabel>
            <Input name="website" value={formData.website} onChange={handleInputChange} />
            <FormHelperText>Enter your website URL.</FormHelperText>
          </FormControl>
          <Button colorScheme="blue" isDisabled={isSaveDisabled}>Save</Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default MemberPage;