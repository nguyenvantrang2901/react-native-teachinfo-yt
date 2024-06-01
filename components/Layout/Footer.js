import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';
const Footer = () => {
  // Nếu tab nào đang hoạt động thì chuyển sang màu khác
  const route = useRoute()

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome
          name='home'
          onPress={()=>alert('Home page')}
          style={[styles.icon, route.name === "Home" && styles.active]}
        />
        <Text style={[styles.iconText, route.name === 'Home' && styles.active]}>Home</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome
          name='bell'
          style={styles.icon}
        />
        <Text  style={[styles.iconText, route.name === 'notification' && styles.active]}>Notifiactions</Text>
      </TouchableOpacity >

      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome
          name='user-circle'
          style={styles.icon}
        />
        <Text  style={[styles.iconText, route.name === 'user' && styles.active]}>Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome
          name='cart-plus'
          style={styles.icon}
        />
        <Text  style={[styles.iconText, route.name === 'cart' && styles.active]}>Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome
          name='sign-out'
          style={styles.icon}
        />
        <Text  style={[styles.iconText, route.name === 'signout' && styles.active]}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    paddingHorizontal:10,
    justifyContent: 'space-between'
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 22,
    color:'#000000'
  },
  iconText: {
    fontSize: 12
  },
  active: {
    color: 'red'
  }
})