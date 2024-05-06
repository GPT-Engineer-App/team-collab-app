import { Box, Text, VStack } from "@chakra-ui/react";

const TeamPage = () => {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Team Overview</Text>
        <Text>This page will display information about teams.</Text>
      </VStack>
    </Box>
  );
};

export default TeamPage;