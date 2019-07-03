import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements';
// import {useNavigation} from 'react-navigation-hooks'

export const SignInButton = (props) => {
    
    // const [isLoading, setIsLoading] = useState(false)
    // const { navigate } = useNavigation();

    return (
        <View>
            <Button
                title="SIGN IN"
                activeOpacity={1}
                underlayColor="transparent"
                onPress={props.onPress}
                loading={props.isLoading}
                loadingProps={{ size: 'small', color: 'white' }}
                disabled={props.isLoading}
                buttonStyle={{
                    height: 50,
                    width: 150,
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 30,
                }}
                containerStyle={{ marginTop: 35, marginBottom: 20 }}
                titleStyle={{ fontWeight: 'bold', color: 'yellow' }}
            />
        </View>
    )
}