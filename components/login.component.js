'use strict';

import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {LinearGradient} from 'expo';

import config from '../utils/constants';

export default class LoginComponent extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);

        this.state = {};

        this.onLogin = this.onLogin.bind(this);
    }

    onLogin() {
        this.props.navigation.navigate('Home');
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
                    <Image source={require('../assets/images/logo.png')} style={{marginTop: 100, marginBottom: 50}}/>
                    <Text style={styles.text}>
                        Welcome to
                    </Text>
                    <Text style={styles.text}>
                        PLAYBUZZ.TV!
                    </Text>
                </View>
                <View style={styles.container}>

                    <TextInput width="50%" style={styles.input} placeholder={"nazar.sakharenko@playbuzz.com"} keyboardType="email-address"/>
                    <TextInput width="50%" secureTextEntry={true} style={styles.input} placeholder={"**********"}/>

                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '40%',
                            height: 50,
                            borderRadius: 50,
                            backgroundColor: '#FFFFFF'
                        }}

                        onPress={this.onLogin}
                    >
                        <Text>LOGIN</Text>
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 36,
        color: 'white'
    },
    input: {
        padding: 5,
        marginBottom: 20
    },
});
