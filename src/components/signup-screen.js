import React, { Component } from 'react';
import { Text, Picker, TextInput, StyleSheet } from 'react-native';

import Container from './common/container';
import Card from './common/card';
import CardSection from './common/card-section';
import Button from './common/button';

class SignupScreen extends Component {
    static navigationOptions = {
        title: 'Regístrate'
    }

    render() {
        return (
            <Container>
                <Card>
                    <CardSection styles={styles.pickerContainer}>
                        <Text>Tipo de identificación: </Text>
                        <Picker style={{flex: 2}}>
                            <Picker.Item label="Cédula" value="Cedula" />
                            <Picker.Item label="Pasaporte" value="Pasaporte" />
                        </Picker>
                    </CardSection>

                    <CardSection>
                        <Text>Número de identificación</Text>
                        <TextInput />
                    </CardSection>

                    <CardSection>
                        <Text>Email: </Text>
                        <TextInput />
                    </CardSection>

                    <CardSection>
                        <Text>Contraseña</Text>
                        <TextInput secureTextEntry />
                    </CardSection>

                    <Button buttonText="Registrarse" />
                </Card>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    pickerContainer: {
        flexDirection: 'row',
        alignItems: "center"
    }
})

export default SignupScreen;