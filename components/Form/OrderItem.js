import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrderItem = ({order}) => {
  return (
    <View style={styles.container}>
        <View style={styles.orderinfo}>
            <Text> Order ID: {order?._id}</Text>
            <Text> Date: {order?.date}</Text>
        </View>
        <Text>Product name: {order?.productInfo?.name}</Text>
        <Text>Price: {order?.productInfo?.price} $</Text>
        <Text>Quantity: {order?.productInfo?.qty}</Text>
        <Text>Total Amount: {order?.totalAmount} $</Text>
        <Text style={styles.status}>Status: {order?.status}</Text>
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor:"#ffffff"
    },
    orderinfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        paddingBottom: 5
    },
    status: {
        padding: 5,
        borderTopWidth: 1,
        borderColor: "lightgray",
        fontWeight: "bold"
    }
})