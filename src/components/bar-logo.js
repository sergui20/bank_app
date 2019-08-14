import React from 'react';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function BarLogo(props) {
    return (
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}><FontAwesome name="bars" size={30}></FontAwesome></TouchableOpacity>
    )
}

export default withNavigation(BarLogo);
