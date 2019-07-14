import React from 'react';
import { View, StyleSheet } from 'react-native';

function CardSection(props) {
    return (
        <View style={[styles.cardSectionStyle, props.styles]}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    cardSectionStyle: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})

export default CardSection;
