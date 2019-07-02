import { createStackNavigator } from 'react-navigation';

import Home from '../../screens/home/Home';
// import XoneRadio from '../../screens/xoneradio/XoneRadio';
// import Schedule from '../../screens/xoneradio/Schedule'
// import XoneTV from '../../screens/xonetv/XoneTV';
// import News from '../../screens/news/News';
// import SignOut from '../../screens/SignOut/SignOutScreen'

export const HomeStack = createStackNavigator(
    {
        Home: {
            screen: Home
        }
    }
);

// export const XoneRadioStack = createStackNavigator(
//     {
//         XoneRadio: {
//             screen: XoneRadio
//         },
//         Schedule: {
//             screen: Schedule
//         },
//     }
// );

// export const XoneTVStack = createStackNavigator(
//     {
//         XoneTV: {
//             screen: XoneTV
//         }
//     }
// );

// export const NewsStack = createStackNavigator(
//     {
//         News: {
//             screen: News
//         }
//     }
// );

// export const SignOutStack = createStackNavigator(
//     {
//         SignOut: {
//             screen: SignOut
//         }
//     }
// );