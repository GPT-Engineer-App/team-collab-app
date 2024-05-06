import { Box, Text, VStack } from "@chakra-ui/react";

const ChannelPage = () => {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Channel Information</Text>
        <Text>This page will display details for channels.</Text>
      </VStack>
    </Box>
  );
};

export default ChannelPage;