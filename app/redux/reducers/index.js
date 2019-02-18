import {combineReducers} from 'redux';
import App from './../reducers/AppReducer';
import nav from './../reducers/navigator/navigatorReducer';
import MainScreen from "./../reducers/mainScreen/mainScreenReducer";
import TestPage from "./mainScreen/testScreenReducer";
import Drawer from "./mainScreen/drawerReducer";
import News from "./../reducers/mainScreen/newsReducer";
import Treaty from "./mainScreen/treatyReducer";
import Service from "./mainScreen/serviceReducer";
import Consultation from "./mainScreen/consultationReducer";

//通过combineReducers 合并所有reducer
export default combineReducers({
    App,
    nav,
    MainScreen,
    News,
    Treaty,
    Service,
    Consultation,
    Drawer,
    TestPage
})
