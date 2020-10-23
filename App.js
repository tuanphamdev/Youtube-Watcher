import React from "react";
import { createStackNavigator, createAppContainer, StackRouter } from 'react-navigation';
import ScanQrCode from './screen/ScanQrCodeScreen'
import TabNavigation from './screen/ConfigTabNavigationScreen'
import Login from './screen/LoginScreen'
const RootStack = createStackNavigator(
  {
    ScanQrCode: ScanQrCode,
    TabNavigationScreen: TabNavigation,
    Login: Login
  },
  {
    initialRouteName: 'Login',
    headerMode: ()=>{
      if(RouteName ==='TabNavigationScreen'){
        return 'none'
      }
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   }
);
export default createAppContainer(RootStack);