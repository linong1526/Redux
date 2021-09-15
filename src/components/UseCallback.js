import React,{useState,useEffect,useMemo,useCallback} from 'react'

// Set可以自动去重
const mySet = new Set()
const handle = function(){}

function UseCallback(props){
    console.log('start')
    const [qty,setQty] = useState(1);
    const [count,setCount] = useState(10);

    // 传统写法: 组件每次刷新都会创建一个新的changeQty
    // const changeQty = function(){
    //     setQty(qty+1)
    // }
    
    // 传统写法: 组件每次刷新都会创建一个新的handle
    // const handle = function(){}
    
    // 用法一：普通用法（不推荐，等效于传统用法）
    // const handle = useCallback(function(){
        
    // })
    
    
    // 用法二：空依赖，初始化时创建一个函数并缓存，更新时永远得到缓存函数
    // const handle = useCallback(function(){
    // },[])

    // changeQty形成了一个闭包
    // const changeQty = useCallback(function(){
    //     console.log('qty,count=',qty,count)
    //     setQty(qty+1)
    // },[])

    const changeQty = useCallback(function(){
        // setState({}), setState(state=>{})
        setQty((qty)=>{
            // qty: 上一次的值
            console.log('qty=',qty)
            return qty + 1;
        })
    },[])
    
    // 用法三：指定依赖，初始化时创建一个函数，依赖发生变化时重新创建一个函数，否则得到缓存函数
    const handle = useCallback(function(){
        
    },[qty])
    // const changeQty = useCallback(function(){
    //     console.log('qty,count=',qty,count)
    //     setQty(qty+1)
    // },[qty])
    
    mySet.add(handle);
    console.log('mySet',mySet)
    console.log('end')
    return (
        <div>
            <h4>useCallback</h4>
            <button onClick={changeQty}>qty:{qty}</button>
            <button onClick={()=>{
                setCount(count+1)
            }}>count:{count}</button>
        </div>
    )
}

export default UseCallback