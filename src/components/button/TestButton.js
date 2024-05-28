import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'

const TestButton = () => {
  return (
    <View>
      <Button 
        color="blue"
        title="Add new"
      />
      <Text style={styles.text}>Andrev Shevchenko</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color:'green'
  }
})
export default TestButton