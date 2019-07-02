import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { SocialIcon } from 'react-native-elements'

export const SignInSocial = () => {

    return (
        <View style={styles.signInSocial}>
            <TouchableOpacity>
                <SocialIcon
                    type='twitter'
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <SocialIcon
                    raised={false}
                    type='gitlab'
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <SocialIcon
                    type='facebook'
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    signInSocial: {
        width: '90%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        // backgroundColor: 'blue'
    },
    registerAccount: {
        width: '90%',
        height: 110,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        // backgroundColor: 'red'
    }
});