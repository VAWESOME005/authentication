/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "./src/screens/Login"


const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
}

const App = () => {

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );

  // return (
  //   <View>
  //     <Text>122312</Text>
  //   </View>
  // );
};

export default App

