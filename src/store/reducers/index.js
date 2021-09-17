import { combineReducers } from "redux";
import userReducer from './user'
import commonReducer from './common'

//模块化reducer :通过combineReducers把多个reducer合并成一个reducer

const reducer=combineReducers({
    user:userReducer,
    common:commonReducer,
})

export default reducer