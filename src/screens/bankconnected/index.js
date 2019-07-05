import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList
} from 'react-native';
import { Button, Icon } from 'react-native-elements'

import { BankConnectedItem } from '../../components/bankconnected'

const data = [
    {
        key: 1,
        title: 'Vietin Bank',
        author: '4041 00** **** 7899',
        thumbnail: 'https://xonefm.com/wp-content/uploads/2019/06/mydearthumbnail-2.png',
        logo: require('../../assets/img/logoBank/ICB.png'),
        backgroundColor: '#93d5f6'
    },
    {
        key: 2,
        title: 'Saccombank',
        author: '9704 03** **** 1234',
        thumbnail: 'https://xonefm.com/wp-content/uploads/2019/06/ecoXone.jpg',
        logo: require('../../assets/img//logoBank/STB.png'),
        backgroundColor: '#e7f4fd'
    },
    {
        key: 3,
        title: 'Vietcombank',
        author: '9704 23** **** 3003',
        thumbnail: 'https://xonefm.com/wp-content/uploads/2019/06/bamuthumbnail-2.png',
        logo: require('../../assets/img/logoBank/VCB.png'),
        backgroundColor: '#84b76c'
    },
    {
        key: 4,
        title: 'MaritimeBank',
        author: '5424 51** **** 6868',
        thumbnail: 'https://xonefm.com/wp-content/uploads/2019/06/nghethumb-demo-2.png',
        logo: require('../../assets//img/logoBank/MSB.png'),
        backgroundColor: '#e15643'
    },
    {
        key: 5,
        title: 'BIDV',
        author: '9704 18** **** 9084',
        thumbnail: 'https://xonefm.com/wp-content/uploads/2019/06/Screen-Shot-2019-06-10-at-8.58.50-PM-1.png',
        logo: require('../../assets/img//logoBank/BIDV.png'),
        backgroundColor: '#f8f8f8'
    }
]

export default class BankConnected extends Component {
    static navigationOptions = {
        title: 'Ngân hàng',
        tabBarVisible: false,
    }

    _renderItem = ({ item }) => {
        return (
            <BankConnectedItem
                id={item.id}
                title={item.title}
                author={item.author}
                thumbnail={item.thumbnail}
                logo={item.logo}
                backgroundColor={item.backgroundColor}
            />
        )
    };

    _keyExtractor = (item) => item.key.toString();

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.flatListContainer}>
                    <FlatList
                        data={data}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                    />
                </View>
                <View style={styles.addItem}>
                    <Button
                        icon={
                            <Icon
                                name="plus"
                                type='font-awesome'
                                size={18}
                                color="#F5FCFF"
                            />
                        }
                        title='Thêm liên kết'
                        titleStyle={{marginHorizontal: 5}}
                    />
                </View>
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
    flatListContainer: {
        flex: 9,
        width: '100%',
        marginVertical: 10
    },
    addItem: {
        flex: 2,
        width: '90%',
        marginVertical: 10
    }
});