import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

import WelcomeScreen from '../Screens/welcomeScreen';

const screens = {
    WelcomeScreen: {
        screen: WelcomeScreen
    }
}

const Navigator = createStackNavigator(screens);

export default createAppContainer(Navigator);