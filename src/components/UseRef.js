import React, { useState, useEffect, useMemo, useCallback, useReducer,useContext,useRef } from 'react'

class CChild extends React.Component{
    render(){
        return (
            <button>CChild</button>
        )
    }
}
function FChild(){
    return (
        <button>FChild</button>
    )
}

const myuseRefSet = new Set();
const myCreateRefSet = new Set();

function UseRef(props) {
    console.log('start')
    const [qty, setQty] = useState(1);
    const [count, setCount] = useState(10);

    // useRef()
    const myRef = useRef(null);
    
    // createRef()
    // const numberInput = React.createRef();// {current:null}
    const childComponent = React.createRef();// {current:null}
    
    myuseRefSet.add(myRef)
    myCreateRefSet.add(childComponent)


    console.log('myuseRefSet',myuseRefSet)
    console.log('myCreateRefSet',myCreateRefSet)

    // React.forwardRef()
    // let input = null;
    // useEffect(()=>{
    //     console.log('input',input);
    //     input.focus();
    //     console.log('numberInput',numberInput)
    //     console.log('childComponent',childComponent)
    // },[]);


    console.log('end')
    return (
        <div>
            <h4>useRef</h4>
            <button onClick={() => {
                setCount(count + 1)
            }}>count:{count}</button>
            {/* <input ref={el=>input=el} /> */}
            {/* <input type="number" ref={numberInput} /> */}

            {/* ref支持类组件，不支持函数组件 */}
            <CChild />
            <FChild />
        </div>
    )
}

export default UseRef