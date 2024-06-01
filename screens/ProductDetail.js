import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.half1}>
        {/* Các phần tử trong phần 1 */}
        <View style={styles.innerElement}></View>
        <View style={styles.innerElement}></View>
      </View>
      <View style={styles.half2}>
        {/* Các phần tử trong phần 2 */}
        <View style={styles.innerElement}></View>
        <View style={styles.innerElement}></View>
        <View style={styles.innerElement}></View>
      </View>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  half1: {
    flex: 1,
    backgroundColor: 'red',
    padding: 10,
  },
  half2: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 10,
  },
  innerElement: {
    height: 50,
    marginBottom: 10,
    backgroundColor: 'white',
  },
})