'use client';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';

import { Link, Outlet } from 'react-router-dom';
import logo from '../../../../assets/image/logo.png';
import ChakraLinkExtendReactRouterLink from '../../../../components/Chakra-LInk-Extend-React-Router-Link';
import useBaseLayout from '../hooks/use-base-layout';
import ButtonLogout from './../../../ADMIN/base-layout/component/Button-Logout';
import ModalUpload from './Modal-Upload';

export default function BaseLayout() {
  const { colorMode, toggleColorMode } = useBaseLayout();
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Grid>
      {/* <CartModal isOpen={isOpen} onClose={onClose}></CartModal> */}
      <ModalUpload
        isOpen={isOpen}
        onClose={onClose}
      ></ModalUpload>
      <Box
        bg={'brand.baseColor'}
        zIndex={10000}
        position={'fixed'}
        width={'100%'}
        px={'50px'}
        borderBottom={'1px solid'}
        borderColor={'black'}
      >
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Flex alignItems={'center'}>
            <Link to={'/'}>
              <Image
                src={logo}
                width={'100px'}
                dropShadow={'5px 5px 5px black'}
              ></Image>
            </Link>
          </Flex>

          <Flex alignItems={'center'}>
            <Stack
              direction={'row'}
              spacing={7}
            >
              <Button
                onClick={toggleColorMode}
                bgColor={
                  colorMode === 'light' ? 'brand.baseColor ' : 'brand.black'
                }
                _hover={{}}
              >
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Button
                bg={'brand.default'}
                color={'brand.baseColor'}
                onClick={onOpen}
              >
                Upload
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>
                    <ChakraLinkExtendReactRouterLink
                      to="/profile"
                      width={'100%'}
                      display={'flex'}
                      justifyContent={'start'}
                    >
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
      <Box height={'100vh'}>
        <Outlet></Outlet>
      </Box>
    </Grid>
  );
}
