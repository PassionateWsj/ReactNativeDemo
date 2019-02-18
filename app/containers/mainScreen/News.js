import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    Image,
    DeviceEventEmitter,
} from 'react-native';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {back} from './../../redux/actions/navigator/navigator';
import Message from "../../constant/Message";
import {CustomStyles} from '../../css/CustomStyles';
import {navigateToTestPage} from "../../redux/actions/navigator/navigator";

class News extends Component {

    static navigationOptions = {
        tabBarLabel: Message.NEWS_PAGE,
        tabBarIcon: ({tintColor, focused}) => (
            <Image
                source={focused ? require('../../img/mainScreen/tab_home_active.png') : require('../../img/mainScreen/tab_home.png')}
                style={CustomStyles.icon}
            />
        ),
    };

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>NewsPage</Text>
                <Button
                    title="Go TestPage"
                    onPress={() => {
                        this.props.navigateToTestPage();
                    }}
                />
                <Button
                    title="Open Drawer"
                    onPress={() => {
                        this.props.navigation.openDrawer();
                    }}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        state: state.News,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        back: back,
        navigateToTestPage: navigateToTestPage,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
