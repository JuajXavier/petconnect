import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

import WelcomeScreen from '../Screens/welcomeScreen';
import Login from '../Screens/loginScreen';
import SignUp from '../Screens/signUpScreen';

const screens = {
    WelcomeScreen: {
        screen: WelcomeScreen
    },
    Login: {
        screen: Login
    },
    SignUp: {
        screen: SignUp
    }
}

const Navigator = createStackNavigator(screens);

export default createAppContainer(Navigator);