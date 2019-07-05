import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList
} from 'react-native';

import { TopInfo, MiddleImage, BottomFunctionItem } from '../../components/wallet'

const data = [
    {
        key: 1,
        title: 'Nạp tiền',
        content: 'Từ ngân hàng vào MWGPay',
        icon: {
            name: 'user',
            type: 'font-awesome',
            color: 'green',
            size: 20
        }
    },
    {
        key: 2,
        title: 'Rút tiền',
        content: 'Từ MWGPay về ngân hàng',
        icon: {
            name: 'user',
            type: 'font-awesome',
            color: 'green',
            size: 20
        }
    },
    {
        key: 3,
        title: 'Chuyển tiền',
        content: 'Từ MWGPay đến bạn bè, người thân',
        icon: {
            name: 'user',
            type: 'font-awesome',
            color: 'green',
            size: 20
        }
    }
]

export default class Wallet extends Component {
    static navigationOptions = {
        title: 'Số dư TK MWGPay',
        tabBarVisible: false,
    }

    _renderItem = ({ item }) => {
        return (
            <BottomFunctionItem item={item} />
        )
    };

    _keyExtractor = (item) => item.key.toString();

    render() {
        return (
            <View style={styles.container}>
                <TopInfo />
                <MiddleImage />
                <View style={styles.bottomFunction}>
                    <FlatList
                        data={data}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                        style={styles.flatListContainer}
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
    bottomFunction: {
        flex: 4,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    flatListContainer: {
        flex: 1,
        width: '100%'
    }
});