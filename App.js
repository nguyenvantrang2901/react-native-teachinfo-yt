import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Task from './src/components/task/Task';
import Modal from './src/components/modal/Modal';
// import Home from './src/components/navigation/Home';
// import Profile from './src/components/navigation/Profile';

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/movieApp/Home';
import Movie from './src/components/movieApp/Movie';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' >
            {/* <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Profile' component={Profile}/> */}
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Movie' component={Movie}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:40
  },
});
