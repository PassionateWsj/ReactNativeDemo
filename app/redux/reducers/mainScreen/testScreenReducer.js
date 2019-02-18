import * as types from '../../../constant/ActionTypes';

//初始化状态
const initialState = {
};

/**
 * 根据type，保存state到store，更新虚拟dom tree
 * @param state
 * @param action
 * @returns {*}
 */
const testScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TEST_SCREEN_CHANGE_STATE:
            return {...state, ...action.state};
        default:
            return state;
    }
};

export default testScreenReducer;
