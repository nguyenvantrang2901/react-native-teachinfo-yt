import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';

const Header = () => {
  const [searchText, setSearchText] = useState("")
  const handleSearchText = () => {
    console.log(searchText)
    setSearchText("")
  }
  return (
    <View style={{ height: 90, backgroundColor:'lightgray'}}> 
      <View style={styles.conatiner}>
        <TextInput 
          style={styles.textInput} 
          placeholder='Tìm kiếm'
          value={searchText}
          onChangeText={(text)=>setSearchText(text)}
        />
        <TouchableOpacity 
          style={styles.searchBtn}
          onPress={handleSearchText}
        >
          <FontAwesome name='search' size={18} color='#E98BA1'/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  conatiner: {
    display:'flex',
    flex:1,
    flexDirection: 'row',
    paddingHorizontal: 40,
    alignItems:'center',
    gap: 3
  },
  textInput:{
    borderWidth:1,
    borderColor:'grey',
    borderRadius: 15,
    width: "100%",
    paddingLeft: 10,
    fontSize: 16,
    backfaceVisibility: "#ffffff",
    color:"#000000",
    height: 40,
    left: 20,
    position:"absolute"
  },
  searchBtn:{
    position:'absolute',
    left:"95%"
  }
})