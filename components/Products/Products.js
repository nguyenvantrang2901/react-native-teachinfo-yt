import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import ProductsCard from './ProductsCard'
import { ProductsData } from '../../data/dataProducts'

const Products = () => {
  return (
    <ScrollView >
      
      <View style={styles.container}>
          {
            ProductsData?.map(pro=>(
                <ProductsCard 
                    key={pro?._id} 
                    pro = {pro}
                />
            ))
          }
      </View>
        
    </ScrollView>
  )
}

export default Products

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex:1,
    flexDirection: 'row',
    top:5
  }
})