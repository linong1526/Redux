import React, { useState, useEffect, useMemo, useCallback, useReducer,useContext } from 'react'
import myContext from '@/context'

function UseContext(props) {
    console.log('start')
    const [qty, setQty] = useState(1);
    const [count, setCount] = useState(10);
    const value = useContext(myContext)
    
    console.log('useContext.value',value)

    console.log('end')
    return (
        <div>
            <h4>useContext</h4>
            <button onClick={() => {
                setCount(count + 1)
            }}>count:{count}</button>
            
        </div>
        // <myContext.Consumer>
        //     {
        //         (value)=>{
        //             console.log('context.value',value)
        //             return (

        //                     <div>
        //                         <h4>useContext</h4>
        //                         <button onClick={() => {
        //                             setCount(count + 1)
        //                         }}>count:{count}</button>
                                
        //                     </div>
        //             )
        //         }
        //     }
        // </myContext.Consumer>
    )
}

export default UseContext