import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

function HeaderLogo() {
    return (
        <View style={styles.headerStyle}>
            <Image source={require('../../images/logo.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        marginTop: 20
    }
})

export default HeaderLogo;
