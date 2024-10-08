'use client'
import React, { useState, useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import LottieFile from '../../lottie-animations/loader.json';
import { Box } from '@chakra-ui/react';

const LottieLoader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="#ffffff03"
      backdropFilter="blur(10px)"
      zIndex="9999"
    >
      <Player
        autoplay
        loop
        src={LottieFile}
        style={{ width: 200, height: 200 }}
      />
    </Box>
  );
};

export default LottieLoader;
