import { Image, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native'

const Cartitem = ({item}) => {

    const [qty, setQty] = useState(1)
    const handleIncreQty = () => {
        // if(qty> 5)
        setQty(pre=> pre+1)
    }
    const handleDecreQty = () => {
        if(qty<=1) return
        setQty(pre=>pre-1)
    }

    return (
        <View  iew style={styles.container}>
            <Image 
                source={{uri:item?.imageUrl}}
                style={styles.image}
            />
            <View>
                <Text>Name : {item?.name}</Text>
                <Text>Price : {item?.price}</Text>
            </View>

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
  )
}

export default Cartitem

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    image: {
        height: 70,
        width: 60,
        resizeMode: 'contain'
    },
    btnContainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        right: -20
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
    },
      
})