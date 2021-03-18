import 'react-native-gesture-handler';
import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/containers/pages/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
         headerShown:false 
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
