import { View, Text, Button } from 'react-native'
import React from 'react'

const Profile = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile</Text>
      <Button
        title='Go Home'
        onPress={()=>{navigation.navigate("Home")}}
      />
    </View>
  )
}

export default Profile