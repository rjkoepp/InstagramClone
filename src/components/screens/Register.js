import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button, StyleSheet } from 'react-native';

class Register extends Component {

    register() {

        // send credentials to server if signup === success
        this.props.navigation.navigate('main'); // use key, nagivation prop is given by higher order component
        // else, error 
    }
    render() {
        return (
            <View
                style={{ height: 100 + '%', width: 100 + '%', flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff5ee' }}
            >
                <Text> Register Page</Text>
                <TextInput placeholder="USERNAME" style={styles.input} />
                <TextInput secureTextEntry={true} placeholder="PASSWORD" style={styles.input} />
                <Button onPress={() => { this.register(); }} title='Signup' />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 70 + '%',
        paddingHorizontal: 0,
        backgroundColor: 'white',
        marginBottom: 10
    }
})
export default Register;