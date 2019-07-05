
import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Icon } from 'react-native-elements'


export const CommonItem = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.lefIconContainer}>
                <Icon
                    name={props.leftIconName}
                    type={props.leftIconType}
                    color={props.leftIconColor}
                    size={props.leftIconSize}
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={{ width: '100%', fontWeight: '600' }}>
                    {props.title}
                </Text>
            </View>
            <View style={styles.rightIconContainer}>
                <Icon
                    name={props.rightIconName}
                    type={props.rightIconType}
                    color={props.rightIconColor}
                    size={props.rightIconSize}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 50,
        width: "100%",
        backgroundColor: "#f5f5f5",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10
    },
    lefIconContainer: {
        height: '100%',
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        height: '100%',
        width: '80%',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',

    },
    rightIconContainer: {
        height: '100%',
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10
    }
});