import { View, Text, Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Component</Text>
      <Button
        title='Profile Page'
        onPress={()=>{navigation.navigate("Profile")}}
      />
    </View>
  )
}

export default Home