'use strict';

import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, TouchableOpacity, View, WebView} from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";


export default class ActionComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            uri: 'cad19e39-3a32-43e1-a12d-5d405a256d5f'
        };

        this.intervals = null;

        this.onBack = this.onBack.bind(this);
    }


    componentDidMount() {
        const start = Date.now();

        const content = [
            {
                timeout: 9 * 1000,
                ad: true
            },
            {
                timeout: 12 * 1000,
                id: '66103941-8b47-4c02-8324-1f9016ccb69f'
            },
            {
                timeout: 30 * 1000,
                id: 'fb2b6806-180b-4b82-aca2-0e7f0254af51'
            },
            {
                timeout: 45 * 1000,
                ad: true
            },
            {
                timeout: 50 * 1000,
                id: 'bdca6d23-fd36-4144-8dc6-c3283494d31f'
            },
            {
                timeout: 67 * 1000,
                id: '5b866ef0-b7f1-4a19-9616-b110ce45b2c1'
            },
            {
                timeout: 85 * 1000,
                id: '23e9caf8-de87-4cf0-89ee-0f3411b148bf'
            },
        ];

        this.intervals = content.map((item) => {
            return setTimeout(() => {
                console.log(item.id, item.timeout, (Date.now() - start) / 1000);
                console.log(item.ad, item.timeout, (Date.now() - start) / 1000);
                this.setState({
                    ad: item.ad,
                    uri: item.id
                })
            }, item.timeout);
        });
    }


    componentWillUnmount() {
        if (this.intervals) {
            this.intervals.forEach((i) => {
                console.log(`Interval ${i} was cleared`);
                clearInterval(i);
            });
        }
    }

    static navigationOptions = {
        header: null,
    };

    onBack() {
        this.props.navigation.navigate('Home');
    }

    render() {
        const source = {uri: `http://10.0.0.112:8080/?id=${this.state.uri}`};

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
                <View style={{flex: 2}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Image source={require('../assets/images/content/show_logo.png')} style={{
                            width: '100%', height: '100%'
                        }}/>
                    </View>
                    <View style={{
                        flex: 2,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        {
                            this.state.ad ?
                                <Image source={require('../assets/images/ads/image3.png')}
                                       style={{width: 311, height: 259}}/> :
                                <ScrollView style={{width: '100%'}}>
                                    <WebView source={source} style={{height: 1200}}/>
                                </ScrollView>
                        }

                    </View>
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
        flex: 1,
        flexDirection: 'row',
    },
});
