import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import config from '../../config';


class Post extends Component {


    // bc state does not initially exist, set value in constructor

    constructor() {
        super();
        this.state = {
            screenWidth: Dimensions.get("window").width,
            liked: false
        };
    }

    likeToggled() {
        this.setState({
            liked: !this.state.liked
        })
    }

    render() {

        const imageHeight = Math.floor(this.state.screenWidth * 1.1);
        // calculate image URI, append cropping param

        const imageSelection = (this.props.id % 2 == 0) ? 'https://lh3.googleusercontent.com/BLN7srZLtuIwMiBpub05_ve1T0LLmEXoWNtR0fVKKXgi9865QtukmpYe-zmtbxJ8c14gZ1GbH1zl-kGP8ZCXsnM1k7M' : "https://lh3.googleusercontent.com/ipcN07_zb9fZ_F3R84YU1Iw2EybnJxVh0jkW9LgqmlPcT6zosNz7-R8vpVRpjtl3j6YxKpB2AcXur8gvkFy4Ucm3Zw"
        const imageUri = imageSelection
            + "=s" + imageHeight + '-c'

        const heart = (this.state.liked) ? config.images.filledHeartIcon : config.images.heartIcon;

        return (

            <View>

                <View style={styles.userBar}>
                    {/*aligns items along center of horizontal*/}
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image
                            style={styles.userPic}
                            source={{
                                uri: "https://lh3.googleusercontent.com/aN3G5IDpx3AY1eYnkeBIfsuokBGKn_waVQmlf94-S4QaBVbXW53vF8ocCJ0W3ST3i6X2q0BNrSmVbuKL4JpHdLqS"
                            }}
                        />
                        <Text style={{ marginLeft: 10 }}> Robert </Text>
                    </View>
                    <View style={{ alignItems: "center" }}> {/* doesn't seem to matter */}
                        <Text style={{ fontSize: 30 }}>...</Text>
                    </View>
                </View>

                <TouchableOpacity
                    activeOpacity={.9}
                    onPress={() => {
                        this.likeToggled();
                    }}
                >
                    <Image
                        style={{ width: this.state.screenWidth, height: 400 }}
                        source={{
                            uri: imageUri
                        }}
                    />
                </TouchableOpacity>
                <View style={styles.iconBar}>

                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                        <TouchableOpacity
                            activeOpacity={.9}
                            onPress={() => {
                                this.likeToggled();
                            }}
                        >
                            <Image style={styles.icon} source={heart} />
                        </TouchableOpacity>
                        <Image style={styles.icon} source={config.images.chatIcon} />
                        <Image style={styles.icon} source={config.images.sendIcon} />
                    </View>

                    <View style={{ alignItems: "center", marginRight: 10 }}>
                        <Image style={styles.icon} source={config.images.saveIcon} />
                    </View>
                </View>

                <View style={styles.iconBar}>
                    {/* <Image style={[styles.icon, { height: 20, width: 20 }]} source={config.images.heartIcon} /> */}
                    <Text style={{ marginLeft: 10 }}> 123,145 likes </Text>

                </View>

            </View >

        )
    }
}
const styles = StyleSheet.create({

    tempNav: {
        width: 100 + "%",
        height: 56,
        marginTop: 40,
        backgroundColor: "rgb(250, 250, 250)",
        borderBottomColor: "rgb(233, 233, 233)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        // by default flex box is directionally in columns
        justifyContent: "center",
        alignItems: "center",
    },

    userBar: {
        width: 100 + "%",
        height: config.styleConstants.rowHeight,
        backgroundColor: "rgb(255, 255, 255)",
        flexDirection: "row",
        // left and right padding
        paddingHorizontal: 10,
        justifyContent: "space-between"
    },

    userPic: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    iconBar: {
        height: config.styleConstants.rowHeight,
        width: 100 + "%",
        borderColor: "rgb(233, 233, 233)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"

    },
    icon: {
        height: 30,
        width: 30,
        marginLeft: 10
    },
    commentBar: {
        height: config.styleConstants.rowHeight,
        width: 100 + "%",
        borderColor: "rgb(233, 233, 233)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
    }

});
export default Post;