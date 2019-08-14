import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get('window')

function UserInfo () {
    return (
        <View style={styles.userInfoContainer}>
            <FontAwesome name="user" size={30}></FontAwesome>
            <Text style={{fontWeight: 'bold'}}> Gabriel Eduardo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    userInfoContainer: {
        width: width - 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    }
})

export default UserInfo;