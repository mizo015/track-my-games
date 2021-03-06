import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthStack from './AuthStack';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    Main: MainTabNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
