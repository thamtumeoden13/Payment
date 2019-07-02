import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements';


export const SignInButton = () => {
    
    const [isLoading, setIsLoading] = useState(false)
    return (
        <View>
            <Button
                title="SIGN IN"
                activeOpacity={1}
                underlayColor="transparent"
                // onPress={this.signIn}
                loading={isLoading}
                loadingProps={{ size: 'small', color: 'white' }}
                disabled={isLoading}
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