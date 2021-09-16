import {createStore} from 'redux'

// 为什么没要使用redux
// 1. 把数据进行全局共享
// 2. 可以在任意组件中修改

let userInfo = localStorage.getItem('userInfo')
try{
    userInfo = JSON.parse(userInfo) || {}
}catch(err){
    userInfo = {}
}

// 初始状态
const initState = {
    userInfo,
}

// reducer: 是一个用于修改state的纯函数，接收state,action作为参数，且必须返回一个新的state
const reducer = function(state,action){
    switch(action.type){
        // dipatch({type:'login',userInfo})
        case 'login':
            localStorage.setItem('userInfo',JSON.stringify(action.userInfo))
            return {
                ...state,
                userInfo:action.userInfo
            }
        // dispatch({type:'logout'})
        case 'logout':
            localStorage.removeItem('userInfo')
            return {
                ...state,
                userInfo:{}
            }
        
        default:
            return state;
    }
}

const store = createStore(reducer,initState);

export default store;

console.log('store',store)