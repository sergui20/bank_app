import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

function Card(props) {
    return (
        <View style={styles.cardStyle}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        // borderWidth: 1,
        // borderRadius: 2,
        borderColor: '#ddd',
        shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.1,
        // shadowRadius: 2,
        elevation: 3,
        width: width - 20,
        padding: 10
    }
})

export default Card;
