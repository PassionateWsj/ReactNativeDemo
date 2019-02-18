import React, {Component} from 'react';
import {
    BackHandler,
    ToastAndroid,
    Platform
} from 'react-native';
import {connect} from 'react-redux';
import AppWithNavigationState from './AppNavigator';
import * as types from "../constant/ActionTypes";

let lastBackPressed = null;

class ReduxNavigation extends Component {
    componentWillMount() {
        console.disableYellowBox = true;
        console.warn('YellowBox is disabled.');

        if (Platform.OS === 'ios') return;
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }

    componentWillUnmount() {
        lastBackPressed = null;

        if (Platform.OS === 'ios') return;
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    onBackPress = () => {
        const {dispatch, nav} = this.props;
        if (nav.index === 0) {
            let dateNow = (new Date()).valueOf();
            if (lastBackPressed && lastBackPressed + 2000 >= dateNow) {
                return false;
            }
            lastBackPressed = dateNow;
            ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
            return true;
        }

        dispatch({type: types.BACK});
        return true;
    };

    render() {
        return (
            <AppWithNavigationState state={this.props.nav} dispatch={this.props.dispatch}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        nav: state.nav
    }
};

// //将App交由redux控制
export default connect(mapStateToProps)(ReduxNavigation);
