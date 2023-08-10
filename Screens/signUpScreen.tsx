import React from "react";
import { NativeBaseProvider, Center, Heading, VStack, FormControl, HStack, Text, Input, Link, Button, Box } from "native-base";

export default function SignUp({ navigation }) {
    return <NativeBaseProvider>
        <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                    color: "warmGray.50"
                }}>
                    Bem vindo!
                </Heading>
                <Heading mt="1" _dark={{
                    color: "warmGray.200"
                }} color="coolGray.600" fontWeight="medium" size="xs">
                    Cadastre-se para continuar!
                </Heading>

                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Senha</FormControl.Label>
                        <Input type="password" />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Confirme a senha</FormControl.Label>
                        <Input type="password" />
                    </FormControl>
                    <Button mt="2" colorScheme="orange">
                        Cadastrar
                    </Button>
                    <HStack mt="6" justifyContent="center">
                    </HStack>
                </VStack>
            </Box>
        </Center>
    </NativeBaseProvider>;
};