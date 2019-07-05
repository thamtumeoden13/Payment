import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class Gift extends Component {
    static navigationOptions = {
        title: 'Ưu đãi'
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Ưu đãi
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