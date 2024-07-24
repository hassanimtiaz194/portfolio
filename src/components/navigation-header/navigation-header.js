"use client";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { IoIosMail } from "react-icons/io";
import { VscGithub } from "react-icons/vsc";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import classes from "../../../styles/styles.module.css";
import { NAV_ITEMS } from "../../constants/constants";

export default function NavigationHeader() {
  const { isOpen, onToggle } = useDisclosure();

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
            onClick={onToggle}
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
          <div className={classes.logoContainer}>
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
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("white", "gray.200");
  const pathname = usePathname();

  return (
    <Stack direction={"row"} spacing={4} paddingTop="8px">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                className={clsx({ [classes.navigationActive]: navItem.href === pathname })}
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"16px"}
                fontWeight={500}
                fontFamily="Anton"
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  backgroundColor: "white",
                  borderRadius: 5,
                  color: "gray.800",
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
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
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
