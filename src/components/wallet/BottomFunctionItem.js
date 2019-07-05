import React from 'react'

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import { Icon } from 'react-native-elements'

export const BottomFunctionItem = ({ item }) => {

    return (
        <TouchableOpacity>
            <View style={{
                height: 60,
                width: '100%',
                borderBottomWidth: 1,
                borderColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
            }}>
                <View style={{
                    height: '100%',
                    width: '10%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Icon
                        name={item.icon.name}
                        type={item.icon.type}
                        color={item.icon.color}
                        size={item.icon.size}
                    />
                </View>
                <View style={{
                    height: '100%',
                    width: '80%',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',

                }}>
                    <Text style={{ width: '100%', fontWeight: 'bold' }}>
                        {item.title}
                    </Text>
                    <Text style={{ width: '100%' }}>
                        {item.content}
                    </Text>
                </View>
                <View style={{
                    height: '100%',
                    width: '10%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Icon
                        name="chevron-right"
                        type="font-awesome"
                        color="green"
                        size={20}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    bottomFunction: {
        flex: 4,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    flatListContainer: {
        flex: 1,
        width: '100%'
    }
});