import React from 'react'
import {  StyleSheet, View, Text, Image, Dimensions, Pressable, Alert } from 'react-native';
import Carousel, { PaginationLight } from 'react-native-x-carousel';
import { BannerData } from '../../data/dataBanner';
const { width } = Dimensions.get('window');

const Banner = () => {
    const renderItem = (data) => (
        <View
          key={data.coverImageUri}
          style={styles.cardContainer}
        >
          <Pressable onPress={()=>Alert.alert("Click banner")}>
            <View
                style={styles.cardWrapper}
            >
                <Image
                style={styles.card}
                source={{ uri: data.coverImageUri }}
                />
                <View
                style={[
                    styles.cornerLabel,
                    { backgroundColor: data.cornerLabelColor },
                ]}
                >
                <Text style={styles.cornerLabelText}>
                    { data.cornerLabelText }
                </Text>
                </View>
            </View>
          </Pressable>
        </View>
      );
    
      return (
        <View style={styles.container}>
            {/* <Text>cin chào</Text> */}
            <Carousel
                pagination={PaginationLight}
                renderItem={renderItem}
                data={BannerData}
                loop
                autoplay
            />
        </View>
      );
}

export default Banner

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width,
    },
    cardWrapper: {
        borderRadius: 10,
        overflow: 'hidden',
    },
    card: {
        width: width * 1,
        height: width * 0.5,
    },
    cornerLabel: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderTopLeftRadius: 8,
    },
    cornerLabelText: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '600',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2,
        paddingBottom: 2,
    }
})