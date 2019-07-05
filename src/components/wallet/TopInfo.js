import React from 'react'

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native'

export const TopInfo = () => {

    return (
        <View style={styles.topInfo}>
            <View style={{
                flex: 2, width: '100%',
                justifyContent: 'flex-end',
                alignItems: 'center'
            }}>
                <View style={styles.contentIcon}>
                    <TouchableOpacity >
                        <Text style={{ color: '#369ae4', fontSize: 16, textAlign: 'center' }}>Số dư</Text>
                        <Text style={{ color: '#369ae4', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>VND</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                flex: 2, width: '100%',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                <View style={styles.contentTitle}>
                    <Text style={{ color: '#369ae4', fontSize: 40, textAlign: 'center', fontWeight: '300' }} >100,000</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topInfo: {
        flex: 3,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topItem: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
    },
    contentIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 30,
        borderColor: '#369ae4',
        borderWidth: 3
    },
});