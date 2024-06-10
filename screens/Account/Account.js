import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Layout from '../../components/Layout/Layout'
import { UserData } from '../../data/dataUser'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Account = ({navigation}) => {
  return (
    <Layout>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{uri: UserData.profileImage}}
        />
        <View style={styles.userContainer}>
          <Text style={styles.name}>
              Xin chào {' '}
              <Text style={{color:'green'}}>{UserData.name}</Text> 
          </Text>
          <Text>Email: {UserData.email}</Text>
          <Text>Địa chỉ: {UserData.city}</Text>
          <Text>Số điện thoại: {UserData.contact}</Text>
        </View>
        <View style={styles.btnContainer}>
          <Text style={styles.heading}>Account Setting</Text>
          <TouchableOpacity 
            onPress={()=>navigation.navigate("profile", {id: UserData?._id})}
            style={styles.btn}>
              <FontAwesome name='edit' style={styles.btnText}/>
              <Text style={styles.btnText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={()=>navigation.navigate("orders", {id: UserData?._id})}
            style={styles.btn}>
              <FontAwesome name='list' style={styles.btnText}/>
              <Text style={styles.btnText}>My Order</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={()=>navigation.navigate('notifications')}
          style={styles.btn}>
              <FontAwesome name='bell' style={styles.btnText}/>
              <Text style={styles.btnText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
              <FontAwesome name='users' style={styles.btnText}/>
              <Text style={styles.btnText}>Admin Panel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  )
}

export default Account

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  img: {
    height: 100,
    width: '100%',
    resizeMode: 'contain',
  },
  userContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    marginTop: 10,
    fontSize: 20
  },
  btnContainer: {
    padding:10,
    backgroundColor: '#ffffff',
    margin:10,
    marginVertical:20,
    elevation: 5,
    borderRadius: 10,
    paddingBottom: 30
  },
  heading: {
    fontSize: 20,
    fontWeight:'bold',
    textAlign: 'center',
    justifyContent: 'center'
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginVertical: 10
  },
  btnText: {
    fontSize: 15,
    marginRight: 10
  }
})