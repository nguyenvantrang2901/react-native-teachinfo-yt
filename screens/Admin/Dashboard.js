import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Layout from "../../components/Layout/Layout"
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Dashboard = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.heading}>Dashboard</Text>
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn}>
                <FontAwesome
                    style={styles.btnIcon}
                    name='th-large'
                />
                <Text style={styles.btnText}>Manager Products</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <FontAwesome
                    style={styles.btnIcon}
                    name='edit'
                />
                <Text style={styles.btnText}>Manager Categories</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <FontAwesome
                    style={styles.btnIcon}
                    name='list'
                />
                <Text style={styles.btnText}>Manager Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <FontAwesome
                    style={styles.btnIcon}
                    name='user-circle'
                />
                <Text style={styles.btnText}>Manager Users</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <FontAwesome
                    style={styles.btnIcon}
                    name='question-circle-o'
                />
                <Text style={styles.btnText}>About App</Text>
            </TouchableOpacity>
        </View>
      </View>
    </Layout>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightgray",
        height: "96%"
    },
    heading: {
        fontSize: 24,
        textAlign: 'center',
        color: '#ffffff',
        backgroundColor:'#f49e4e',
        padding: 10,
        fontWeight: 'bold'
    },
    btnContainer: {
        margin: 10,
        marginTop: 20
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#ffffff",
        padding: 10,
        elevation: 10,
        borderRadius: 10,
        marginBottom: 15
    },
    btnIcon: {
        fontSize: 18,
        marginRight: 10
    },
    btnText: {
        fontSize: 18
    }
})