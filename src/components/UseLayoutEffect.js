import React, { useState, useEffect, useMemo, useCallback, useReducer,useContext,useRef,useLayoutEffect } from 'react'
function UseLayoutEffect(props) {
    console.log('start')
    const [qty, setQty] = useState(1);
    const [count, setCount] = useState(10);


    useEffect(()=>{
        // 这里的代码，在页面渲染后执行
        console.log('useEffect',document.querySelector('button'))
    })
    
    // useEffect的同步版本
    useLayoutEffect(()=>{
        // 这里的代码，在页面渲染前执行，会阻塞页面的渲染
        console.log('useLayoutEffect',document.querySelector('button'))
        // for(let i=0;i<1000;i++){
        //     console.log('666');
        // }
    })

    console.log('end')
    return (
        <div>
            <h4>useLayoutEffect</h4>
            <button onClick={() => {
                setCount(count + 1)
            }}>count:{count}</button>
            
        </div>
    )
}

export default UseLayoutEffect