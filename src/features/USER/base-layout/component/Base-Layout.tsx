"use client";

import { Box, Flex, Avatar, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, Stack, Center, Image, Grid, useDisclosure } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import logo from "../../../../assets/image/logo.png";
import { Outlet } from "react-router-dom";
import useBaseLayout from "../hooks/use-base-layout";
import ChakraLinkExtendReactRouterLink from "../../../../components/Chakra-LInk-Extend-React-Router-Link";
import ButtonLogout from "./../../../ADMIN/base-layout/component/Button-Logout";
import ModalUpload from "./Modal-Upload";

export default function BaseLayout() {
  const { colorMode, toggleColorMode, pathname, user } = useBaseLayout();
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Grid>
      {/* <CartModal isOpen={isOpen} onClose={onClose}></CartModal> */}
      <ModalUpload isOpen={isOpen} onClose={onClose}></ModalUpload>
      <Box bg={"brand.baseColor"} zIndex={10000} position={"fixed"} width={"100%"} px={"50px"} borderBottom={"1px solid"} borderColor={"black"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Flex alignItems={"center"}>
            <Image src={logo} width={"100px"} dropShadow={"5px 5px 5px black"}></Image>
          </Flex>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>{colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Button>
              <Button bg={"brand.default"} color={"brand.baseColor"} onClick={onOpen}>
                Upload
              </Button>

              <Menu>
                <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
                  <Avatar size={"sm"} src={"https://avatars.dicebear.com/api/male/username.svg"} />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar size={"2xl"} src={"https://avatars.dicebear.com/api/male/username.svg"} />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>
                    <ChakraLinkExtendReactRouterLink to="/profile/me" width={"100%"} display={"flex"} justifyContent={"start"}>
                      My Profile
                    </ChakraLinkExtendReactRouterLink>
                  </MenuItem>
                  <MenuItem>
                    <ButtonLogout></ButtonLogout>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Box height={"100vh"}>
        <Outlet></Outlet>
      </Box>
    </Grid>
  );
}
