import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    Button,
} from 'react-native';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {back} from './../../redux/actions/navigator/navigator';
import Message from "../../constant/Message";
import {CustomStyles} from "../../css/CustomStyles";
import {navigateToTestPage} from "../../redux/actions/navigator/navigator";

class Service extends Component {

    static navigationOptions = {
        tabBarLabel: Message.SERVICE_PAGE,
        tabBarIcon: ({tintColor, focused}) => (
            <Image
                source={focused ? require('../../img/mainScreen/tab_find_active.png') : require('../../img/mainScreen/tab_find.png')}
                style={CustomStyles.icon}
            />
        ),
    };

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>ServicePage</Text>
                <Button
                    title="Go TestPage"
                    onPress={() => {
                        this.props.navigateToTestPage();
                    }}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        state: state.Service,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        back: back,
        navigateToTestPage: navigateToTestPage
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Service);
