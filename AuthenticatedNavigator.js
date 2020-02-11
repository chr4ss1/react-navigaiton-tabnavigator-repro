import AppTabsNavigator from './TabNavigator';
import { createSwitchNavigator } from '@react-navigation/compat';

const AppSwitchNavigator = createSwitchNavigator({
    MainTabs: AppTabsNavigator,
}, {
        initialRouteName: 'MainTabs',
    });

export default AppSwitchNavigator;