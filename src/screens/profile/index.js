import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Icon } from 'react-native-elements'

import { CommonItem}  from "../../components/commonItemofList"

export default class Profile extends Component {
    static navigationOptions = {
        title: 'Cá nhân'
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    height: 50,
                    width: "100%",
                    backgroundColor: "#f5f5f5",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginVertical: 10
                }}>
                    <View style={{
                        height: 40,
                        width: "10%",
                        backgroundColor: "yellow",
                        borderRadius: 20,
                        marginVertical: 5,
                        marginHorizontal: 5,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Text>Logo</Text>
                    </View>
                    <View style={{
                        height: 40,
                        width: "75%",
                        marginVertical: 5,
                        justifyContent: "center",
                        alignItems: "flex-start",
                        paddingHorizontal: 5
                    }}>
                        <Text style={{ fontSize: 14, textAlign: "center", fontWeight: '400' }}>Lê Hoàng Vũ</Text>
                        <Text style={{ fontSize: 10, textAlign: "center" }}>0971196061</Text>
                    </View>
                    <View style={{
                        height: 40,
                        width: "10%",
                        marginVertical: 5,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Icon
                            name="chevron-right"
                            type="font-awesome"
                            color="#a7a7a7"
                            size={16}
                        />
                    </View>
                </View>
                <CommonItem
                    title={"Thiết lập bảo vệ tài khoản"}
                    leftIconName={"cog"}
                    leftIconType={"font-awesome"}
                    leftIconColor={"#a7a7a7"}
                    leftIconSize={20}
                    rightIconName={"chevron-right"}
                    rightIconType={"font-awesome"}
                    rightIconColor={"#a7a7a7"}
                    rightIconSize={16}
                />
                <CommonItem 
                    title={"Ngân hàng"} 
                    leftIconName={"credit-card-plus"}
                    leftIconType={"material-community"}
                    leftIconColor={"#a7a7a7"}
                    leftIconSize={20}
                    rightIconName={"chevron-right"}
                    rightIconType={"font-awesome"}
                    rightIconColor={"#a7a7a7"}
                    rightIconSize={16}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});