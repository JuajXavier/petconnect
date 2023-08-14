import React from "react";
import { NativeBaseProvider, Menu, Pressable, HamburgerIcon, Box, Heading, FlatList, VStack, Text, Avatar, Spacer, HStack } from 'native-base';
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
        avatarUrl: "https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg?auto=compress&cs=tinysrgb&w=800"
    }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        fullName: "Luke",
        timeStamp: "11/11",
        recentText: "Vacinado",
        avatarUrl: "https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg?auto=compress&cs=tinysrgb&w=800"
    }, {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        fullName: "Van",
        timeStamp: "09/10",
        recentText: "Não Vacinado",
        avatarUrl: "https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?auto=compress&cs=tinysrgb&w=800"
    }, {
        id: "68694a0f-3da1-431f-bd56-142371e29d72",
        fullName: "Dogo",
        timeStamp: "10/10",
        recentText: "Vacinado",
        avatarUrl: "https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?auto=compress&cs=tinysrgb&w=800"
    }, {
        id: "28694a0f-3da1-471f-bd96-142456e29d72",
        fullName: "Kiara",
        timeStamp: "22/05",
        recentText: "Vacinado",
        avatarUrl: "https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg?auto=compress&cs=tinysrgb&w=800"
    }];

    const catData = [{
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        fullName: "Grumpy",
        timeStamp: "12/08",
        recentText: "Vacinado",
        avatarUrl: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=800"
    }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        fullName: "Marcel",
        timeStamp: "11/11",
        recentText: "Não vacinado",
        avatarUrl: "https://images.pexels.com/photos/982300/pexels-photo-982300.jpeg?auto=compress&cs=tinysrgb&w=800"
    }, {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        fullName: "Chin",
        timeStamp: "09/10",
        recentText: "Não Vacinado",
        avatarUrl: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=800"
    }, {
        id: "68694a0f-3da1-431f-bd56-142371e29d72",
        fullName: "Roge",
        timeStamp: "10/10",
        recentText: "Não vacinado",
        avatarUrl: "https://images.pexels.com/photos/982300/pexels-photo-982300.jpeg?auto=compress&cs=tinysrgb&w=800"
    }, {
        id: "28694a0f-3da1-471f-bd96-142456e29d72",
        fullName: "Crona",
        timeStamp: "22/05",
        recentText: "Vacinado",
        avatarUrl: "https://images.pexels.com/photos/2928158/pexels-photo-2928158.jpeg?auto=compress&cs=tinysrgb&w=800"
    }, {
        id: "28594a0f-3da1-471f-bd96-142456e29d72",
        fullName: "Nono",
        timeStamp: "22/06",
        recentText: "Vacinado",
        avatarUrl: "https://images.pexels.com/photos/2361952/pexels-photo-2361952.jpeg?auto=compress&cs=tinysrgb&w=800"
    }, {
        id: "28794a0f-3da1-471f-bd96-142456e29d72",
        fullName: "Jujo",
        timeStamp: "28/05",
        recentText: "Vacinado",
        avatarUrl: "https://images.pexels.com/photos/2928158/pexels-photo-2928158.jpeg?auto=compress&cs=tinysrgb&w=800"
    }];

    const data = navigationData.type[0] === 'c' ? catData : dogData;

    // console.log('data', data)

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