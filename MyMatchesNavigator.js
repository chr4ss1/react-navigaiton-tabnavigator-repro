import MyMatchesScreen from './MyMatches';
import { createCompatNavigatorFactory } from '@react-navigation/compat';
import { createStackNavigator } from '@react-navigation/stack';

const MyMatchesStackNavigator = createCompatNavigatorFactory(createStackNavigator)({
  MyMatches: MyMatchesScreen,
}, {
      initialRouteName: 'MyMatches',
      defaultNavigationOptions: {
        headerShown: false
    },
  });

export default MyMatchesStackNavigator;