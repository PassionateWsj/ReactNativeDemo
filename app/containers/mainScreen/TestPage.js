import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {back} from './../../redux/actions/navigator/navigator';

class TestPage extends Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Page</Text>
                <Button
                    title="Go Back"
                    onPress={() => {
                        this.props.back();
                    }}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        state: state.TestPage,
        nav: state.nav,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        back: back
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
