'use strict';

import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import config from '../utils/constants';
import {LinearGradient} from "expo";
import Ionicons from "@expo/vector-icons/Ionicons";

export default class ResultComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.onBack = this.onBack.bind(this);
        this.onAction = this.onAction.bind(this);
    }

    static navigationOptions = {
        header: null,
    };

    onBack() {
        this.props.navigation.navigate('Home');
    }

    onAction() {
        this.props.navigation.navigate('Action', {url: this.props.navigation.getParam('url', '')});
    }

    render() {
        return (
            <View
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: '100%',
                    flex: 1,
                    backgroundColor: 'white'
                }}
            >
                <View style={styles.topBar}>
                    <TouchableOpacity style={{flex: 1}} onPress={this.onBack}>
                        <Ionicons name="md-arrow-back" size={32} color="black"/>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 2, justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 25,
                }}>
                    <View style={{
                        marginTop: 65
                    }}>
                        <Image source={require('../assets/images/content/cover.png')}/>
                    </View>
                    <Text style={{
                        marginTop: 20,
                        width: '100%',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 28,
                        color: '#000000'
                    }}>The Bachelor</Text>
                    <Text style={{
                        width: '200%',
                        textAlign: 'center',
                        fontSize: 18,
                        color: '#000000'
                    }}>SEASON 22, EPISODE 05</Text>
                </View>
                <View style={{
                    flex: 1, justifyContent: 'center',
                    alignItems: 'center'
                }}>

                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '45%',
                            height: 60,
                            backgroundColor: '#FFFFFF'
                        }}
                        onPress={this.onAction}
                    >
                        <LinearGradient
                            colors={['rgb(203, 73, 255)','rgb(0,156, 255)']}
                            start={[0.0, 0.5]}
                            end={[1.0, 0.5]}
                            locations={[0.0, 1.0]}
                            style={{
                                height: '100%',
                                width: '100%',
                                borderRadius: 50,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Text style={{color: 'white'}}>LET'S GO</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 36,
        color: 'white'
    },
    input: {
        padding: 5,
        marginBottom: 20
    },
    topBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: 15,
        flexDirection: 'row',
    },
});
