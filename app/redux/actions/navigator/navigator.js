import * as types from "../../../constant/ActionTypes";

//返回上个页面
export const back = () => {
    return {
        type: types.BACK,
    }
};

export const navigateToTestPage = ()=>{
    return{
        type:types.NA_TEST_PAGE
    }
};


