import {useState} from 'react'
/**
 * 只能获取本地存储数据
 * @param {String}} key 本地存储的键
 * @returns 返回key对应的值
 */
// export function useStorage(key){
//     let value = localStorage.getItem(key)
//     try{
//         value = JSON.parse(value);
//     }catch(err){
//         value = value;
//     }
//     return value;
// }
// const token = useStorage('token')

/**
 * 获取/修改本地存储数据（问题：组件不会刷新）
 * @param {String}} key 本地存储的键
 * @returns {Array} 值和修改值方法对应的数组
 */
// export function useStorage(key){
//     let value = localStorage.getItem(key)
//     try{
//         value = JSON.parse(value);
//     }catch(err){
//         value = value;
//     }

//     const setValue = function(newValue){console.log('newVlaue',newValue)
//         if(typeof newValue === 'object'){
//             newValue = JSON.stringify(newValue)
//         }
//         localStorage.setItem(key,newValue)
//     }
//     return [value,setValue];
// }

// const [token,setToken] = useStorage('token');
// setToken('abc')

/**
 * 获取/修改本地存储数据（解决组件不会刷新的问题）
 * @param {String}} key 本地存储的键
 * @returns {Array} 值和修改值方法对应的数组
 */
export function useStorage(key){
    let value = localStorage.getItem(key)
    try{
        value = JSON.parse(value);
    }catch(err){
        value = value;
    }

    // 利用useState处理本存储数据
    const [state,setState] = useState(value)

    const setValue = function(newValue){
        setState(newValue);

        if(typeof newValue === 'object'){
            newValue = JSON.stringify(newValue)
        }
        localStorage.setItem(key,newValue)

        
    }
    return [state,setValue];
}

// const [token,setToken] = useStorage('token');
// setToken('abc')