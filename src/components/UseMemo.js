import React,{useState,useEffect,useMemo} from 'react'
import request from '../utils/request'

function UseMemo(props){
    console.log('start')
    const [qty,setQty] = useState(1);
    const [count,setCount] = useState(10);
    const [classList,setClassList] = useState([
        { id:1, name: "goods1", price: 98, qty: 2 },
        { id:2, name: "goods2", price: 198, qty: 2 },
        { id:3, name: "goods3", price: 998, qty: 1 },
    ]);
    // 传统写法
    // 假如以下运算花费时间较长
    // const totalPrice = classList.reduce((val,item)=>{
    //     return val + item.price * item.qty
    // },0)

    // 用法一：普通用法（不推荐，等效于传统用法）
    // const totalPrice = useMemo(function(){
    //     console.log('用法一')
    //     return classList.reduce((val,item)=>{
    //         return val + item.price * item.qty
    //     },0)
    // })
    

    // 用法二：空依赖，初始化时执行并缓存，更新时不会重新执行useMemo中的代码，永远得到缓存值
    // const totalPrice = useMemo(function(){
    //     console.log('用法二：空依赖')
    //     return classList.reduce((val,item)=>{
    //         return val + item.price * item.qty
    //     },0)
    // },[])

    // 用法三：指定依赖，初始化时执行并缓存，只有在依赖的数据发生变化时重新执行useMemo中的代码并返回新的值，否则得到缓存值
    const totalPrice = useMemo(function(){
        console.log('用法三：指定依赖')
        return classList.reduce((val,item)=>{
            return val + item.price * item.qty
        },0)
    },[classList])

    console.log('totalPrice',totalPrice)
    console.log('end',classList)
    return (
        <div>
            <h4>useMemo</h4>
            <button onClick={()=>{
                setQty(qty+1)
            }}>qty:{qty}</button>
            <button onClick={()=>{
                setCount(count+1)
            }}>count:{count}</button>
            <p>
            总金额：{totalPrice}

            </p>
            <button onClick={()=>{
                const newList = [
                    { id:10, name: "goods10", price: 198, qty: 1 },
                    ...classList
                ]
                setClassList(newList)
            }}>添加商品</button>
        </div>
    )
}

export default UseMemo