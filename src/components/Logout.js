import React, {Component} from 'react';
import {Text} from 'react-native'
import {withNavigation} from 'react-navigation';

class Logout extends Component {
    componentDidMount() {
        this.props.navigation.navigate('AuthScreen')
    }

    render() {
        return (
            <Text>Loader...</Text>
        )
    }
}

export default withNavigation(Logout)