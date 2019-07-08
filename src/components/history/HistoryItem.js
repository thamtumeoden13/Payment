import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { SearchBar, Icon, ListItem } from 'react-native-elements'

import { useNavigation } from 'react-navigation-hooks'

export const HistoryItem = ({ section, item, index, onPress }) => {
    console.log("index", item.key)
    const { navigate } = useNavigation();

    return (
        <TouchableOpacity onPress={onPress}>
            <ListItem
                key={item.key}
                title={item.title}
                leftIcon={{ name: item.icon, type: item.type }}
                rightIcon={{ name: "chevron-right" }}
                bottomDivider={true}
                containerStyle={{ backgroundColor: "#fff" }}

            />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "#64B5F6",
        flexDirection: 'row',
        flex: 1,
        marginHorizontal: 5
    },
    containerIcon: {
        width: "10%",
        alignItems: "center",
        justifyContent: "center",
    },
    containerContent: {
        width: '60%',
        alignItems: "flex-start",
        justifyContent: "center",
    },
    containerRight: {
        width: '30%',
        alignItems: "flex-end",
        justifyContent: "center",
    },
    titleItem: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#000',
    },
    contentItem: {
        fontSize: 12,
        color: '#000',
    },
});