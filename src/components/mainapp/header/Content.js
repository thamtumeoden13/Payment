
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native'
import { SearchBar, Input, Icon } from 'react-native-elements';
import { useNavigation } from 'react-navigation-hooks'

export const Content = (props) => {
    const [input, setInput] = useState('')

    const { navigate } = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerItem}>
                <View style={styles.contentIcon}>
                    <TouchableOpacity>
                        <Icon
                            name="barcode"
                            type="font-awesome"
                            color="black"
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.contentTitle}>
                    <Text style={{ color: 'black', fontSize: 10, textAlign: 'center' }} >THANH TOÁN</Text>
                </View>
            </View>
            <View style={styles.containerItem}>
                <View style={styles.contentIcon}>
                    <TouchableOpacity onPress={() => { navigate('Wallet') }}>
                        <Text style={{ color: 'black', fontSize: 10, textAlign: 'center' }}>Số dư</Text>
                        <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold', textAlign: 'center' }}>VND</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.contentTitle}>
                    <Text style={{ color: 'black', fontSize: 10, textAlign: 'center' }} >100,000,000</Text>
                </View>
            </View>
            <View style={styles.containerItem}>
                <View style={styles.contentIcon}>
                    <TouchableOpacity onPress={() => { navigate('BankConnected') }}>
                        <Icon
                            name="credit-card-plus"
                            type="material-community"
                            color="black"
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.contentTitle}>
                    <Text style={{ color: 'black', fontSize: 10, textAlign: 'center' }} >NGÂN HÀNG</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 90,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    containerItem: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',

    },
    contentIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1
    },
    contentTitle: {
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 8
    }
})