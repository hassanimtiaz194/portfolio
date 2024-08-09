import { Box, Text } from "@chakra-ui/react";
export default function Projects() {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      gap="40px"
      height="calc(100vh - 60px)"
      justifyContent="center"
    >
      <Box display="flex" alignItems="center" flexDirection="column">
        <Text
          fontFamily="Anton"
          color="white"
          fontSize={{ base: "22px", md: "36px", lg: "46px" }}
        >
          Work in progress
        </Text>
      </Box>
    </Box>
  );
}
