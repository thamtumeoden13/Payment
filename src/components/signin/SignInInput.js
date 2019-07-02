import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { Input, Icon } from 'react-native-elements';


export const SignInInput = () => {
    const [email, setEmail] = useState('email@gmail.com')
    const [password, setPassword] = useState('11111111')
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isPasswordValid, setIsPasswordValid] = useState(true)

    return (
        <View style={styles.signInInput}>
            <Input
                leftIcon={
                    <Icon
                        name="user-o"
                        type="font-awesome"
                        color="rgba(171, 189, 219, 1)"
                        size={25}
                    />
                }
                onChangeText={(email) => setEmail(email)}
                value={email}
                inputStyle={{ marginLeft: 10, color: 'white' }}
                keyboardAppearance="light"
                placeholder="Email"
                autoFocus={false}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
                blurOnSubmit={false}
                placeholderTextColor="white"
                errorStyle={{ textAlign: 'center', fontSize: 12 }}
                errorMessage={
                    isEmailValid ? null : 'Please enter a valid email address'
                }
            />
            <Input
                leftIcon={
                    <Icon
                        name="lock"
                        type="font-awesome"
                        color="rgba(171, 189, 219, 1)"
                        size={25}
                    />
                }
                containerStyle={{ marginVertical: 10 }}
                onChangeText={(password) => setPassword(password)}
                value={password}
                inputStyle={{ marginLeft: 10, color: 'white' }}
                secureTextEntry={true}
                keyboardAppearance="light"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                returnKeyType="done"
                blurOnSubmit={true}
                placeholderTextColor="white"
                errorMessage={
                    isPasswordValid
                        ? null
                        : 'Please enter at least 8 characters'
                }
            />
        </View>
    )
}
const styles = StyleSheet.create({
    signInInput: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
    }
});