import React,{useState} from 'react'
import request from '../utils/request'

function UseState(){
    console.log('start')
    // 类组件写法
    // this.state = {qty:1,count:10}

    // 函数组件写法
    const [qty,setQty] = useState(1);
    const [count,setCount] = useState(10);
    const [classList,setClassList] = useState([]);

    // ajax请求
    // request('/class').then(data=>{
    //     setClassList(data.data.result)
    // })
    console.log('end',classList)
    return (
        <div>
            <h4>useState</h4>
            <button onClick={()=>{
                // this.setState({
                //     qty:qty+1
                // })
                setQty(qty+1)
            }}>qty:{qty}</button>
            <button onClick={()=>{
                setCount(count+1)
            }}>count:{count}</button>
        </div>
    )
}

export default UseState