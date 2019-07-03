
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { SearchBar, Input, Icon } from 'react-native-elements';

export const Search = () => {
    const [input, setInput] = useState('a')

    return (
        <View style={styles.container}>
            <View style={styles.frmSearch}>
                <Input
                    value={input}
                    onChangeText={input => setInput(input)}
                    placeholder="Username"
                    returnKeyType="next"
                    inputContainerStyle={styles.inputContainer}
                    leftIcon={<Icon name="search" type="font-awesome" color="#7384B4" size={18} />}
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
            <View style={styles.groupbtn}>
                <TouchableOpacity>
                    <Icon
                        name="bell-o"
                        type="font-awesome"
                        color="rgba(171, 189, 219, 1)"
                        size={25}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        // backgroundColor: 'green'
    },
    frmSearch: {
        width: '90%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'blue',
        top: 10,
        marginLeft: 10
    },
    inputContainer: {
        paddingLeft: 8,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'rgba(110, 120, 170, 1)',
        height: 40,
        marginVertical: 10,
    },
    inputStyle: {
        flex: 1,
        marginLeft: 10,
        color: 'black',
        // fontFamily: '',
        fontSize: 16,
    },
    errorInputStyle: {
        marginTop: 0,
        textAlign: 'center',
        color: '#F44336',
    },
    groupbtn: {
        width: '10%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
        right: 10,
        flexDirection: 'row'
    },
})