import {createStackNavigator} from 'react-navigation'
import {createReactNavigationReduxMiddleware, reduxifyNavigator} from "react-navigation-redux-helpers";
import MainScreen from "./mainScreen/MainScreen";
import News from "./mainScreen/News";
import Treaty from "./mainScreen/Treaty";
import Service from "./mainScreen/Service";
import Consultation from "./mainScreen/Consultation";
import Drawer from "./mainScreen/Drawer";
import TestPage from "./mainScreen/TestPage";

export const AppNavigator = createStackNavigator({
    MainScreen: {
        screen: MainScreen
    },
    News: {
        screen: News
    },
    Treaty: {
        screen: Treaty
    },
    Service: {
        screen: Service
    },
    Consultation: {
        screen: Consultation
    },
    Drawer: {
        screen: Drawer
    },
    TestPage: {
        screen: TestPage
    }
}, {
    // Default config for all screens
    headerMode: 'none',
    // initialRouteName: 'MainScreen',
    navigationOptions: {
        // headerStyle: styles.header
    }
});

// Create middleware and connect
export const appNavigatorMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);

const AppWithNavigationState = reduxifyNavigator(AppNavigator, 'root');

export default AppWithNavigationState;
