import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NativeBaseProvider, ScrollView, View, Heading, AspectRatio, Image, HStack, Text, Stack, Box } from "native-base";


export default function PetType ({ navigation }) {
    
    const onPressCat = () => {
        const params = {
            type: "cat"
        }
        navigation.navigate('AdoptionList', {params})
    }

    const onPressDog = () => {
        const params = {
            type: "dog"
        }
        navigation.navigate('AdoptionList', {params})
    }
    
    return <NativeBaseProvider>
        <ScrollView backgroundColor="white">

            <Heading marginTop={8} marginRight={8} marginLeft={8} alignSelf="center" size="lg" fontWeight="600" color="coolGray.800" _dark={{
                color: "warmGray.50"
            }}>
                Que tipo de pet você gostaria de adotar?
            </Heading>

            <View style={{ marginTop: 30, }}>
                <TouchableOpacity onPress={onPressDog}>

                    <Box alignItems="center" paddingBottom={8}>
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
                                    <Image height={40} width={80} source={require('../assets/dog.jpeg')} alt="image" />
                                </AspectRatio>
                            </Box>
                            <Stack p="4" space={3}>
                                <Stack space={2}>
                                    <Heading size="md" ml="-1">
                                        Cachorros
                                    </Heading>
                                    <Text fontSize="xs" _light={{
                                        color: "orange"
                                    }} _dark={{
                                        color: "orange"
                                    }} fontWeight="500" ml="-0.5" mt="-1">
                                        Clique aqui para acessar os cães disponíveis para adoção.
                                    </Text>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                </TouchableOpacity>

                <TouchableOpacity onPress={onPressCat}>

                    <Box alignItems="center" marginBottom={16}>
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
                                    <Image height={40} width={80} source={require('../assets/cat.jpeg')} alt="image" />
                                </AspectRatio>
                            </Box>
                            <Stack p="4" space={3}>
                                <Stack space={2}>
                                    <Heading size="md" ml="-1">
                                        Gatos
                                    </Heading>
                                    <Text fontSize="xs" _light={{
                                        color: "orange"
                                    }} _dark={{
                                        color: "orange"
                                    }} fontWeight="500" ml="-0.5" mt="-1">
                                        Clique aqui para acessar os gatos disponíveis para adoção.
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