
import {
    createStackNavigator,
} from 'react-navigation';
import { Tabs } from './bottomTabNavigator'


export const AppStack = createStackNavigator(
    {
        Tabs: {
            screen: Tabs,
            navigationOptions: ({ navigation }) => ({
                gesturesEnabled: false,
            })
        }
    }
);