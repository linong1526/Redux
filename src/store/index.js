import {createStore} from 'redux'
import reducer from './reducers'

// 为什么没要使用redux
// 1. 把数据进行全局共享
// 2. 可以在任意组件中修改

//createStore只支持一个reducer
const store=createStore(reducer);
export default store;
console.log('store',store.getState())