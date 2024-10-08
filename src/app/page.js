"use client";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import TypicalAnimation from "../components/typical-animation/typical-animation";
import LottieLoader from "../components/lottie-loader/lottie-loader";
import { Introduction, Introduction_Name } from "../constants/constants";

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
      <LottieLoader />
      <Box>
        <Box display="flex" alignItems="center" flexDirection="column">
          <Text
            fontFamily="Anton"
            color="white"
            fontSize={{ base: "22px", md: "36px", lg: "46px" }}
          >
            <TypicalAnimation steps={Introduction_Name} loop={1} />
          </Text>
          <Text
            fontFamily="Anton"
            color="white"
            fontSize={{ base: "20px", md: "24px", lg: "36px" }}
          >
            <TypicalAnimation steps={Introduction} />
          </Text>
        </Box>
        <Box>
          <Image
            // className={styles.logo}
            width={600}
            height={600}
            src={`${basePath}/images/home_profile.png`}
            alt="Next.js Logo"
          />
        </Box>
      </Box>
    </Box>
  );
}
