
import ReportAndUnmatchWhatDoYouWantToDoModal from './ReportAndUnmatchWhatDoYouWantToDoModal';
import { createCompatNavigatorFactory } from '@react-navigation/compat';
import { createStackNavigator } from '@react-navigation/stack';

const ReportAndUnmatchWhatDoYouWantToDoModalNavigator = createCompatNavigatorFactory(createStackNavigator)({
  ReportAndUnmatchWhatDoYouWantToDoModal: ReportAndUnmatchWhatDoYouWantToDoModal,
}, {
  initialRouteName: 'ReportAndUnmatchWhatDoYouWantToDoModal',
  defaultNavigationOptions: {
    headerShown: false,
  },
});

export default ReportAndUnmatchWhatDoYouWantToDoModalNavigator;