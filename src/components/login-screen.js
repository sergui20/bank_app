import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

import Container from './common/container';
import Card from './common/card';
import CardSection from './common/card-section';
import Button from './common/button';
import Header from './common/header';

class LoginScreen extends Component {
    static navigationOptions  = {
        header: null
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />

                <Container>
                    <Card>
                        <CardSection>
                            <Text>Email: </Text>
                            <TextInput style={styles.inputStyle} />
                        </CardSection>

                        <CardSection>
                            <Text>Password: </Text>
                            <TextInput style={styles.inputStyle}secureTextEntry />
                        </CardSection>

                        <Button buttonText="Iniciar Sesion" onPress={() => this.props.navigation.navigate('MainScreen')} />
                    </Card>
    
                    <View style={styles.registrationSection}>
                        <Text style={{fontSize: 15}}>¿Usuario nuevo?</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
                            <Text style={{fontSize: 15, fontWeight: "bold"}}> Registrese</Text>
                        </TouchableOpacity>
                    </View>
                </Container>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },  
    inputStyle: {
        height: 40
    },
    registrationSection: {
        flexDirection: 'row',
        marginTop: 10
    }
});

export default LoginScreen;