import {createAppContainer, createStackNavigator, createDrawerNavigator} from 'react-navigation';

import LoginScreen from './src/components/login-screen';
import SignupScreen from './src/components/signup-screen';
import AccountScreen from './src/components/accounts-screen';

const authFlow = createStackNavigator(
  {
    Home: LoginScreen,
    Signup: SignupScreen
  },
  {
    initialRouteName: 'Home'
  }
)

const mainFlow = createDrawerNavigator(
  {
    Main: AccountScreen
  },
  {
    initialRouteName: 'Main',
    drawerWidth: 300,
    drawerPosition: 'left'
  }
)

const AppNavigator = createStackNavigator(
  {
    AuthScreen: authFlow,
    MainScreen: mainFlow
  }, {
    defaultNavigationOptions: {
      header: null
    }
  }
)

export default createAppContainer(AppNavigator);
