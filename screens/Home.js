import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../components/Layout/Layout'
import Categories from '../components/categories/Categories'
import Banner from '../components/Banner/Banner'

const Home = () => {
  return (
    <Layout style={styles.container}>
      <View>
        <Categories/>
      </View>
      <Banner/>
      <View>
        <Text>Home Page</Text>
      </View>
    </Layout>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:40,
    flexDirection:'row'
  },
});