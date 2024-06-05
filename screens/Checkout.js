import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Layout from "../components/Layout/Layout"
const Checkout = () => {
    const navigation = useNavigation()

    const handleCOD = () => {
        alert("Vui lòng chuẩn bị sẵn tiền mặt")
    }
    const handleOnline = () => {
        alert("Bạn sẽ đến trang thanh toán online")
        navigation.navigate("payment")
    }

  return (
    <Layout>
        <View style={styles.container}>
            <Text style={styles.heading}>Payment Options</Text>
            <Text style={styles.price}>Total amount : 1000$</Text>

            <View style={styles.paymentCard}>
                <Text style={styles.paymentHeading}>Select you payment mode</Text>
                <TouchableOpacity 
                    style={styles.paymentBtn}
                    onPress={handleCOD}
                >
                    <Text style={styles.paymentText}>Cash on delivery</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.paymentBtn}
                    onPress={handleOnline}
                >
                    <Text style={styles.paymentText}>Online or (Credit card)</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Layout>
  )
}

export default Checkout

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '80%'
    },
    heading : {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 20
    },
    price: {
        fontSize: 20,
        color: 'gray'
    },
    paymentCard: {
        backgroundColor: '#ffffff',
        width: '80%',
        marginVertical: 10,
        padding: 20,
        borderRadius: 10,
    },
    paymentHeading: {
        fontSize: 20,
        color: 'gray',
        marginBottom: 10
    },
    paymentBtn: {
        backgroundColor: 'orange',
        height: 40,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    paymentText: {
        fontSize: 20,
    }
})