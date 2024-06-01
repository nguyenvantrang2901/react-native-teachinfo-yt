import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"
const ProductsCard = ({pro}) => {
  const navigation = useNavigation()

  const handleDetailProduct = (id) => {
    navigation.navigate('productDetail', {_id: id})
  }
  const handleAddToCart = () => {
    alert("Item added to cart")
  }
  return (
    <View style={styles.cardContainer}>

      <Image style={styles.cardImage} source={{ uri: pro?.imageUrl}}/>
      <Text style={styles.cardTitle}>{pro?.name}</Text>
      <Text style={styles.cardDesc}>{pro?.price}</Text>
      <Text>{pro?.category}</Text>
      <Text>{`${pro?.desc.substring(0,40)}...`}</Text>

      <View style={styles.btnContainer}>
        <TouchableOpacity 
          style={styles.btn}
          onPress={ () => handleDetailProduct(pro?._id) }
        >
          <Text style={styles.btnText}>Detail</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.btnCart}
          onPress={handleAddToCart}
        >
          <Text style={styles.btnText}>Add to cart</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default ProductsCard

const styles = StyleSheet.create({
  cardContainer: {
    flex:1,
    borderWidth: 1,
    borderColor: "lightgray",
    marginVertical: 5,
    marginHorizontal: 8,
    width: "45%",
    padding: 10,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    borderRadius: 5
  },
  cardImage: {
    height: 100,
    width: "90%",
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: 'bold'
  },
  cardDesc: {
    fontSize: 10,
    textAlign:'left'
  },
  btnContainer: {
    flex:1,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center'
  },
  btn: {
    backgroundColor: "#00826e",
    height: 20,
    width: '35%',
    borderRadius: 5,
    justifyContent: 'center'
  },
  btnCart: {
    backgroundColor: "#ff940d",
    height: 20,
    width: '55%',
    borderRadius: 5,
    justifyContent: 'center'
  },
  btnText: {
    color: "#ffffff",
    fontSize: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})