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

const data = [
    {
        key: '1',
        title: 'Nạp ĐT',
        icon: {
            name: 'mobile',
            type: 'font-awesome',
            color: 'black',
            size: 50
        }
    },
    {
        key: '2',
        title: 'Chuyển tiền',
        icon: {
            name: 'bank-transfer-out',
            type: 'material-community',
            color: 'black',
            size: 50
        }
    },
    {
        key: '3',
        title: 'Nhận tiền',
        icon: {
            name: 'bank-transfer-in',
            type: 'material-community',
            color: 'black',
            size: 50
        }
    },
    {
        key: '4',
        title: 'Thẻ ĐT',
        icon: {
            name: 'cards',
            type: 'material-community',
            color: 'black',
            size: 50
        }
    },
    {
        key: '5',
        title: 'Dịch vụ',
        icon: {
            name: 'star-o',
            type: 'font-awesome',
            color: 'black',
            size: 50
        }
    },
    {
        key: '6',
        title: 'Vé xem phim',
        icon: {
            name: 'film',
            type: 'font-awesome',
            color: 'black',
            size: 50
        }
    },
    {
        key: '7',
        title: 'Tiền điện',
        icon: {
            name: 'bolt',
            type: 'font-awesome',
            color: 'black',
            size: 50
        }
    },
    {
        key: '8',
        title: 'Tiền nước',
        icon: {
            name: 'water',
            type: 'material-community',
            color: 'black',
            size: 50
        }
    },
    {
        key: '9',
        title: 'Vé máy bay',
        icon: {
            name: 'aircraft',
            type: 'entypo',
            color: 'black',
            size: 50
        }
    },
    {
        key: '10',
        title: 'Internet',
        icon: {
            name: 'broadcast',
            type: 'octicon',
            color: 'black',
            size: 50
        }
    },
    {
        key: '11',
        title: 'Truyền hình',
        icon: {
            name: 'tv',
            type: 'entypo',
            color: 'black',
            size: 50
        }
    },
    {
        key: '12',
        title: 'Quà mừng',
        icon: {
            name: 'gift',
            type: 'feather',
            color: 'black',
            size: 50
        }
    },
]
const numColumns = 3;

const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
    let numberOfElementLastRows = data.length - (numColumns * numberOfFullRows);

    while (numberOfElementLastRows !== numColumns && numberOfElementLastRows !== 0) {
        data.push({ key: `blank-${numberOfElementLastRows}`, empty: true })
        numberOfElementLastRows += 1;
    }
    return data;
}

export default class Home extends Component {
    static navigationOptions = {
        headerTitle: <Search />,
        headerStyle: {
            height: 120,
        }
    }
    _renderItem = ({ item }) => (
        <MainMenuItem
            item={item}
            numColumns={numColumns}
        />
    );

    _keyExtractor = (item) => item.key.toString();

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={formatData(data, numColumns)}
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#F5FCFE',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    flatListContainer: {
        flex: 1,
    }
});