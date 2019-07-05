import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { SearchBar, Icon } from 'react-native-elements'

import { useNavigation } from 'react-navigation-hooks'

export const HistoryItem = ({ section, item, onPress }) => {

    const { navigate } = useNavigation();

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.containerIcon}>
                    <Icon
                        name="list"
                        type="font-awesome"
                        color="blue"
                        size={20}

                    />
                </View>
                <View style={styles.containerContent}>
                    <Text style={styles.titleItem} >
                        {item.title}
                    </Text>
                    <Text style={styles.contentItem} >
                        {item.day}/{section.month} {item.hours}:{item.minute}
                    </Text>
                </View>
                <View style={styles.containerRight}>
                    <Text style={styles.SectionListItem} >
                        {item.cost}
                    </Text>
                </View>
            </View>
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