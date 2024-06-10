import { Image, Pressable, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Layout from '../../components/Layout/Layout'
import { UserData } from '../../data/dataUser'
import Inputbox from '../../components/Form/Inputbox'

const Profile = ({navigation}) => {
  const [email, setEmail] = useState(UserData.email)
  const [image, setImage] = useState(UserData.profileImage)
  const [password, setPassword] = useState('')
  const [name, setName] = useState(UserData.name)
  const [city, setCity] = useState(UserData.city)
  const [contact, setContact] = useState(UserData.contact)

  //update profile
  const handleUpdateProfile = () => {
    if(!name || !password || !email || !city || !contact){
      return alert("Bạn phải điền đủ thông tin")
    }
    alert("Cập nhật thành công")
    navigation.navigate("account")
  }
  return (
    <Layout>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: image}}/>
            <Pressable onPress={()=>alert("Update image")}>
              <Text style={{color: 'red'}}>Update image profile</Text>
            </Pressable>
          </View>
          <Inputbox
            value={name}
            setValue={setName}
            placeholder={"Nhập tên"}
            autoComplete={"name"}
          />
          <Inputbox
            value={password}
            setValue={setPassword}
            placeholder={"Mật khẩu"}
            autoComplete={"password"}
            secureTextEntry={true}
          />
          <Inputbox
            value={email}
            setValue={setEmail}
            placeholder={"Nhập email"}
            autoComplete={"email"}
          />
          <Inputbox
            value={city}
            setValue={setCity}
            placeholder={"Địa chỉ"}
            autoComplete={"address-line1"}
          />
          <Inputbox
            value={contact}
            setValue={setContact}
            placeholder={"Số điện thoại"}
            autoComplete={"tel"}
          />

          <TouchableOpacity 
            style={styles.btnUpdate} 
            onPress={handleUpdateProfile}>
            <Text style={styles.btnText}>Cập nhật</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Layout>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: 100,
    width: '100%',
    resizeMode: 'contain'
  },
  btnUpdate: {
    height: 50,
    justifyContent: 'center',
    // alignContent: 'center',
    backgroundColor: '#cc4747',
    marginTop: 20,
    marginHorizontal: 40,
    borderRadius: 10
  },
  btnText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  }

})