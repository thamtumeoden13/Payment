import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions,
    ImageBackground,
    Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Slider } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown'

const colorNameData = [
    {
        value: '10000',
        label: '10.000'
    },
    {
        value: '20000',
        label: '20.000'
    },
    {
        value: '50000',
        label: '50.000'
    },
];

const data = [
    {
        key: "1",
        title: "Viettel",
        url_logo: require('../../assets/img/logo-viettel_105524546.png')
    },
    {
        key: "2",
        title: "MobiPhone",
        url_logo: require("../../assets/img/logo-mobifone-dep_010413095.jpg")
    },
    {
        key: "3",
        title: "VinaPhone",
        url_logo: require("../../assets/img/logo-vinaphone_010429237.png")
    },
    {
        key: "4",
        title: "VNMobi",
        url_logo: require("../../assets/img/logo-vietnammobile_010446882.png")
    },
    {
        key: "5",
        title: "BeeLine",
        url_logo: require("../../assets/img/BeeLine_logo.png")
    }
];

export default class PhoneCard extends Component {
    static navigationOptions = {
        title: "Thẻ điện thoại"
    }
    constructor(props) {
        super(props)
        this.state = {
            amount: 0,
            value: 0,
            supplier: ""
        }
    }
    _renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={{
                borderWidth: 2,
                borderColor: "red",
            }}>
                <View style={{
                    height: 100,
                    width: 100,
                    margin: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    // borderWidth: 1
                }}>
                    <ImageBackground
                        source={item.url_logo}
                        style={{
                            width: "80%",
                            height: "80%"
                        }}
                        resizeMode="contain"
                    />
                </View>

            </TouchableOpacity>

        )
    }
    _onChangeValue = (value) => {
        this.setState({ value: value })
    }

    render() {
        let { value, amount } = this.state;
        return (
            <View style={styles.container}>
                <View style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    marginVertical: 10
                }}>
                    <Text style={{ fontSize: 16 }}> Nhà cung cấp</Text>
                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this._renderItem}
                        style={styles.containerFlatList}
                        horizontal={true}
                    />
                </View>
                <View style={{
                    height: 80,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                }}>
                    <View style={{ flex: 1, width: "90%" }}>
                        <Dropdown
                            value={value}
                            onChangeText={this._onChangeValue}
                            label="Chọn mệnh giá(VND)"
                            data={colorNameData}
                        />
                    </View>
                </View>
                <View style={{
                    height: 80,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    marginVertical: 10
                }}>
                    <View style={{ flex: 1, width: "90%", justifyContent: "center", alignItems: "flex-start" }}>
                        <Text style={{
                            textAlign: "center",
                            fontSize: 12,
                        }}>
                            Số lượng: {this.state.amount}
                        </Text>
                    </View>
                    <View style={{ flex: 1, width: "90%", alignItems: 'stretch', justifyContent: 'center' }}>
                        <Slider
                            value={amount}
                            onValueChange={value => this.setState({ amount: value })}
                            maximumValue={10}
                            minimumValue={0}
                            step={1}
                            thumbStyle={{ backgroundColor: 'blue' }}
                        />
                    </View>
                </View>
                <View style={{
                    height: 60,
                    marginVertical: 10,
                    backgroundColor: "white",
                    alignItems: "center",
                }}>
                    <View style={{
                        flex: 1,
                        width: "90%",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row",
                    }}>
                        <Text style={{ fontSize: 16, }}>
                            Số tiền thanh toán
                        </Text>
                        <Text style={{ fontSize: 24 }}>
                            {parseInt(amount) * parseInt(value)} VND
                        </Text>
                    </View>
                </View>
                <View style={{
                    height: Dimensions.get('screen').width / 4,
                    marginVertical: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row"
                }}>
                    <Button
                        title="Xác nhận đơn hàng"
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFE',
    },
    containerFlatList: {
        height: 100,
        width: "100%"
    }
});