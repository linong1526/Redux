import React,{useState,useEffect} from 'react'
import request from '../utils/request'

function UseEffect(){
    console.log('start')
    const [qty,setQty] = useState(1);
    const [count,setCount] = useState(10);
    const [classList,setClassList] = useState([]);

    // 用法一：等效于componentDidMount + componentDidUpdate的效果（不推荐）
    // useEffect(()=>{
    //     // 这里的代码在初始化和组件刷新时执行
    //     console.log('用法一')
    // })

    // 用法二：指定依赖，等效于componentDidMount + shouldComponentUpdate的效果
    useEffect(()=>{
        // 这里的代码在初始化和qty改变时执行
        console.log('用法二：指定依赖')
        // ajax请求
        // request('/class').then(data=>{
        //     setClassList(data.data.result)
        // })
    },[qty])

    // 用法三：空依赖，等效于componentDidMount的效果
    useEffect(()=>{
        // 这里的代码只有在初始化时执行
        console.log('用法三：空依赖')
        // ajax请求
        // request('/class').then(data=>{
        //     setClassList(data.data.result)
        // })
    },[])

    // 用法四：返回一个函数，等效于componentWillUnmount的效果
    useEffect(()=>{

        return function(){
            // 这里的代码只有在组件销毁时执行
            console.log('用法四：返回一个函数')
        }
    },[])

    console.log('end',classList)
    return (
        <div>
            <h4>useEffect</h4>
            <button onClick={()=>{
                setQty(qty+1)
            }}>qty:{qty}</button>
            <button onClick={()=>{
                setCount(count+1)
            }}>count:{count}</button>
        </div>
    )
}

export default UseEffect