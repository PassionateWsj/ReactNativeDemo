import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {SafeAreaView} from "react-navigation";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {back} from './../../redux/actions/navigator/navigator';
import ScreenUtil from "../../utils/ScreenUtil";
import {navigateToTestPage} from "../../redux/actions/navigator/navigator";
import {changeState} from "../../redux/actions/mainScreen/drawer";

class Drawer extends Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View>

                    <View style={styles.menuItem}>
                        <Text onPress={() => {
                            this.props.navigateToTestPage();
                            this.props.navigation.closeDrawer()
                        }}>
                            Home
                        </Text>
                    </View>

                    <View style={styles.menuItem}>
                        <Text onPress={() => {
                            this.props.navigation.closeDrawer()
                        }}>
                            Close Drawer
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    menuItem: {
        height: ScreenUtil.scaleSize(80),
    },
});

function mapStateToProps(state) {
    return {
        state: state.Drawer,
        nav: state.nav,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        back: back,
        navigateToTestPage: navigateToTestPage,
        changeState: changeState,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);


