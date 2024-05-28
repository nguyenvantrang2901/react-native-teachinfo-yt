import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children}) => {
  return (
    <View>
        <StatusBar/>
        <Header/>
        <Text>  {children}  </Text>
        <Footer/>
    </View>
  )
}

export default Layout

const styles = StyleSheet.create({})