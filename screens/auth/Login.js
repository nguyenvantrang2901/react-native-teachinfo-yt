import { Image, StyleSheet, Text, TouchableOpacity, Button, ImageBackground, View } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import Inputbox from '../../components/Form/Inputbox'
const Login = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = () => {
        if(!email || !password){
           return alert("Phải điền đủ thông tin")
        }
        navigation.navigate("Home")
    }
  return (
    <ImageBackground 
      source={{uri: 'https://pics.craiyon.com/2023-09-20/270af1b7370348e7b5f5429fd4b7c83b.webp'}} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Đăng nhập</Text>

        <Inputbox
            style={styles.input}
            value={email}
            setValue={setEmail}
            placeholder={'Nhập địa chỉ email'}
            autoComplete={'email'}
        />
        <Inputbox
            style={styles.input}
            value={password}
            setValue={setPassword}
            placeholder={'Mật khẩu'}
            secureTextEntry={true}
        />
        <View style={styles.buttonContainer}>
            <Button 
                title="Đăng nhập ngay" 
                onPress={handleLogin}
            />
            <TouchableOpacity
                style={styles.btnContainer}
                onPress={()=>navigation.navigate('register')}
            >
                <Text style={styles.btnTitle}>Tạo tài khoản mới</Text>
            </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
export default Login;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center'
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    width: '80%',
    borderRadius: 10,
    marginTop: 10,
    left: 30,
    marginVertical:20
  },
  btnContainer: {
    marginTop: 20,
  },
  btnTitle: {
    height: 30,
    borderWidth: 1,
    borderColor: 'gray',
    textAlign: 'center',
    fontSize: 18,
    color: 'gray'
  }
});