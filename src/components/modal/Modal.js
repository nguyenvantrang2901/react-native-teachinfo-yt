import { View, Text, StyleSheet, Modal, Button, Alert } from 'react-native'
import React from 'react'

const ModalTest = () => {
  return (
    <Modal>
        <View style={styles.container}>
            <Text>Modal</Text>
        </View>

    </Modal>
  )
}
const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        paddingHorizontal: 30
    }
})
export default ModalTest