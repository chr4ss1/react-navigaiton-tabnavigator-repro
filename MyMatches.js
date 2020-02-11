import React from 'react';
import {View, Text} from 'react-native';

export default class MyMatches extends React.Component {

    static navigationOptions = {
        header: null,
    };

    componentDidMount () {
        setTimeout(() => this.props.navigation.navigate('ReportAndUnmatchWhatDoYouWantToDoModal', {
            WHAT: 10,
        }),
        5000);
    }

    render () {

        return <View><Text>hi am gonna open up modal in 5 seconds</Text></View>
    }
}