import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Container from './common/container';
import AccountHeader from './common/AccountHeader';
import UserInfo from './common/UserInfo';
import Card from './common/card';
import CardSection from './common/card-section';

class SavingsAccount extends Component {
    static navigationOptions = {
        title: 'Cuenta de ahorros'
    }

    render() {
        return (
            <Fragment>
                <AccountHeader />

                <Container styles={{justifyContent: 'flex-start', marginTop: 30}}>
                    <UserInfo />
                    <Card styles={{marginBottom: 10}}>
                        <CardSection>
                            <Text style={styles.cardMainText}>Cuenta de ahorros #10XXX78</Text>
                        </CardSection>

                        <CardSection styles={{borderBottomWidth: 0}}>
                            <View style={styles.balanceContainer}>
                                <Text style={{fontWeight: 'bold'}}>Disponible: </Text>
                                <Text>$1500.00</Text>
                            </View>
                        </CardSection>

                        <CardSection styles={{borderBottomWidth: 0}}>
                            <View style={styles.balanceContainer}>
                                <Text style={{fontWeight: 'bold'}}>Saldo Total: </Text>
                                <Text>$1500.00</Text>
                            </View>
                        </CardSection>
                    </Card>

                    <Card>
                        <CardSection>
                            <Text style={styles.cardMainText}>Ultimos movimientos: </Text>
                        </CardSection>

                        <CardSection styles={{flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}}>
                            <View>
                                <Text style={{fontWeight: 'bold'}}>Compra de Amazon </Text>
                                <Text style={{fontWeight: 'bold', color: 'red', fontSize: 11}}>Pendiente</Text>
                                <Text>08/11/2019</Text>
                            </View>

                            <View>
                                <Text style={{fontSize: 20}}>$50.00</Text>
                            </View>
                        </CardSection>

                        <CardSection styles={{flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}}>
                            <View>
                                <Text style={{fontWeight: 'bold'}}>Gasolinera Primax</Text>
                                <Text style={{fontWeight: 'bold', color: 'green', fontSize: 11}}>Completada</Text>
                                <Text>08/05/2019</Text>
                            </View>

                            <View>
                                <Text style={{fontSize: 20}}>$20.00</Text>
                            </View>
                        </CardSection>
                    </Card>
                </Container>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    balanceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardMainText: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default SavingsAccount;
