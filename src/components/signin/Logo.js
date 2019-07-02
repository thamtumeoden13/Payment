import React from 'react';
import { View, StyleSheet, Text } from 'react-native'

export const Logo = () => {

    return (
        <View style={styles.mwgLogo}>
            <Text style={styles.mwgLogoTitle} >MWG</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mwgLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 150,
        backgroundColor: "yellow",
        borderRadius: 75,
        marginBottom: 50
    },
    mwgLogoTitle: {
        color: 'black',
        fontSize: 28,
        fontWeight: 'bold',
    },
});