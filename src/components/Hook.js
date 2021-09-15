import React from 'react';

import UseState  from './UseState';
import UseEffect  from './UseEffect';
import UseMemo  from './UseMemo';
import UseCallback  from './UseCallback';
import UseReducer  from './UseReducer';
import UseContext  from './UseContext';
import UseRef  from './UseRef';
import UseLayoutEffect  from './UseLayoutEffect';
import UseStorage  from './UseStorage';

function Hooks(){
    const [show,changeShow] = React.useState(true)
    return (
        <div>
            <h2>Hooks</h2>
            {/* <UseState /> */}
            {/* {
                show ? 
                <UseEffect />
                :
                <div>已销毁</div>
            }
            <button onClick={()=>{
                changeShow(!show)
            }}>{show ? 'show' : 'hide'}</button> */}
            {/* <UseMemo /> */}
            {/* <UseCallback/> */}
            {/* <UseReducer/> */}
            {/* <UseContext /> */}
            {/* <UseRef /> */}
            {/* <UseLayoutEffect /> */}
            <UseStorage />
        </div>
    )
}

export default Hooks;