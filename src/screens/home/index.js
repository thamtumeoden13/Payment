import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions,
} from 'react-native';

import { Search } from '../../components/mainapp/header';
import { MainMenuItem } from './MainMenuItem'

import { dataMainMenu } from '../../constants/dataTest'

import { formatData } from '../../untils/function'

const numColumns = 3;

export default class Home extends Component {
    static navigationOptions = {
        headerTitle: <Search />,
        headerStyle: {
            height: 140,
        }
    }
    onPressItem = (route) => {
        console.log("route", route)
        this.props.navigation.navigate(route);
    }

    _renderItem = ({ item }) => (
        <MainMenuItem
            item={item}
            numColumns={numColumns}
            onPress={this.onPressItem}
        />
    );

    _keyExtractor = (item) => item.key.toString();

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={formatData(dataMainMenu, numColumns)}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    style={styles.flatListContainer}
                    numColumns={numColumns}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eff1f4',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    flatListContainer: {
        flex: 1,
        marginVertical: 15
        // width: "100%"
    }
});