import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../components/Layout/Layout'
import Categories from '../components/categories/Categories'
import Banner from '../components/Banner/Banner'
import Products from '../components/Products/Products'
import Header from '../components/Layout/Header'

const Home = () => {
  return (
    <Layout>
      <Header/>
      <Categories/>
      <Banner/>
      <Products/>
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