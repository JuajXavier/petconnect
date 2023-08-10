import React from "react";
import { NativeBaseProvider, Box, Image } from "native-base";
import Onboarding from 'react-native-onboarding-swiper';

export default function WelcomeScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      {/* <Box>Hello world!</Box> */}

<Onboarding
  pages={[
    {
      backgroundColor: '#FF9D0A',
      image: <Image alt="Logo" height={24} width={24} source={require('../assets/paw.png')} />,
      title: 'PetConnect',
      subtitle: 'Bem vindo!',
    },
    {
        backgroundColor: '#FF9D0A',
        image: <Image height={24} width={24} source={require('../assets/paw.png')} />,
        title: 'PetConnect',
        subtitle: 'Primeiro escolha se quer adotar ou colocar para adoção. :)',
      },
      {
        backgroundColor: '#FF9D0A',
        image: <Image height={24} width={24} source={require('../assets/paw.png')} />,
        title: 'PetConnect',
        subtitle: 'Por fim escolha entre cão e gato! Vamos lá?',
      },
  ]}
  onDone={() => navigation.navigate('Login')}
  onSkip={() => navigation.navigate('Login')}
/>
    </NativeBaseProvider>
  );
}