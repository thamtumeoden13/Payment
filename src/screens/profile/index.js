import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';
// import { Search } from '../../components/mainapp/header/SearchBar';

export default class Profile extends Component {
    static navigationOptions = {
        // headerTitle: <Search />,
        // headerStyle: {
        //     height: 120,
        // }
        title: 'Cá nhân'
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Cá nhân
                </Text>
                <Button title='Sign Out' onPress={() => this.props.navigation.navigate('SignIn')} />
                
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