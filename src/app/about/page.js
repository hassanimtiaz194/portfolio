import { Box, Text, Grid } from "@chakra-ui/react";
import Image from "next/image";
import LanguagesCard from "../../components/language-card/language-card";
import { SKILLS } from "../../constants/constants";

export default function About() {
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
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        width="80%"
        gap="20px"
        height="100%"
        paddingTop="50px"
        paddingBottom="100px"
      >
        <Box
          border="solid 10px white"
          borderRadius="50%"
          overflow="visible"
          boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2);"
          // height="180px"
          min-height="180px"
        >
          <Image
            // className={styles.logo}
            width={250}
            height={100}
            src={`${basePath}/images/about.png`}
            alt="Hassan Imtiaz"
          />
        </Box>
        <Box>
          <Text
            fontFamily="Anton"
            color="white"
            fontSize={{ base: "16px", md: "20px", lg: "20px" }}
            textAlign={"justify"}
          >
            Hi, my name is Hassan Imtiaz.I am a seasoned Full-Stack Developer
            with five years of experience, having worked with three prominent IT
            firms in Pakistan. My expertise includes developing ERP systems,
            competition management platforms, and healthcare applications. I
            hold a Postgraduate degree in Software Engineering from FAST
            National University (2020) and completed my undergraduate studies in
            Software Engineering at Foundation University (2018). My career
            reflects a strong ability to deliver high-impact solutions across
            various technology stacks.
          </Text>
        </Box>
        <Box>
          <Text
            fontFamily="Anton"
            color="white"
            fontSize={{ base: "16px", md: "20px", lg: "20px" }}
            textAlign={"justify"}
          >
            Skills
          </Text>
        </Box>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(5, 1fr)" }}
          gap="25px"
          justifyContent="center"
          paddingBottom="40px"
        >
          {SKILLS.map((item) => (
            <LanguagesCard key={item.id} item={item} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
