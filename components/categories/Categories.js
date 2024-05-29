import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { categoriesData } from "../../data/dataCategories"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native"
const Categories = () => {
  const navigation = useNavigation()
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {
          categoriesData?.map((item)=>(
              <View key={item?.id} >
                  <TouchableOpacity 
                    style={styles.catContainer}
                    onPress={()=>navigation.navigate(item?.path)}
                  >
                    <FontAwesome name={item?.icon} style={styles.catIcon}/>
                    <Text style={styles.catTitle}>{item?.name}</Text>
                  </TouchableOpacity>
              </View>
          ))
        }
    </View>
    </ScrollView>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 5,
    flexDirection: 'row'
  },
  catContainer: {
    padding:10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  catIcon: {
    fontSize: 20,
    verticalAlign: "top"
  },
  catTitle: {
    fontSize: 13
  }
})