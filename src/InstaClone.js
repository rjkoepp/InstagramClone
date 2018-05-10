import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

class InstaClone extends Component {

    render() {

        return (

            <View stlye = {{ flex: 1, width: 100+"%", height: 100+"%"}}>

                <View style = {styles.tempNav}>
                    <Text>Instagram</Text>
                </View>

                <View style = {styles.userBar}>

                    {/*aligns items along center of horizontal*/}
                    <View style = {{flexDirection: "row", alignItems: "center"}}>
                        <Image

                            style = {styles.userPic}
                            source = {{
                                uri:
                                    "https://lh3.googleusercontent.com/aN3G5IDpx3AY1eYnkeBIfsuokBGKn_waVQmlf94-S4QaBVbXW53vF8ocCJ0W3ST3i6X2q0BNrSmVbuKL4JpHdLqS"

                            }}

                        />
                        <Text> Robert </Text>
                    </View>

                </View>



                <Image
                    style = {{width: 100 + "%", height: 100}}
                    source= {{
                        uri:
                            "https://lh3.googleusercontent.com/ipcN07_zb9fZ_F3R84YU1Iw2EybnJxVh0jkW9LgqmlPcT6zosNz7-R8vpVRpjtl3j6YxKpB2AcXur8gvkFy4Ucm3Zw"
                }}
                />

            </View>

    )
}
}
const styles = StyleSheet.create({

    tempNav: {
        width: 100+ "%",
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
        width: 100+"%",
        height: 50,
        backgroundColor: "rgb(255, 255, 255)",
        flexDirection: "row",

    },

    userPic: {
        height: 40,
        width: 40,
        borderRadius: 20,
    }

});
export default InstaClone;