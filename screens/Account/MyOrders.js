import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from "../../components/Layout/Layout"
import { OrderData } from '../../data/dataOrders'
import OrderItem from '../../components/Form/OrderItem'

const MyOrders = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.heading}>My Orders</Text>
        <ScrollView>
            {OrderData?.map((order)=>(
                <View key={order?._id}>
                    <OrderItem key={order?._id} order={order}/>
                </View>
            ))}
        </ScrollView>
      </View>
    </Layout>
  )
}

export default MyOrders

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'gray'
    }
})