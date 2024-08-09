"use client";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function LanguagesCard({item}) {
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      background="white"
      width="120px"
      height="130px"
      borderRadius="10px"
      padding="10px"
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2);"
    >
      <Box width="80px" height="80px">
        <Image
          // className={styles.logo}
          width={600}
          height={100}
          src={`${basePath}/languages${item.url}`}
          alt={`${"react"} Logo`}
        />
      </Box>
      <Box>
        <Text
          fontFamily="Anton"
          color="Black"
          fontSize={{ base: "16px", md: "18px", lg: "18px" }}
        >
          {item.skill}
        </Text>
      </Box>
    </Box>
  );
}
