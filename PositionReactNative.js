import React from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import cart from './cart.png';

export default function PositionReactNative() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.cartWrapper}>
                <Image source={cart} style={styles.iconcart} />
                <Text style={styles.notif}>10</Text>
            </View>
            <Text style={styles.text}>TESTTTTT</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    iconcart: { width: 50, height: 50 },
    wrapper: { padding: 20, alignItems: 'center' },
    text : {fontSize: 12, color: 'gray', fontWeight: '700', marginTop: 10},
    cartWrapper: {
        borderWidth: 1,
        borderColor: 'black',
        width: 93,
        height: 93,
        borderRadius: 93 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    notif: {
        fontSize: 12,
        color: 'white',
        backgroundColor: '#7befb2',
        padding: 4,
        borderRadius: 25,
        height: 24,
        width: 24,
        position: 'absolute',
        top: 0,
        right: 0,
    }
})
