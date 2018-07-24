import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button, StyleSheet } from 'react-native';

class Register extends Component {

    constructor() {
        super();
        this.state = {
            credentials: { // nested object
                login: '',
                password: ''
            }
        };
    }

    updateText(text, field) {

        let newCredentials = Object.assign(this.state.credentials); // bc trying to change state of nested object, need new object of original (otherwise references same object in memory and can't tell that it has changed)

        newCredentials[field] = text;
        this.setState({
            credentials: newCredentials // updates new object
        });
    }
    register() {

        alert(JSON.stringify(this.state.credentials))
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
                <TextInput
                    value={this.state.login}
                    onChangeText={(text) => this.updateText(text, 'login')}
                    placeholder="USERNAME"
                    autoCorrect={false}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={(text) => this.updateText(text, 'password')}
                    secureTextEntry={true}
                    autoCorrect={false}
                    placeholder="Password"
                    style={styles.input}
                />
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