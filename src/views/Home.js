import React, { useState } from 'react'
// import store from '@/store'
import { withUser, withStorage, withRedux } from '../utils/hoc'
import { connect } from 'react-redux'
// redux与react是两个独立产品，
// 1. 要在react组件中获取全局共享的数据，必须通关过store.getState()方法来实现
// 2. 如果想要在redux数据被修改时刷新react组件，必须监听state修改，并在监听回调中手动刷新组件
// const state = store.getState();
// console.log('state=',state);



function Home(props) {
    console.log('Home.props', props)
    // const [userInfo,setUserInfo] = useState(state.userInfo)

    // 监听redux.state修改
    // store.subscribe(()=>{
    //     // 这里的代码在redux.state被修改时执行
    //     const newState = store.getState()
    //     console.log('newState',newState)
    //     setUserInfo(newState.userInfo);
    // })

    return (
        <div>
            Home
            {/* <p>用户名：{props.user.username}</p>
            <button onClick={() => {
                // props.dispatch({type:'logout'})
                props.logout()
            }}>退出</button> */}
        </div>
    )
}

// 使用withRedux，以props的方式把redux数据传入组件
// Home = withRedux(function(state,dispatch){
//     return {
//         user:state.userInfo,
//         logout(){
//             console.log('logout')
//             dispatch({type:'logout'})
//         },
//         dispatch
//     }
// })(Home)
// Home = withUser(Home)
// Home = withStorage('userInfo')(Home)

// mapStateToProps: 定义共享的数据
const mapStateToProps = function (state, props) {
    // state: redux状态
    // props: 当前组件的原props
    console.log('mapStateToProps=', state, props)
    return {
        user: state.userInfo,
        isLogin: Boolean(state.userInfo._id)
    }
}
// mapDispatchToProps: 定义修改state的方法
const mapDispatchToProps = function (dispatch,props) {
    return {
        logout() {
            dispatch({ type: 'logout' })
        }
    }
}
Home = connect(mapStateToProps, mapDispatchToProps)(Home)

export default Home;