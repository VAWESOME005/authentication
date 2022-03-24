import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import * as Google from "expo-google-app-auth";
import firebase from "firebase";
import Constants from 'expo-constants';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import AuthMenu from './components/auth/menu';
import rootReducer from './reducers';
import LoginScreen from './LoginScreen'

    const AppSwitchNavigator = createSwitchNavigator({ 
      LoginScreen : LoginScreen,
      AuthMenu : AuthMenu
     });
     
     const AppNavigator = createAppContainer(AppSwitchNavigator);
     
    export default function App(){
      return <AppNavigator />;
   
    }