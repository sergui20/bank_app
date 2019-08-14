import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { withNavigation } from 'react-navigation'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function AccountHeader (props) {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}><FontAwesome name="bars" size={30}></FontAwesome></TouchableOpacity>
            <Image style={styles.headerLogo} source={require('../../images/logo.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 60,
        paddingHorizontal: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerLogo: {
        height: 60,
        resizeMode: 'contain',
        marginLeft: 85
    }
})

export default withNavigation(AccountHeader);