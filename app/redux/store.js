import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../redux/reducers/index';
import {appNavigatorMiddleware} from '../containers/AppNavigator';

//添加thunk中间件，支持异步处理
const middlewares = [thunk, appNavigatorMiddleware];

//添加开发者工具，便于调试
const storeEnhancers = compose(
    applyMiddleware(...middlewares)
);

//创建store
export default createStore(
    reducer,
    storeEnhancers
)
