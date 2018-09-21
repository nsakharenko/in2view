'use strict';

import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {LinearGradient} from "expo";

import config from '../utils/constants';

export default class MainComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            iconSize: 198
        };

        this.onLogin = this.onLogin.bind(this);
    }

    static navigationOptions = {
        header: null,
    };

    onLogin() {
        this.props.navigation.navigate('Camera');
    }

    render() {
        return (
            <LinearGradient
                colors={config.gradient}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: '100%',
                    flex: 1
                }}
            >
                <View style={styles.container}>
                    <Text style={{
                        color: 'white',
                        paddingTop: 50,
                        fontSize: 28
                    }}
                    >
                        Scan Now
                    </Text>

                    <Text style={{
                        color: 'white',
                        paddingTop: 50,
                        fontSize: 18
                    }}
                    >
                        Tap to start
                    </Text>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: this.state.iconSize,
                            height: this.state.iconSize,
                            borderRadius: 100,
                        }}

                        onPress={this.onLogin}
                    >

                        {/*<Ionicons name="ios-camera-outline" size={this.state.iconSize} color="green"/>*/}
                        <Image source={require('../assets/images/camera.png')}
                               style={{width: this.state.iconSize, height: this.state.iconSize}}/>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1}}/>

            </LinearGradient>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});