
import React from 'react';
import { StyleSheet, View } from 'react-native'

import { HeaderTop } from './HeaderTop'
import { Content } from './Content'

export const Search = () => {

    return (
        <View style={styles.container}>
            <HeaderTop />
            <Content />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
    },
})