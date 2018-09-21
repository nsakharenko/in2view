import React, {Component} from 'react';
import {
    Alert,
    Dimensions,
    LayoutAnimation,
    Linking,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {BarCodeScanner, Permissions} from 'expo';

export default class CameraComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasCameraPermission: null
        };

        this.lastScannedUrl = null;
        this._handlePressCancel = this._handlePressCancel.bind(this);
    }

    static navigationOptions = {
        header: null,
    };

    componentDidMount() {
        this._requestCameraPermission();

        setTimeout(() => {
            this.props.navigation.navigate('Result', {url: ''});
        }, 3000);
    }

    _requestCameraPermission = async () => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermission: status === 'granted',
        });
    };

    _handleBarCodeRead = result => {
        if (false && result.data !== this.lastScannedUrl) {
            LayoutAnimation.spring();
            this.lastScannedUrl = result.data;

            this.props.navigation.navigate('Result', {url: result.data});
        }
    };

    render() {
        return (
            <View style={styles.container}>

                {this.state.hasCameraPermission === null
                    ? <Text>Requesting for camera permission</Text>
                    : this.state.hasCameraPermission === false
                        ? <Text style={{color: '#fff'}}>
                            Camera permission is not granted
                        </Text>
                        : <BarCodeScanner
                            onBarCodeRead={this._handleBarCodeRead}
                            style={{
                                height: Dimensions.get('window').height,
                                width: Dimensions.get('window').width,
                            }}
                        />}

                {this._maybeRenderUrl()}

                <StatusBar hidden/>
            </View>
        );
    }

    _handlePressCancel() {
        this.props.navigation.navigate('Home');
    };

    _maybeRenderUrl = () => {
        return (
            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.url} onPress={this._handlePressUrl}>
                    <Text numberOfLines={1} style={styles.urlText}>
                        {this.state.lastScannedUrl}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={this._handlePressCancel}>
                    <Text style={styles.cancelButtonText}>
                        Cancel
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 15,
        flexDirection: 'row',
    },
    url: {
        flex: 1,
    },
    urlText: {
        color: '#fff',
        fontSize: 20,
    },
    cancelButton: {
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButtonText: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 18,
    },
});


// import React from 'react';
// import { Text, View, TouchableOpacity } from 'react-native';
// import { Camera, Permissions } from 'expo';
//
// export default class CameraComponent extends React.Component {
//     state = {
//         hasCameraPermission: null,
//         type: Camera.Constants.Type.back,
//     };
//
//     async componentWillMount() {
//         const { status } = await Permissions.askAsync(Permissions.CAMERA);
//         this.setState({ hasCameraPermission: status === 'granted' });
//     }
//
//     render() {
//         const { hasCameraPermission } = this.state;
//         if (hasCameraPermission === null) {
//             return <View />;
//         } else if (hasCameraPermission === false) {
//             return <Text>No access to camera</Text>;
//         } else {
//             return (
//                 <View style={{ flex: 1 }}>
//                     <Camera style={{ flex: 1 }} type={this.state.type}>
//                         <View
//                             style={{
//                                 flex: 1,
//                                 backgroundColor: 'transparent',
//                                 flexDirection: 'row',
//                             }}>
//                             <TouchableOpacity
//                                 style={{
//                                     flex: 0.1,
//                                     alignSelf: 'flex-end',
//                                     alignItems: 'center',
//                                 }}
//                                 onPress={() => {
//                                     this.setState({
//                                         type: this.state.type === Camera.Constants.Type.back
//                                             ? Camera.Constants.Type.front
//                                             : Camera.Constants.Type.back,
//                                     });
//                                 }}>
//                                 <Text
//                                     style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
//                                     {' '}Flip{' '}
//                                 </Text>
//                             </TouchableOpacity>
//                         </View>
//                     </Camera>
//                 </View>
//             );
//         }
//     }
// }