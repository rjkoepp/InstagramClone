import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { createSwitchNavigator, TabNavigator } from 'react-navigation';
import { MainFeed, Login, Camera, Profile } from './components/screens';

const Tabs = TabNavigator({
    feed: MainFeed,
    camera: Camera,
    profile: Profile

})


const MainStack = createSwitchNavigator({
    login: Login,
    main: Tabs,
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