/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import store from './app/redux/store';
import {Provider} from 'react-redux';
import ReduxNavigation from './app/containers/ReduxNavigation';

class Root extends Component {
    render() {
        return (
            //store覆盖整改项目
            <Provider store={store}>
                <ReduxNavigation/>
            </Provider>
        )
    }
}

AppRegistry.registerComponent(appName, () => Root);
