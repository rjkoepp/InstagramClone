import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { createSwitchNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { MainFeed, Login, Camera, Profile, Register } from './components/screens';

const Tabs = createBottomTabNavigator({
    feed: MainFeed,
    camera: Camera,
    profile: Profile

});

const IntroStack = createStackNavigator({
    login: Login,
    register: Register
})

const MainStack = createSwitchNavigator({
    intro: IntroStack,
    main: Tabs,
});

class InstaClone extends Component {
    render() {
        return (
            // <MainFeed />
            <MainStack />
        );
    }
}


export default InstaClone;