import React from 'react'

import {
    StyleSheet,
    View,
    Text,
    ImageBackground
} from 'react-native'


export const MiddleImage = () => {

    return (
        <View style={styles.middleImage}>
            <View style={{
                flex: 2, width: '100%',
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={{
                    flex: 1,
                    width: '100%',
                }}>
                    <ImageBackground
                        source={require('../../assets/img/banner.jpeg')}
                        style={{ width: '100%', height: '100%' }}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    middleImage: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});