import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

function Button(props) {
    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
            <Text style={styles.buttonText}>{props.buttonText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#72732f',
        paddingVertical: 10
    },
    buttonText: {
        color: "white", 
        textAlign: "center",
        fontSize: 16
    }
})

export default Button;
