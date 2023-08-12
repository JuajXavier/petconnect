import React from "react";
import { Platform } from 'react-native';
import { VStack, Image, FormControl, Select, CheckIcon, View, Heading, Input, Button, Center, NativeBaseProvider, ScrollView } from 'native-base'
import * as ImagePicker from 'expo-image-picker';

export default function PetRegitration() {
    const [formData, setData] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [petType, setPetType] = React.useState({});
    const [isVaccinated, setIsVaccinated] = React.useState({});
    const [image, setImage] = React.useState(null);

    const validateName = () => {
        if (formData.name === undefined) {
            setErrors({
                ...errors,
                name: 'Name is required'
            });
            return false;
        } else if (formData.name.length < 3) {
            setErrors({
                ...errors,
                name: 'Name is too short'
            });
            return false;
        }

        return true;
    };

    const onSubmit = () => {
        validateName() ? console.log('Submitted') : console.log('Validation Failed');
    };


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return <NativeBaseProvider>
        <ScrollView>

            <Heading padding={8} alignSelf="center" size="lg" fontWeight="600" color="coolGray.800" _dark={{
                color: "warmGray.50"
            }}>
                Um novo lar para o pet está aguardando! Preencha o formulário abaixo.
            </Heading>

            <VStack alignSelf="center" width="90%" mx="3" maxW="300px">
                <FormControl isRequired>
                    <FormControl.Label _text={{
                        bold: true
                    }}>Nome</FormControl.Label>
                    <Input placeholder="Nome do pet" onChangeText={value => setData({
                        ...formData,
                        name: value
                    })} />
                </FormControl>
                <FormControl w="3/4" maxW="300" isRequired>
                    <FormControl.Label>O pet é um cachorro ou um gato?</FormControl.Label>
                    <Select onValueChange={itemValue => setPetType(itemValue)} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size={5} />
                    }} mt="1">
                        <Select.Item label="Cachorro" value="dog" />
                        <Select.Item label="Gato" value="cat" />
                    </Select>
                </FormControl>
                <FormControl isRequired>
                    <FormControl.Label _text={{
                        bold: true
                    }}>Descrição</FormControl.Label>
                    <Input placeholder="Descrição do pet" onChangeText={value => setData({
                        ...formData,
                        bio: value
                    })} />
                </FormControl>
                <FormControl isRequired>
                    <FormControl.Label _text={{
                        bold: true
                    }}>Idade</FormControl.Label>
                    <Input placeholder="Idade" onChangeText={value => setData({
                        ...formData,
                        age: value
                    })} />
                </FormControl>
                <FormControl w="3/4" maxW="300" isRequired>
                    <FormControl.Label>É vacinado?</FormControl.Label>
                    <Select onValueChange={itemValue => setIsVaccinated(itemValue)} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size={5} />
                    }} mt="1">
                        <Select.Item label="Sim" value="S" />
                        <Select.Item label="Não" value="N" />
                        <Select.Item label="Não sei" value="NS" />
                    </Select>
                </FormControl>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} marginTop={8}>
                    <Button onPress={pickImage}>
                    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                    Selecione uma imagem.
                    </Button>
                </View>
                <Button onPress={onSubmit} mt="5" colorScheme="orange">
                    Registrar
                </Button>
            </VStack>
        </ScrollView>
    </NativeBaseProvider>

}

function Example() {
    return <Center flex={1}>
        <PetRegitration />
    </Center>;
}