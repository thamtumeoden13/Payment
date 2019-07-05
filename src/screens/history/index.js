import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SectionList,
} from 'react-native';
import { SearchBar, Icon } from 'react-native-elements'

import { dataHistory } from '../../constants/dataTest'

import { HistoryItem } from '../../components/history/HistoryItem'
export default class History extends Component {
    static navigationOptions = {
        // headerTitle: <Search />,
        // headerStyle: {
        //     height: 120,
        // }
        title: "Lịch sử"
    }
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
        this.gotoHistoryDetail = this.gotoHistoryDetail.bind(this)
    }

    _renderSectionHeader = ({ section }) => {
        return (
            <View style={styles.SectionListHeader}> 
                <Text style={styles.SectionListHeaderText}>
                    Tháng {section.month < 10 ? '0' + section.month : section.month}/{section.year}
                </Text>
            </View>
        )
    }

    _renderItem = ({ section, item, index }) => {
        return (
            <HistoryItem
                section={section}
                item={item}
                onPress={this.gotoHistoryDetail}
            />
        )
    }

    _keyExtractor = (item, index) => index;

    gotoHistoryDetail = (item) => {
        this.props.navigation.navigate('HistoryDetail')
    }

    render() {
        const { search } = this.state
        return (
            <View style={styles.container}>
                {/* <SearchBar
                    placeholder="Type Here..."
                    value={search}
                    inputContainerStyle={{ backgroundColor: '#EFF7FD' }}
                    inputStyle={{ color: 'black' }}
                    searchIcon={{ size: 24, color: 'black' }}
                    clearIcon={{ size: 24, color: 'red' }}
                    lightTheme={true}
                    containerStyle={{ width: '100%' }}
                /> */}
                <View style={styles.viewSectionList}>
                    <SectionList
                        sections={dataHistory}
                        renderSectionHeader={this._renderSectionHeader}
                        renderItem={this._renderItem}
                        keyExtractor={this._keyExtractor}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    SectionListHeader: {
        height: 30,
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: '#64B5F6',
    },
    SectionListHeaderText: {
        fontSize: 16,
        // padding: 5,
        color: '#fff',
        fontWeight: 'bold'
    },
    titleItem: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#000',
    },
    contentItem: {
        fontSize: 12,
        color: '#000',
    },
    viewHeader: {
        flex: 1,
        margin: 10,
        borderRadius: 4,
        shadowOffset: { width: 1, height: 1, },
        shadowColor: '#CCC',
        shadowOpacity: 1.0,
        shadowRadius: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewSectionList: {
        flex: 1,
        margin: 10,
        width: '100%'
    }
});