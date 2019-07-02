import {
    createStackNavigator,
} from 'react-navigation';

import SignInScreen from '../screens/signin/SignInScreen';

export const AuthStack = createStackNavigator(
    {
        SignIn: SignInScreen  
    },
    {
        headerMode: "none",
    }
);