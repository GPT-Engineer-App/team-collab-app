import { Box, Text, VStack } from "@chakra-ui/react";

const MemberPage = () => {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Member Details</Text>
        <Text>This page will display details for members.</Text>
      </VStack>
    </Box>
  );
};

export default MemberPage;