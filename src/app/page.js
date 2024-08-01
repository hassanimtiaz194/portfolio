"use client";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Typical from "react-typical";
import TypicalAnimation from "../components/typical-animation/typical-animation";
import { Introduction } from "../constants/constants";

export default function Home() {
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      gap="40px"
      height="calc(100vh - 60px)"
      justifyContent="center"
    >
      <Box>
        <Text color="white" fontSize={{ base: '18px', md: '26px', lg: '40px' }}>
          <TypicalAnimation steps={Introduction} />
        </Text>
      </Box>
      <Box>
        <Image
          // className={styles.logo}
          width={600}
          height={100}
          src={`${basePath}/images/home_profile.png`}
          alt="Next.js Logo"
        />
      </Box>
    </Box>
  );
}
