import React from 'react';
import {View, Text} from 'react-native';

export default class MyMatches extends React.Component {

    static navigationOptions = {
        header: null,
    };

    componentDidMount () {
        alert(JSON.stringify(this.props.navigation, null, 4))
    }

    render () {

        return <View><Text>hi am modal</Text></View>
    }
}