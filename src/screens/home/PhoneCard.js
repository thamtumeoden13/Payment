import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions,
    ScrollView,
    TouchableHighlight
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Slider } from 'react-native-elements';

const data = [
    {
        key: "1",
        title: "Viettel"
    },
    {
        key: "2",
        title: "MobiPhone"
    },
    {
        key: "3",
        title: "VinaPhone"
    },
    {
        key: "4",
        title: "VNMobi"
    },
    {
        key: "5",
        title: "BeeLine"
    }
];

export default class PhoneCard extends Component {
    static navigationOptions = {
        title: "Thẻ điện thoại"
    }
    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
    }
    _renderItem = ({ item, index, separators }) => {

        return (
            <TouchableOpacity
            // onPress={() => this._onPress(item)}
            >
                <View style={{ flex: 1 }}>
                    <View style={{
                        height: Dimensions.get('screen').width / 4,
                        width: Dimensions.get('screen').width / 4,
                        backgroundColor: "pink",
                        // borderWidth: 1,
                        margin: 2,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Text>{item.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    height: Dimensions.get('screen').width / 4,
                    justifyContent: "center",
                    alignItems: "center",
                    marginVertical: 10
                }}>
                    <Text> NHA CUNG CAP</Text>
                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this._renderItem}
                        style={styles.containerFlatList}
                        // numColumns={4}
                        // maxWidth={Dimensions.get("window").width}
                        // maxHeight={50}
                        horizontal={true}
                    />
                </View>
                <View style={{
                    height: Dimensions.get('screen').width / 4,
                    justifyContent: "center",
                    alignItems: "center",
                    marginVertical: 10
                }}>
                    <Text>MENH GIA(VND)</Text>
                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this._renderItem}
                        style={styles.containerFlatList}
                        // numColumns={4}
                        // maxWidth={Dimensions.get("window").width}
                        // maxHeight={50}
                        horizontal={true}
                    />
                </View>
                <View style={{
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    marginVertical: 10
                }}>
                    <Text>SO LUONG: {this.state.value}</Text>
                    <View style={{ flex: 1,width: "90%", alignItems: 'stretch', justifyContent: 'center' }}>
                        <Slider
                            value={this.state.value}
                            onValueChange={value => this.setState({ value })}
                            maximumValue={10}
                            minimumValue={0}
                            step={1}
                        />
                    </View>
                </View>
                <View style={{
                    height: Dimensions.get('screen').width / 4,
                    marginVertical: 10,
                    backgroundColor: "white",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row"
                }}>
                    <Text style={{ fontSize: 16, }}>
                        So tien thanh toan
                    </Text>
                    <Text style={{ fontSize: 24 }}>
                        10.000 VND
                    </Text>
                </View>
                <View style={{
                    height: Dimensions.get('screen').width / 4,
                    marginVertical: 10,
                    // backgroundColor: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row"
                }}>
                    <Button
                        title="XAC NHAN DON HANG"
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: "100%",
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        backgroundColor: '#F5FCFE',
    },
    containerFlatList: {
        flex: 1,
        // width: "100%",
        // flexDirection: "row",
        // backgroundColor: "blue"
    }
});

// export default class PhoneCard extends Component {
//     render() {
//         return (
//             <ScrollView>
//                 {this.renderFlatList('red')}
//                 {this.renderFlatList('green')}
//                 {this.renderFlatList('purple')}
//                 {this.renderFlatList('pink')}
//             </ScrollView>
//         );
//     }

//     getRandomData = () => {
//         return new Array(100).fill('').map((item, index) => {
//             return { title: 'Title ' + (index + 1) };
//         });
//     };

//     renderFlatList = (color) => {
//         return (
//             <FlatList
//                 data={this.getRandomData()}
//                 backgroundColor={color}
//                 maxHeight={200}
//                 maxWidth={200}
//                 marginBottom={50}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem={({ item }) => <Text>{item.title}</Text>}
//             />
//         );
//     }
// }