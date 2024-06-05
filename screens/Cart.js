import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import { CartData } from '../data/dataCart'
import PriceTable from '../components/cart/PriceTable'
import Layout from "../components/Layout/Layout"
import Cartitem from '../components/cart/Cartitem'
import { useNavigation } from '@react-navigation/native'

const Cart = ({navigation}) => {
    // const navigation = useNavigation()
    const [cartItems, setCartItems] = useState(CartData)
  return (
    <Layout>
      <Text style={styles.heading}>
        {
            cartItems?.length > 0 ? 
                `You have ${cartItems?.length} orders` 
                : "Buy  now"
        }
    </Text>

    {cartItems?.length > 0 && (
        <>
            <ScrollView>
                {
                    cartItems?.map(item=>(
                        <Cartitem item = {item} key={item?._id}/>
                    ))
                }
            </ScrollView>
            <View>
                <PriceTable title={'Price'} price = {9000} />
                <PriceTable title={'Tax'} price = {100} />
                <PriceTable title={'Shipping'} price = {900} />
            </View>
            <View style={styles.grandTotal}>
                <PriceTable title={'Grand total'} price = {10000} />
            </View>

            <TouchableOpacity 
                onPress={
                    // ()=>navigation.navigate('Home')
                    ()=>{alert('Thanh toán')}
                }
                style={styles.btnCheckout}
            >
                <Text>Checkout</Text>
            </TouchableOpacity>
        </>
    )}
    </Layout>
  )
}

export default Cart

const styles = StyleSheet.create({
    heading: {
        textAlign: 'center',
        color: 'green',
        paddingTop: 10,
        fontSize: 16
    },
    grandTotal: {
        borderWidth:1,
        borderColor:'lightgray',
        backgroundColor: '#ffffff',
        // padding:5,
        // margin: 5,
        marginHorizontal:20,
        borderRadius: 10
    },
    btnCheckout: {
        width: '90%',
        borderRadius: 10,
        backgroundColor: 'orange',
        height: 30,
        alignItems: 'center',
        marginHorizontal: 20,
        justifyContent: 'center',
        marginTop: 10
    }
})