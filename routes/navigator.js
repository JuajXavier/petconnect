import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

import WelcomeScreen from '../Screens/welcomeScreen';
import Login from '../Screens/loginScreen';
import SignUp from '../Screens/signUpScreen';
import MainAction from '../Screens/mainActionScreen';

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
    }
}

const Navigator = createStackNavigator(screens);

export default createAppContainer(Navigator);