import React from "react";
import { Box, Menu, Pressable, HamburgerIcon, NativeBaseProvider, Button, Image, AspectRatio, Center, Stack, Text, HStack, Heading, ScrollView } from 'native-base';
import { Linking } from 'react-native';

export default function AdoptionDetails({ navigation }) {

    const navigationData = {
        ...navigation.state.params
    }

    const handleWhatsapp = () => {
        Linking.openURL(
            'http://api.whatsapp.com/send?phone=61991373884'
        );
    }

    return <NativeBaseProvider>

        <Box w="190%" alignItems="center" backgroundColor='white'>
            <Menu w="190" trigger={triggerProps => {
                return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                    <HamburgerIcon />
                </Pressable>;
            }}>
                <Menu.Item onPress={() => navigation.navigate('MainAction')}>Tela principal</Menu.Item>
                <Menu.Item onPress={() => navigation.navigate('PetType')}>Adotar Pet</Menu.Item>
            </Menu>
        </Box>
        <ScrollView backgroundColor='white'>
            <Heading marginTop={8} marginRight={8} marginLeft={8} alignSelf="center" size="lg" fontWeight="600" color="coolGray.800" _dark={{
                color: "warmGray.50"
            }}>
                Detalhes do Pet
            </Heading>
            <Box alignItems="center" marginTop='8'>
                <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700"
                }} _web={{
                    shadow: 2,
                    borderWidth: 0
                }} _light={{
                    backgroundColor: "orange.400"
                }}>
                    <Box>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image source={{
                                uri: navigationData.avatarUrl
                            }} alt="image" />
                        </AspectRatio>
                    </Box>
                    <Stack p="4" space={3}>
                        <Stack space={2}>
                            <Heading size="md" ml="-1">
                                {navigationData.fullName}
                            </Heading>
                            <Text fontSize="xs" _light={{
                                color: "white"
                            }} _dark={{
                                color: "white"
                            }} fontWeight="500" ml="-0.5" mt="-1">
                                {navigationData.recentText}
                            </Text>
                        </Stack>
                        <Text fontWeight="400">
                            Dócil e tímido.
                        </Text>
                        <HStack alignItems="center" space={4} justifyContent="space-between">
                            <HStack alignItems="center">
                                <Text color="white" _dark={{
                                    color: "white"
                                }} fontWeight="400">
                                    12/08
                                </Text>
                            </HStack>
                        </HStack>
                    </Stack>
                    <Button mt="2" colorScheme="green" onPress={handleWhatsapp}>

                        Entre em contato via whatsapp!
                    </Button>
                </Box>
            </Box>

        </ScrollView>
    </NativeBaseProvider>
};