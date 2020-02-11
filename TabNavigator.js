import MyMatchesStackNavigator from './MyMatchesNavigator';
import ReportAndUnmatchWhatDoYouWantToDoModalNavigator from './ReportAndUnmatchWhatDoYouWantToDoModalNavigator';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createCompatNavigatorFactory } from '@react-navigation/compat';
import { createStackNavigator } from '@react-navigation/stack';

const AppTabsNavigator = createCompatNavigatorFactory(createStackNavigator)({

    MyMatches: createCompatNavigatorFactory(createMaterialTopTabNavigator)({
        MyMatches: MyMatchesStackNavigator,
    },
    {
        initialRouteName: 'MyMatches',
        swipeEnabled: false,
    }),


    ReportAndUnmatchWhatDoYouWantToDoModal: ReportAndUnmatchWhatDoYouWantToDoModalNavigator,

},
    {
        initialRouteName: 'MyMatches',

        defaultNavigationOptions: {
            headerShown: false
        },
    });

export default AppTabsNavigator;