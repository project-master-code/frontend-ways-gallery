import { Box, Flex, Grid, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ChakraLinkExtendReactRouterLink from "./../../../../components/Chakra-LInk-Extend-React-Router-Link";
import waysGallery from "../../../../assets/image/Group 3.png";
import vectorLeft from "../../../../assets/image/Vector-left-right 1.png";
import vectorLeftBottom from "../../../../assets/image/Vector-left-bottom 1.png";
import vectorRightBottom from "../../../../assets/image/vector-right-bottom.png";

export default function BaseAuthLayout(): React.ReactNode {
  let { pathname } = useLocation();
  pathname = pathname.replace("/", "");

  return (
    <Grid bg={"brand.background"} height={"100vh"} width={"100%"} color={"brand.color"} gridTemplateColumns={"60% 40%"} alignItems={"center"} paddingX={"150px"}>
      <Image src={vectorLeft} position={"absolute"} top={"0"} left={"-150px"}></Image>
      <Image src={vectorLeftBottom} position={"absolute"} bottom={"0"} left={"-60px"}></Image>
      <Image src={vectorRightBottom} position={"absolute"} bottom={"0"} right={"-60px"}></Image>
      <VStack gap={"10px"}>
        <Flex direction={"column"} width={"100%"}>
          <HStack width={"100%"} gap={"0"} padding={"0px"} margin={"0"} position={"relative"}>
            <Text as={"h1"} fontSize={"5rem"} color={"brand.black"} m={"0"} padding={"0px"} margin={"0px"}>
              Ways
            </Text>
            <Image src={waysGallery} position={"absolute"} left={"155px"} top={"5px"} width={"150px"}></Image>
          </HStack>
          <Text as={"h1"} fontSize={"5rem"} color={"brand.default"} m={"0"} padding={"0px"} marginTop={"-30px"}>
            Gallery
          </Text>
          <Text color={"brand.black"} fontWeight={"bold"}>
            show your work to inspire everyone
          </Text>
          <Text color={"brand.black"}>Ways Exhibition is a website design creators gather to share their work with other creators</Text>
        </Flex>
        <HStack mt={"40px"} width={"100%"} gap={"20px"}>
          <ChakraLinkExtendReactRouterLink
            to="/login"
            background={pathname == "login" ? "brand.default" : "brand.youngGrey"}
            color={pathname == "login" ? "brand.baseColor" : "brand.black"}
            width={"120px"}
            height={"40px"}
            rounded={"5px"}
            position={"relative"}
            zIndex={"1000"}
          >
            Login
          </ChakraLinkExtendReactRouterLink>
          <ChakraLinkExtendReactRouterLink
            to="/register"
            background={pathname == "register" ? "brand.default" : "brand.youngGrey"}
            color={pathname == "register" ? "brand.baseColor" : "brand.black"}
            width={"120px"}
            height={"40px"}
            rounded={"5px"}
            position={"relative"}
            zIndex={"1000"}
          >
            Register
          </ChakraLinkExtendReactRouterLink>
        </HStack>
        <ToastContainer pauseOnFocusLoss={false} autoClose={2000} />
      </VStack>
      <Box bg={pathname == "" ? "trasnparent" : "brand.youngGrey"}>
        <Outlet />
      </Box>
    </Grid>
  );
}
