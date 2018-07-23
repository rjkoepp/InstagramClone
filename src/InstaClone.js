import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { createSwitchNavigator, TabNavigator } from 'react-navigation';
import { MainFeed, Login } from './components/screens';

const MainStack = createSwitchNavigator({
    login: Login,
    main: MainFeed
})


class InstaClone extends Component {
    render() {
        return (
            // <MainFeed />
            <MainStack />
        );
    }
}


export default InstaClone;