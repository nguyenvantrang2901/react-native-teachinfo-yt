import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import Home from "./screens/Home"
import About from './screens/About';
import ProductDetail from './screens/ProductDetail';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import Payment from './screens/Payment';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen 
            name='Home' 
            component={Home} 
            options={{headerShown:false}}
          />
          <Stack.Screen name='mobile' component={About}/>
          <Stack.Screen name='productDetail' component={ProductDetail}/>
          <Stack.Screen name='cart' component={Cart}/>
          <Stack.Screen name='checkout' component={Checkout}/>
          <Stack.Screen name='payment' component={Payment}/>
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
