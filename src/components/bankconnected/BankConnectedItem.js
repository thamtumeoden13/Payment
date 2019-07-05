import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    ImageBackground,
    View,
    Image,
} from 'react-native';
import { isTemplateElement } from '@babel/types';

export const BankConnectedItem = (props) => {
    console.log('props', props.thumbnail)
    return (
        <TouchableOpacity>
            <View style={[styles.rowContainer, { backgroundColor: props.backgroundColor }]}>
                <View style={{ width: '100%', height: 80, }}>
                    {/* <ImageBackground source={{ uri: props.thumbnail }}
                        style={styles.thumbnail}
                    // resizeMode="cover"
                    > */}
                    <View style={styles.rowLogo}>
                        <Image
                            source={props.logo}
                            resizeMode="cover"
                            style={styles.imageLogoBank}
                        />
                    </View>
                    <View style={styles.rowNumberSerial}>
                        <Text style={styles.author} numberOfLines={1} ellipsizeMode={'tail'}>
                            {props.author}
                        </Text>
                    </View>
                    {/* </ImageBackground> */}
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        height: 100,
        width: 350,
        padding: 10,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 4,
        shadowOffset: { width: 1, height: 1, },
        shadowColor: '#CCC',
        shadowOpacity: 1.0,
        shadowRadius: 1,
        backgroundColor: '#5fbc90'
    },
    title: {
        paddingLeft: 10,
        paddingTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#777'
    },
    author: {
        paddingLeft: 10,
        marginTop: 5,
        fontSize: 20,
        color: '#777'
    },
    thumbnail: {
        flex: 1,
    },
    rowLogo: {
        height: '60%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    rowNumberSerial: {
        height: '40%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    imageLogoBank: {
        height: '90%',
        width: '40%',
    }
});