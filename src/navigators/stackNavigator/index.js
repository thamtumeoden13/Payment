import { createStackNavigator } from 'react-navigation';

import Home from '../../screens/home';
import History from '../../screens/history';
import Gift from '../../screens/gift'
import Profile from '../../screens/profile';
// import News from '../../screens/news/News';
// import SignOut from '../../screens/SignOut/SignOutScreen'

export const HomeStack = createStackNavigator(
    {
        Home: {
            screen: Home
        }
    }
);

export const HistoryStack = createStackNavigator(
    {
        History: {
            screen: History
        }
    }
);

export const GiftStack = createStackNavigator(
    {
        Gift: {
            screen: Gift
        }
    }
);

export const ProfileStack = createStackNavigator(
    {
        Profile: {
            screen: Profile
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