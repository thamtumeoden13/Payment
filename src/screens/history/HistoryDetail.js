import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList
} from 'react-native';

const data = [
    {
        titleLeft: "Loại dịch vụ",
        titleRight: "Thanh toán đơn hàng"
    },
    {
        titleLeft: "Giá ban đầu",
        titleRight: "286.000 VND"
    },
    {
        titleLeft: "Ưu đãi",
        titleRight: "143.000 VND"
    },
    {
        titleLeft: "Phí giao dịchu",
        titleRight: "0 VND"
    },
    {
        titleLeft: "Thời gian",
        titleRight: "28/08/2018 16:40"
    },
    {
        titleLeft: "Mã giao dịch",
        titleRight: "xxxxxx-xxxxxxxxxxxxxxxxx"
    }
]

export default class HistoryDetail extends Component {
    static navigationOptions = {
        title: 'Chi tiết giao dịch'
    }

    _renderItem = ({ item }) => {

        return (
            <View style={styles.containerMiddle}>
                <View style={styles.detail}>
                    <View style={styles.detailLeft}>
                        <Text style={styles.detailContent}>
                            {item.titleLeft}
                        </Text>
                    </View>
                    <View style={styles.detailRight}>
                        <Text style={styles.detailContent}>
                            {item.titleRight}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerTop}>
                    <Text style={styles.title}>
                        143.000
                    </Text>
                    <Text style={styles.currency}>
                        VND
                    </Text>
                </View>
                <FlatList
                    data={data}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
                <View style={styles.containerBottom}>
                    <TouchableOpacity>
                        <Text style={styles.otherBottom}>
                            Bạn cần hỗ trợ?
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    containerTop: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap"
    },
    containerMiddle: {
        flex: 2,
        width: "100%",
        justifyContent: "flex-start",
    },
    containerBottom: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        textAlign: 'center',
        // margin: 10,
    },
    currency: {
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 10,
        marginHorizontal: 5,
        paddingTop: 10,
    },
    detail: {
        height: 40,
        width: "100%",
        flexDirection: "row"
    },
    detailLeft: {
        width: "40%",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: 5,
        paddingHorizontal: 10
    },
    detailRight: {
        width: "60%",
        justifyContent: "center",
        alignItems: "flex-end",
        marginTop: 5,
        paddingHorizontal: 10
    },
    detailContent: {
        fontSize: 14,
        textAlign: "center"
    },
    otherBottom: {
        fontSize: 14,
        textAlign: 'center',
        fontStyle: "italic",
        textDecorationLine: "underline"
    }
});