import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Icon } from 'react-native-elements'


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
                        <Text style={{ fontSize: 14, textAlign: "center" }}>Lê Hoàng Vũ</Text>
                        <Text style={{ fontSize: 10, textAlign: "center" }}>0971196061</Text>
                    </View>
                    <View style={{
                        height: 40,
                        width: "10%",
                        marginVertical: 5,
                        // marginHorizontal: 5,
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
                <View style={{
                    height: 50,
                    width: "100%",
                    backgroundColor: "#f5f5f5",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginVertical: 10
                }}>
                    <View style={{
                        height: '100%',
                        width: '10%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Icon
                            name="cog"
                            type="font-awesome"
                            color="#a7a7a7"
                            size={20}
                        />
                    </View>
                    <View style={{
                        height: '100%',
                        width: '80%',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',

                    }}>
                        <Text style={{ width: '100%', fontWeight: 'bold' }}>
                            Thiết lập bảo vệ tài khoản
                        </Text>
                    </View>
                    <View style={{
                        height: '100%',
                        width: '10%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Icon
                            name="chevron-right"
                            type="font-awesome"
                            color="#a7a7a7"
                            size={16}
                        />
                    </View>
                </View><View style={{
                    height: 50,
                    width: "100%",
                    backgroundColor: "#f5f5f5",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginVertical: 10
                }}>
                    <View style={{
                        height: '100%',
                        width: '10%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Icon
                            name="cog"
                            type="font-awesome"
                            color="#a7a7a7"
                            size={20}
                        />
                    </View>
                    <View style={{
                        height: '100%',
                        width: '80%',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',

                    }}>
                        <Text style={{ width: '100%', fontWeight: 'bold' }}>
                            Thiết lập bảo vệ tài khoản
                        </Text>
                    </View>
                    <View style={{
                        height: '100%',
                        width: '10%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 10
                    }}>
                        <Icon
                            name="chevron-right"
                            type="font-awesome"
                            color="#a7a7a7"
                            size={16}
                        />
                    </View>
                </View>
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