import React, {Component} from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    Platform,
} from 'react-native';
import {connect} from "react-redux";
import {
    createBottomTabNavigator,
    createDrawerNavigator
} from "react-navigation";
import {bindActionCreators} from "redux";
import ScreenUtil from '../../utils/ScreenUtil';
import News from './News';
import Treaty from './Treaty';
import Service from './Service';
import Consultation from './Consultation';
import DrawerComponent from "./Drawer";

const {width, height} = Dimensions.get('window');

const tabBarOptions = {
    showIcon: true,     //android默认false
    activeTintColor: '#0a53cc',
    inactiveTintColor: '#585858',
    indicatorStyle: {
        height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
    },
    style: {
        height: ScreenUtil.scaleSize(96),
        backgroundColor: '#FFFFFF',
        border: 0,
        borderWidth: 0,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'rgba(145,145,145,0.3)',
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 10,
    },
    labelStyle: {
        fontSize: ScreenUtil.setSpText(5.5),
        ...Platform.select({
            ios: {
                marginBottom: ScreenUtil.scaleSize(9),
                //marginTop: ScreenUtil.scaleSize(20),
            },
            android: {
                marginTop: ScreenUtil.scaleSize(0),
                marginBottom: ScreenUtil.scaleSize(5),
            }
        })
    },
    iconStyle: {
        width: ScreenUtil.scaleSize(55),
        height: ScreenUtil.scaleSize(50),
        ...Platform.select({
            android: {
                marginTop: ScreenUtil.scaleSize(-6),
            }
        })
    }
};

const Tabs = createBottomTabNavigator(
    {
        News: News,
        Treaty: Treaty,
        Service: Service,
        Consultation: Consultation
    }, {
        tabBarOptions: tabBarOptions,
        animationEnabled: false, // 切换页面时是否有动画效果
        tabBarPosition: 'bottom',   //底部显示
        swipeEnabled: false,    //是否滑动切换tab
        backBehavior: 'none'
    }
);

//Drawer
const Drawer = createDrawerNavigator({
    Home: {
        screen: Tabs
    }
}, {
    initialRouteName: 'Home',
    contentComponent: DrawerComponent,
    drawerWidth: width * 2 / 3,
    drawerPosition: 'left',
    contentOptions: {
        itemsContainerStyle: {
            marginVertical: 0,
        },
        iconContainerStyle: {
            opacity: 1
        }
    },
});

class MainScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Drawer/>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        state: state.MainScreen,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
