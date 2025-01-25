import { Container, VStack, Heading, Box, Input, Button} from '@chakra-ui/react';
import React, { useState } from 'react'
import { useColorModeValue } from '../src/components/ui/color-mode';
import { useProductStore } from '../src/store/product';
import { Toaster, toaster } from '../src/components/ui/toaster'

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    });
	const { createProduct } = useProductStore();

	const handleAddProduct = async () => {
		const { success, message } = await createProduct(newProduct);
		if (!success) {
			toaster.create({
				title: "Error",
				description: message,
				type: "error",
				// isClosable: true,
			});
		} else {
			toaster.create({
				title: "Success",
				description: message,
				type: "success",
				// isClosable: true,
			});
		}
		setNewProduct({ name: "", price: "", image: "" });
	};

  return (
    <Container maxW={"800px"} pt={"30px"}>
        <Toaster />

        <VStack
            spacing={8}
        >
            <Heading fontSize={"25px"} pt={"30px"} textAlign={"center"} mb={"8"}
                p={6} rounded={"lg"} shadow={"md"}
            >
                create New Product
            </Heading>

            <Box
                w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
                <VStack spacing={4}>
                    <Input 
                        placeholder= 'Product Name:'
                        name= 'name'
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                        shadow={"sm"}
                    />
                    <Input 
                        placeholder='Product Price:'
                        name= 'price'
                        type='number'
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                        shadow={"sm"}

                    />
                    <Input 
                        placeholder='Product Image:'
                        name= 'image'
                        value={newProduct.image}
                        onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                        shadow={"sm"}

                    />
                    <Button
                        w={"full"}
                        color={"cyan"}
                        fontSize={"18px"}
                        onClick={handleAddProduct}
                    >
                        Create New Product
                    </Button>

                </VStack>

            </Box>

        </VStack>
    </Container>
  )
}

export default CreatePage
