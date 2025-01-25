import React from 'react'
import { Button, Container, Flex, HStack, Icon, Text } from "@chakra-ui/react"
import { Link } from 'react-router'
import { useColorMode } from './ui/color-mode';

import { FaPlusSquare  } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";


const NavBar = () => {

    const {toggleColorMode, colorMode} = useColorMode();

  return (
    <Container maxW={"1140px"} px={"4"} shadow={'xl'} >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={{
            base: "column",
            sm: "row"
        }}
      >
        <Text
            fontSize={"24px"}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            
            bgGradient="to-r" 
            gradientFrom="cyan.400" 
            gradientTo="blue.500"
            bgClip={"text"}
        >
            <Link to={"/"}>Product Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
            <Button size={'sm'}>
                <Link to={"/create"}>
                    <Icon fontSize="22px" color="black.400">
                        <FaPlusSquare  />
                    </Icon>
                </Link>
            </Button >
            <Button size={'sm'} variant="outline" onClick={toggleColorMode}>
                {colorMode === "light" ? <IoMoonOutline /> : <IoIosSunny color='yellow' size='20' />}
            </Button>

        </HStack>

      </Flex>
    </Container>
  )
}

export default NavBar
