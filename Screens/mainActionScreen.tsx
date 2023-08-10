import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NativeBaseProvider, ScrollView, View, Heading, AspectRatio, Image, HStack, Text, Stack, Box } from "native-base";


export default function MainAction({ navigation }) {
    return <NativeBaseProvider>

        <ScrollView backgroundColor="white">

            <Heading marginTop={8} marginRight={4} alignSelf="center" size="lg" fontWeight="600" color="coolGray.800" _dark={{
                color: "warmGray.50"
            }}>
                Escolha uma das opções!
            </Heading>

            <View style={{ marginTop: 30, }}>
                <TouchableOpacity onPress={() => navigation.navigate('AdoptionList')}>

                    <Box alignItems="center" paddingBottom={4}>
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
                                    <Image height={40} width={80} source={require('../assets/adoption1.jpeg')} alt="image" />
                                </AspectRatio>
                            </Box>
                            <Stack p="4" space={3}>
                                <Stack space={2}>
                                    <Heading size="md" ml="-1">
                                        Quero adotar!
                                    </Heading>
                                    <Text fontSize="xs" _light={{
                                        color: "orange"
                                    }} _dark={{
                                        color: "orange"
                                    }} fontWeight="500" ml="-0.5" mt="-1">
                                        Por aqui você terá acesso à lista de pets para adoção!
                                    </Text>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('AdoptionForm')}>

                    <Box alignItems="center">
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
                                    <Image height={40} width={80} source={require('../assets/adoption2.jpeg')} alt="image" />
                                </AspectRatio>
                            </Box>
                            <Stack p="4" space={3}>
                                <Stack space={2}>
                                    <Heading size="md" ml="-1">
                                        Colocar para adoção.
                                    </Heading>
                                    <Text fontSize="xs" _light={{
                                        color: "orange"
                                    }} _dark={{
                                        color: "orange"
                                    }} fontWeight="500" ml="-0.5" mt="-1">
                                        Resgatou um bichinho? Ajude-o a encontrar um novo lar!
                                    </Text>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                </TouchableOpacity>

            </View>
        </ScrollView>

    </NativeBaseProvider>;
};