
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native'
import { SearchBar, Input, Icon } from 'react-native-elements';

export const HeaderTop = () => {
    const [input, setInput] = useState('')

    return (
        <View style={styles.search}>
            <View style={styles.searchBar}>
                <Input
                    value={input}
                    onChangeText={input => setInput(input)}
                    placeholder="Type here..."
                    returnKeyType="next"
                    inputContainerStyle={styles.inputContainer}
                    leftIcon={<Icon name="search" type="font-awesome" color="black" size={18} />}
                    inputStyle={styles.inputStyle}
                    autoFocus={false}
                    autoCapitalize="none"
                    keyboardAppearance="dark"
                    errorStyle={styles.errorInputStyle}
                    autoCorrect={false}
                    blurOnSubmit={false}
                    placeholderTextColor="#7384B4"
                />
            </View>
            <View style={styles.notification}>
                <TouchableOpacity>
                    <Icon
                        name="bell-o"
                        type="font-awesome"
                        color="black"
                        size={25}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
    },
    searchBar: {
        width: '90%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
        marginLeft: 6
    },
    inputContainer: {
        paddingLeft: 8,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'black',
        height: 40,
        marginVertical: 10,
    },
    inputStyle: {
        flex: 1,
        marginLeft: 10,
        color: 'black',
        fontSize: 16,
    },
    errorInputStyle: {
        marginTop: 0,
        textAlign: 'center',
        color: '#F44336',
    },
    notification: {
        width: '10%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
        right: 10,
        flexDirection: 'row',
    }
})