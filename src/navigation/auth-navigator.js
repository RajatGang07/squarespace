import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '../screen/SignIn';
import SignUpScreen from '../screen/SignUp';
import RestorePasswordScreen from '../screen/RestorePasswordScreen/index';


const AuthNavigatorConfig = {
  initialRouteName: 'Login',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Login:LoginScreen,
  SignUp: SignUpScreen,
  RestorePassword: RestorePasswordScreen
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;