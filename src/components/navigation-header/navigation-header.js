"use client";
import React, { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoIosMail } from "react-icons/io";
import { VscGithub } from "react-icons/vsc";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Popover,
  PopoverTrigger,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import classes from "../../../styles/styles.module.css";
import { NAV_ITEMS } from "../../constants/constants";

export default function NavigationHeader() {
  const [isOpen, SetIsOpen] = useState(false);
  const router = useRouter();

  return (
    <Box>
      <Flex
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={() => SetIsOpen(!isOpen)}
            icon={
              isOpen ? (
                <CloseIcon color="white" w={3} h={3} />
              ) : (
                <HamburgerIcon color="white" w={5} h={5} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <div
            className={classes.logoContainer}
            onClick={() => {
              console.log("hello");
              router.push("/");
            }}
          >
            <div className={classes.logoSymbol}>{`< >`}</div>
            <div>|</div>
            <div>HASSAN IMTIAZ</div>
          </div>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <div className={classes.contactContainer}>
            <div className={classes.contactIcons}>
              <a href="mailto:hassan.imtiaz194@gmail.com" target="_blank">
                <IoIosMail color="#fff" size={25} />
              </a>
            </div>
            <div className={classes.contactIcons}>
              <a href="https://github.com/hassanimtiaz194" target="_blank">
                <VscGithub color="#fff" size={25} />
              </a>
            </div>
          </div>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav onClose={() => SetIsOpen(false)} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("white", "gray.200");
  const pathname = usePathname();

  return (
    <Stack direction={"row"} spacing={4} paddingTop="5px">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                className={clsx(classes.navigation, {
                  [classes.navigationActive]: navItem.href === pathname,
                })}
                href={navItem.href ?? "#"}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = ({onClose}) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem onClose={onClose} key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href, onClose }) => {
  const router = useRouter();
  return (
    <Stack
      spacing={4}
      onClick={() => {
        router.push(href);
        onClose();
      }}
    >
      <Box
        py={2}
        as="div"
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
          backgroundImage: "linear-gradient(99deg, #34353a, #5c5b5b)",
          borderRadius: 5,
          color: "white",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.800", "gray.200")}
        >
          {label}
        </Text>
      </Box>
    </Stack>
  );
};
