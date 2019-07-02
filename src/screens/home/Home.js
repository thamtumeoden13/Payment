import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Search } from '../../components/mainapp/header/SearchBar';

export default class Home extends Component {
    static navigationOptions = {
        headerTitle: <Search />,
        headerStyle: {
            height: 120,
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    HOME2
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