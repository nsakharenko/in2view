import React from 'react';
import {createStackNavigator} from 'react-navigation';

import MainComponent from './components/main.component';
import LoginComponent from "./components/login.component";
import CameraComponent from "./components/camera.component";
import ResultComponent from "./components/result.component";
import ActionComponent from "./components/action.component";

const RootStack = createStackNavigator(
    {
        Home: {
            screen: MainComponent
        },
        Login: {
            screen: LoginComponent
        },
        Camera: {
            screen: CameraComponent
        },
        Result: {
            screen: ResultComponent
        },
        Action: {
            screen: ActionComponent
        }
    },
    {
        initialRouteName: 'Login',
    }
);

export default class App extends React.Component {

    render() {
        return <RootStack/>;

    }
}
