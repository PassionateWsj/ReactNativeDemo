import * as types from "../../../constant/ActionTypes";

//返回上个页面
export const changeState = () => {
    return {
        type: types.DRAWER_CHANGE_STATE,
    }
};

