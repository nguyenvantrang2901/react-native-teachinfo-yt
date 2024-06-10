import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import Home from "./screens/Home"
import About from './screens/About';
import ProductDetail from './screens/ProductDetail';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import Payment from './screens/Payment';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import Account from './screens/Account/Account';
import Profile from './screens/Account/Profile';
import Notifications from './screens/Account/Notifications';
import MyOrders from './screens/Account/MyOrders';
import Dashboard from './screens/Admin/Dashboard';

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
          <Stack.Screen name='account' component={Account}/>
          <Stack.Screen name='profile' component={Profile}/>
          <Stack.Screen name='notifications' component={Notifications}/>
          <Stack.Screen name='orders' component={MyOrders}/>
          <Stack.Screen name='adminPanel' component={Dashboard}/>
          <Stack.Screen 
            name='login'
            component={Login}
            options={{headerShown:false}}
          />
          <Stack.Screen 
            name='register' 
            component={Register}
            options={{headerShown:false}}
          />
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
