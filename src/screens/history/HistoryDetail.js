import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
// import { Search } from '../../components/mainapp/header/SearchBar';

export default class HistoryDetail extends Component {
    static navigationOptions = {
        title: 'Chi tiết giao dịch'
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
                <View style={styles.containerMiddle}>
                    <View style={styles.detail}>
                        <View style={styles.detailLeft}>
                            <Text style={styles.detailContent}>
                                Loại dịch vụ
                        </Text>
                        </View>
                        <View style={styles.detailRight}>
                            <Text style={styles.detailContent}>
                                Thanh toán đơn hàng
                            </Text>
                        </View>
                    </View>
                    <View style={styles.detail}>
                        <View style={styles.detailLeft}>
                            <Text style={styles.detailContent}>
                                Giá ban đầu
                        </Text>
                        </View>
                        <View style={styles.detailRight}>
                            <Text style={styles.detailContent}>
                                286.000 VND
                            </Text>
                        </View>
                    </View>
                    <View style={styles.detail}>
                        <View style={styles.detailLeft}>
                            <Text style={styles.detailContent}>
                                Ưu đãi
                        </Text>
                        </View>
                        <View style={styles.detailRight}>
                            <Text style={styles.detailContent}>
                                143.000 VND
                            </Text>
                        </View>
                    </View>
                    <View style={styles.detail}>
                        <View style={styles.detailLeft}>
                            <Text style={styles.detailContent}>
                                Phí giao dịch
                        </Text>
                        </View>
                        <View style={styles.detailRight}>
                            <Text style={styles.detailContent}>
                                0 VND
                            </Text>
                        </View>
                    </View>
                    <View style={styles.detail}>
                        <View style={styles.detailLeft}>
                            <Text style={styles.detailContent}>
                                Thời gian
                        </Text>
                        </View>
                        <View style={styles.detailRight}>
                            <Text style={styles.detailContent}>
                                28/08/2018 16:40
                            </Text>
                        </View>
                    </View>
                    <View style={styles.detail}>
                        <View style={styles.detailLeft}>
                            <Text style={styles.detailContent}>
                                Mã giao dịch
                        </Text>
                        </View>
                        <View style={styles.detailRight}>
                            <Text style={styles.detailContent}>
                                xxxxxx-xxxxxxxxxxxxxxxxx
                            </Text>
                        </View>
                    </View>
                </View>
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
        // backgroundColor: 'red',
        flexWrap: "wrap"
    },
    containerMiddle: {
        flex: 2,
        width: "100%",
        justifyContent: "flex-start",
        // backgroundColor: 'blue',
    },
    containerBottom: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: 'green'
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        textAlign: 'center',
        // margin: 10,
        // backgroundColor: "yellow"
    },
    currency: {
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 10,
        marginHorizontal: 5,
        paddingTop: 10,
        // backgroundColor: "pink",
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
        // backgroundColor: "red"
    },
    detailRight: {
        width: "60%",
        justifyContent: "center",
        alignItems: "flex-end",
        marginTop: 5,
        paddingHorizontal: 10
        // backgroundColor: "white"
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