import React from "react";
import { NativeBaseProvider, Center, Heading, VStack, FormControl, HStack, Text, Input, Link, Button, Box } from "native-base";

export default function Login({ navigation }) {
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
                    Entre para continuar!
                </Heading>

                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Senha</FormControl.Label>
                        <Input type="password" />
                        <Link _text={{
                            fontSize: "xs",
                            fontWeight: "500",
                            color: "#FF9D0A"
                        }} alignSelf="flex-end" mt="1">
                            Esqueceu a senha?
                        </Link>
                    </FormControl>
                    <Button mt="2" colorScheme="orange">
                        Entrar
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Text fontSize="sm" color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }}>
                            Sou novo aqui.{" "}
                        </Text>
                        <Link onPress={() => navigation.navigate('SignUp')} _text={{
                            color: "#FF9D0A",
                            fontWeight: "medium",
                            fontSize: "sm"
                        }} >
                            Cadastrar
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </Center>
    </NativeBaseProvider>;
};