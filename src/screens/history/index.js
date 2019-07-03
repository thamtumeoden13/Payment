import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
// import { Search } from '../../components/mainapp/header/SearchBar';

export default class History extends Component {
    static navigationOptions = {
        // headerTitle: <Search />,
        // headerStyle: {
        //     height: 120,
        // }
        title: 'Lich Su giao dich'
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Lich su giao dich
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});