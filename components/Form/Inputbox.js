import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Inputbox = ({autoComplete, placeholder, value, secureTextEntry, setValue}) => {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.inputBox}
        autoComplete={autoComplete}
        placeholder={placeholder}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        value = {value}
        onChangeText={(text)=>setValue(text)}
      />
    </View>
  )
}

export default Inputbox

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputBox: {
    borderWidth: 1,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    height: 40,
    borderColor: 'gray',
    width: '80%',
    paddingLeft:10,
    color: '#000000'
  }
})