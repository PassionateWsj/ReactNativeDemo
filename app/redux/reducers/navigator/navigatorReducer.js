import {
    NavigationActions,
    DrawerActions,
} from 'react-navigation';
// import {DrawerActions} from 'react-navigation-drawer';
import {AppNavigator} from '../../../containers/AppNavigator';
import * as types from '../../../constant/ActionTypes';
import MainScreen from "../../../containers/mainScreen/MainScreen";
import TestPage from "../../../containers/mainScreen/TestPage";

// According to the param 'type', get the route name and return.
function getRouteName(type) {
    let routeName = '';
    switch (type) {
    }
    return routeName;
}

//默认页面
const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams("MainScreen"));

/**
 * According to the type, navigate to the layout screen of matching
 */
export default nav = (state = initialState, action) => {
    let nextState;
    if (action.type != types.BACK) {
        const currentRoute = state.routes[state.index];

        // TODO: Is this correct for nested navigators (action != null)?
        if (currentRoute.routeName == getRouteName(action.type)) {
            return state
        }
    }

    switch (action.type) {
        case types.NA_TEST_PAGE:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({
                    routeName: 'TestPage',
                    params: action.params
                }), state
            );
            break;
        case types.BACK:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.back(),
                state
            );
            break;
    }

    return nextState || state;
}
