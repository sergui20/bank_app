import {createAppContainer, createStackNavigator, createDrawerNavigator} from 'react-navigation';

import LoginScreen from './src/components/login-screen';
import SignupScreen from './src/components/signup-screen';
import SavingsAccount from './src/components/savings-screen';
import CheckingAccount from './src/components/checking-screen';
import Logout from './src/components/Logout'

const authFlow = createStackNavigator(
  {
    Home: LoginScreen,
    Signup: SignupScreen
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      header: null
    }
  }
)

const mainFlow = createDrawerNavigator(
  {
    Savings: SavingsAccount,
    Checking: CheckingAccount,
    Logout: Logout
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
