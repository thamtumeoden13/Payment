import React from 'react'
import {
    createBottomTabNavigator,
} from 'react-navigation';

import { Icon } from 'react-native-elements';

import {
    HomeStack,
    // XoneRadioStack, XoneTVStack, NewsStack, SignOutStack
} from '../stackNavigator'

export const Tabs = createBottomTabNavigator(
    {
        // XoneRadio: {
        //     screen: XoneRadioStack,
        //     navigationOptions: {
        //         tabBarLabel: 'Xone Radio',
        //         tabBarIcon: ({ tintColor }) => <Icon name="radio" type="entypo" size={28} color={tintColor} />
        //     },
        // },
        // XoneTV: {
        //     screen: XoneTVStack,
        //     navigationOptions: {
        //         tabBarLabel: 'Xone Tv',
        //         tabBarIcon: ({ tintColor }) => <Icon name="tv" type="entypo" size={28} color={tintColor} />
        //     },
        // },
        Home: {
            screen: HomeStack,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => <Icon name="home" type="entypo" size={28} color={tintColor} />
            },
        },
        // News: {
        //     screen: NewsStack,
        //     navigationOptions: {
        //         tabBarLabel: 'News',
        //         tabBarIcon: ({ tintColor }) => <Icon name="news" type="entypo" size={28} color={tintColor} />
        //     },
        // },
        // SignOut: {
        //     screen: SignOutStack,
        //     navigationOptions: {
        //         tabBarLabel: 'SignOut',
        //         tabBarIcon: ({ tintColor }) => <Icon name="log-out" type="entypo" size={28} color={tintColor} />
        //     },
        // }
    },
    {
        initialRouteName: 'Home'
    }
);
Tabs.navigationOptions = {
    // Hide the header from AppNavigator stack
    header: null,
};