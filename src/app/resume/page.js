import { Box, Text } from "@chakra-ui/react";
import ViewPdf from "../../components/view-pdf/view-pdf";

export default function Resume() {
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      height="calc(100vh - 60px)"
      justifyContent="center"
      overflowY="auto"
    >
      <Box width={{ base: "90%", md: "80%", lg: "60%" }} paddingTop="150px" paddingBottom="50px">
        <ViewPdf URL={`${basePath}/resume/Hassan_Imtiaz_Resume.pdf`} />
      </Box>
    </Box>
  );
}
