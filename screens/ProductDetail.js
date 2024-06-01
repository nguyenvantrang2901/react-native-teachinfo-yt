import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {ProductsData} from "../data/dataProducts"
import { TouchableOpacity } from 'react-native'
import Layout from "../components/Layout/Layout"

const ProductDetail = ({route}) => {
  const [proDetail, setProDetail] = useState({})
  const [qty, setQty] = useState(2)

  useEffect(()=>{
    // find product detail
    const getProduct = ProductsData.find((p)=>{
      return p._id = params._id
    })
    setProDetail(getProduct)
  },[params?._id])

  const {params} = route
  // console.log(route)

  const handleIncreQty = () => {
    // if(qty> 5)
    setQty(pre=> pre+1)
  }
  const handleDecreQty = () => {
    if(qty<=1) return
    setQty(pre=>pre-1)
  }
  const handlerAddToCart = () => {
    alert("Thêm vào giỏ hàng thành công")
  }
  return (
    <Layout >
      <Image style={styles.image} source={{uri: proDetail?.imageUrl}}/>
      <View style={styles.container}>

        <Text style={styles.title}>{proDetail?.name}</Text>
        <Text style={styles.title}>Price : {proDetail?.price} VND</Text>
        <Text style={styles.price}>{proDetail?.desc}</Text>

        <View style={styles.btnContainer}>
          <TouchableOpacity 
            onPress={handlerAddToCart}
            style={styles.btnCart}>
            <Text style={styles.btnText}>Add to cart</Text>
          </TouchableOpacity>

          <View style={styles.btnContainer}>
            <TouchableOpacity 
              onPress={handleDecreQty}
              style={styles.btnQty}>
              <Text style={styles.qtyText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.btnQty}>{qty}</Text>
            <TouchableOpacity 
              onPress={handleIncreQty}
              style={styles.btnQty}>
              <Text style={styles.qtyText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </Layout>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
    image : {
      height: 300,
      width: '100%',
      marginTop: 10
    },
    container: {
      marginVertical: 15,
      marginHorizontal: 10
    },
    title: {
      fontSize: 18,
      textAlign: 'left'
    },
    desc: {
      fontSize: 13,
      textTransform: 'capitalize',
      textAlign: 'center',
      marginVertical: 10
    },
    btnContainer: {
      flexDirection: 'row',
      marginHorizontal: 10,
      marginVertical: 20,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 5
    },
    btnCart: {
      width: 140,
      height: 30,
      borderWidth: 1,
      borderColor: 'gray',
      backgroundColor: 'orange',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center'
    },
    btnText: {
      flexSize: 18,
      fontWeight: 'bold'
    },
    btnQty: {
      width: 30,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      alignItems:'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    qtyText: {
      fontSize: 15
    }
})