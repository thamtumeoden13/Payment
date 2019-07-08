import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { Icon, ListItem } from 'react-native-elements'

const info = [
    {
        name: 'Lê Hoàng Vũ',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: '097 119 6061'
    },
]

const list1 = [
    {
        title: 'Thiết Lập Bảo Vệ Tài Khoản',
        icon: 'settings',
        type: "feather"
    },
    {
        title: 'Dịch Vụ Liên Kết',
        icon: 'link',
        type: "feather"
    },
]
const list2 = [
    {
        title: 'TK ZaloPay',
        icon: 'credit-card',
        type: 'font-awesome'
    },
    {
        title: 'Ngân Hàng',
        icon: 'credit-card-plus',
        type: 'material-community'
    },
    {
        title: 'Danh Sách Quà Tặng',
        icon: 'gift',
        type: 'feather'
    },
]
const list3 = [
    {
        title: 'Trung Tâm Hỗ Trợ',
        icon: 'headphones',
        type: 'feather'
    },
    {
        title: 'Thông Tin Ứng Dụng',
        icon: 'infocirlceo',
        type: 'antdesign'
    },
]



export default class Profile extends Component {
    static navigationOptions = {
        title: 'Cá nhân'
    }

    renderItemInfo = ({ item, index }) => (
        <TouchableOpacity>
            <ListItem
                title={item.name}
                subtitle={item.subtitle}
                leftAvatar={{ source: { uri: item.avatar_url } }}
            />
        </TouchableOpacity>
    )

    renderItem = ({ item, index }) => (
        <TouchableOpacity>
            <ListItem
                key={index}
                title={item.title}
                leftIcon={{ name: item.icon, type: item.type }}
                rightIcon={{ name: "chevron-right" }}
                bottomDivider={true}
                containerStyle={{ backgroundColor: "#fff" }}

            />
        </TouchableOpacity>
    )
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <FlatList
                        data={info}
                        keyExtractor={(index) => index.toString()}
                        renderItem={this.renderItemInfo}
                    />
                </View>
                <View style={{ marginTop: 10 }}>
                    <FlatList
                        data={list1}
                        keyExtractor={(index) => index.toString()}
                        renderItem={this.renderItem}
                    />
                </View>
                <View style={{ marginTop: 10 }}>
                    <FlatList
                        data={list2}
                        keyExtractor={(index) => index.toString()}
                        renderItem={this.renderItem}
                    />
                </View>
                <View style={{ marginTop: 10 }}>
                    <FlatList
                        data={list3}
                        keyExtractor={(index) => index.toString()}
                        renderItem={this.renderItem}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eff1f4',
        paddingHorizontal: 5
    },
});