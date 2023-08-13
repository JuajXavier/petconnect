import React from "react";
import { NativeBaseProvider, Box, Heading, FlatList, VStack, Text, Avatar, Spacer, HStack } from 'native-base';
import { TouchableOpacity } from "react-native-gesture-handler";

export default function AdoptionList({ navigation }) {

    const navigationData = {
        ...navigation.state.params.params
    }

    const onPressDetails = (petDetails: any) => {
        navigation.navigate('AdoptionDetails', petDetails)
    }

    const dogData = [{
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        fullName: "Átila",
        timeStamp: "10/02",
        recentText: "Vacinado",
        avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        fullName: "Luke",
        timeStamp: "11/11",
        recentText: "Vacinado",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
    }, {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        fullName: "Van",
        timeStamp: "09/10",
        recentText: "Não Vacinado",
        avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
    }, {
        id: "68694a0f-3da1-431f-bd56-142371e29d72",
        fullName: "Dogo",
        timeStamp: "10/10",
        recentText: "Vacinado",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
    }, {
        id: "28694a0f-3da1-471f-bd96-142456e29d72",
        fullName: "Kiara",
        timeStamp: "22/05",
        recentText: "Vacinado",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
    }];

    const catData = [{
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        fullName: "Grumpy",
        timeStamp: "10/02",
        recentText: "Vacinado",
        avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        fullName: "Marcel",
        timeStamp: "11/11",
        recentText: "Não vacinado",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
    }, {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        fullName: "Chin",
        timeStamp: "09/10",
        recentText: "Não Vacinado",
        avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
    }, {
        id: "68694a0f-3da1-431f-bd56-142371e29d72",
        fullName: "Roge",
        timeStamp: "10/10",
        recentText: "Não vacinado",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
    }, {
        id: "28694a0f-3da1-471f-bd96-142456e29d72",
        fullName: "Crona",
        timeStamp: "22/05",
        recentText: "Vacinado",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
    }, {
        id: "28594a0f-3da1-471f-bd96-142456e29d72",
        fullName: "Nono",
        timeStamp: "22/06",
        recentText: "Vacinado",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
    }, {
        id: "28794a0f-3da1-471f-bd96-142456e29d72",
        fullName: "Jujo",
        timeStamp: "28/05",
        recentText: "Vacinado",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
    }];

    const data = navigationData.type[0] === 'c' ? catData : dogData;

    // console.log('data', data)

    return <NativeBaseProvider>
        <Box>
            <Heading marginY={2} fontSize="xl" p="4" pb="3">
                Pets para adoção
            </Heading>
            <FlatList backgroundColor='white' data={data} renderItem={({
                item
            }) => <TouchableOpacity onPress={() => onPressDetails(item)}>
                    <Box borderBottomWidth="1" _dark={{
                        borderColor: "muted.50"
                    }} borderColor="orange.500" pl={["4", "4"]} pr={["4", "5"]} py="2">
                        <HStack space={[2, 3]} justifyContent="space-between">
                            <Avatar size="48px" source={{
                                uri: item.avatarUrl
                            }} />
                            <VStack>
                                <Text _dark={{
                                    color: "warmGray.50"
                                }} color="coolGray.800" bold>
                                    {item.fullName}
                                </Text>
                                <Text color="coolGray.600" _dark={{
                                    color: "warmGray.200"
                                }}>
                                    {item.recentText}
                                </Text>
                            </VStack>
                            <Spacer />
                            <Text fontSize="xs" _dark={{
                                color: "warmGray.50"
                            }} color="coolGray.800" alignSelf="flex-start">
                                {item.timeStamp}
                            </Text>
                        </HStack>
                    </Box>
                </TouchableOpacity>} keyExtractor={item => item.id} />
        </Box>

    </NativeBaseProvider>
};