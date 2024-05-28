import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:"center"}}>
      <Text style={styles.heading}>Welcome to Movie App</Text>
      <View style={styles.movieBtn}>
        <Button 
            title='Go to movie page'  
            onPress={()=>navigation.navigate("Movie")}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    heading: {
        fontSize: 30
    },
    movieBtn: {
        paddingTop: 10,
        borderRadius: 15
    }
})
export default Home