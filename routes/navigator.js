import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

import WelcomeScreen from '../Screens/welcomeScreen';
import Login from '../Screens/loginScreen';
import SignUp from '../Screens/signUpScreen';
import MainAction from '../Screens/mainActionScreen';
import PetType from '../Screens/petType';
import PetRegitration from '../Screens/petRegistration';
import AdoptionList from '../Screens/adoptionList';

const screens = {
    WelcomeScreen: {
        screen: WelcomeScreen
    },
    Login: {
        screen: Login
    },
    SignUp: {
        screen: SignUp
    },
    MainAction: {
        screen: MainAction
    },
    PetType: {
        screen: PetType
    },
    PetRegistration: {
        screen: PetRegitration,
    },
    AdoptionList: {
        screen: AdoptionList,
    }
}

const Navigator = createStackNavigator(screens);

export default createAppContainer(Navigator);