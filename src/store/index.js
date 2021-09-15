import {createStore} from 'redux'

// 为什么没要使用redux
// 1. 把数据进行全局共享
// 2. 可以在任意组件中修改

// 初始状态
const initState = {
    userInfo:{
        username:'laoxie',
        token:'xkslfdjals',
        _id:'asdkfjasld'
    },
    a:10,
    b:20,
}

// reducer: 是一个用于修改state的纯函数，接收state,action作为参数，且必须返回一个新的state
const reducer = function(state,action){
    switch(action.type){
        // dipatch({type:'login',userInfo})
        case 'login':
            return {
                ...state,
                userInfo:action.userInfo
            }
        // dispatch({type:'logout'})
        case 'logout':
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