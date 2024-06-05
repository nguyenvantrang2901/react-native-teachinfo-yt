import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PriceTable = ({title, price}) => {
  return (
    <View style={styles.contianer}>
      <Text>{title}</Text>
      <Text>{price}</Text>
    </View>
  )
}

export default PriceTable

const styles = StyleSheet.create({
    contianer: {
        flexDirection:'row',
        justifyContent: 'space-between',
        // borderWidth: 1,
        // borderRadius: 5,
        // paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal:10,
        marginVertical:5
    }
})