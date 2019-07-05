import { createStackNavigator } from 'react-navigation';

import Home from '../../screens/home';
import Wallet from '../../screens/wallet';
import BankConnected from '../../screens/bankconnected'

import History from '../../screens/history';
import HistoryDetail from '../../screens/history/HistoryDetail'
import Gift from '../../screens/gift'

import Profile from '../../screens/profile';


export const HomeStack = createStackNavigator(
    {
        Home: Home,
        Wallet: Wallet,
        BankConnected: BankConnected
    }
);

HomeStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
};

export const HistoryStack = createStackNavigator(
    {
        History: History,
        HistoryDetail: HistoryDetail
    }
);

HistoryStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
};

export const GiftStack = createStackNavigator(
    {
        Gift: Gift
    }
);

export const ProfileStack = createStackNavigator(
    {
        Profile: Profile
    }
);