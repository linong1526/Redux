import React, { useState, useEffect, useMemo, useCallback, useReducer,useContext,useRef,useLayoutEffect } from 'react'

import {useStorage} from '@/utils/hooks'

function UseStorage(props) {
    console.log('start')
    const [qty, setQty] = useState(1);
    const [count, setCount] = useState(10);

    const [token,setToken] = useStorage('token')
    const [mydata,setData] = useStorage('mydata')
    
    const changeToken = useCallback((newToken)=>{
        setToken('new '+token)
    },[])

    console.log('end')
    return (
        <div>
            <h4>自定义Hook: useStorage</h4>
            <button onClick={() => {
                setCount(count + 1)
            }}>count:{count}</button>
            <p>
                Token: {token}
            </p>
            <p>
                mydata: {mydata}
            </p>
            <button onClick={changeToken}>修改token</button>
        </div>
    )
}

export default UseStorage