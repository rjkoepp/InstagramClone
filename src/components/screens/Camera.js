import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Camera extends Component {

    login() {

        // Navigate to Main app
        this.props.navigation.navigate('main'); // use key, nagivation prop is given by higher order component

    }
    render() {
        return (
            <TouchableOpacity
                style={{ height: 100 + '%', width: 100 + '%', flex: 1, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => { this.login() }}
            >
                <Text> Future Camera </Text>
            </TouchableOpacity>
        )
    }

}

export default Camera;
