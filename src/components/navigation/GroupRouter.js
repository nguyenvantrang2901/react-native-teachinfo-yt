import { View, Text } from 'react-native'
import React from 'react'
import Home from './Home'
import Profile from './Profile'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const GroupRouter = () => {

  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Profile' component={Profile}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default GroupRouter