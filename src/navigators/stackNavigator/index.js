import { createStackNavigator } from 'react-navigation';

import Home from '../../screens/home';
import Wallet from '../../screens/wallet';
import BankConnected from '../../screens/bankconnected'
import PhoneCard from '../../screens/home/PhoneCard';


import History from '../../screens/history';
import HistoryDetail from '../../screens/history/HistoryDetail'
import Preferential from '../../screens/preferential'

import Profile from '../../screens/profile';


export const HomeStack = createStackNavigator(
    {
        Home: Home,
        Wallet: Wallet,
        BankConnected: BankConnected,
        PhoneCard: PhoneCard
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

export const PreferentialStack = createStackNavigator(
    {
        Preferential: Preferential
    }
);

export const ProfileStack = createStackNavigator(
    {
        Profile: Profile
    }
);