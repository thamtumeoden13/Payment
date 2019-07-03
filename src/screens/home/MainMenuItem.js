import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity
} from 'react-native'

import { Icon } from 'react-native-elements'

export const MainMenuItem = ({ item, numColumns }) => {
    const styles = StyleSheet.create({
        item: {
            backgroundColor: '#F0F4F7',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            margin: 1,
            height: Dimensions.get('window').width / numColumns
        },
        itemVisible: {
            backgroundColor: 'transparent',
            borderRightWidth: 0,
            borderBottomWidth: 0,
        },
        itemText: {
            color: 'black'
        }
    });
    if (item.empty === true) {
        return (
            <View style={[styles.item, styles.itemVisible]} />
        )
    }
    const size = Math.floor((Dimensions.get('window').width / numColumns) / 3)
    return (
        <View style={{flex: 1}}>
            <TouchableOpacity>
                <View style={styles.item}>
                    <Icon
                        name={item.icon.name}
                        type={item.icon.type}
                        color={item.icon.color}
                        size={size}
                    />
                    <Text style={styles.itemText}>
                        {item.title}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
