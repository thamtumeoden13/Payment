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
    return (
        <TouchableOpacity onPress={onPress}>
            <ListItem
                key={item.key}
                title={item.title}
                subtitle={item.day + "/" + section.month + " " + item.hours + ":" + item.minute}
                containerStyle={{ backgroundColor: "#fff",}}
                leftIcon={{ name: item.icon, type: item.type }}
                rightIcon={{ name: "chevron-right" }}
                bottomDivider={true}
                topDivider={true}
            />
        </TouchableOpacity>
    )
}
