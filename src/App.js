import React from 'react'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import { withStorage } from './utils/hoc';

import Login from './views/Login'
import Manage from './views/Manage'


import 'antd/dist/antd.css';
import './App.scss'
import './test.css'

// const reduxState = store.getState()
// const [state,setState] = useState(callback(reduxState,store.dispatch))
// store.subscribe(()=>{
//     const newState = store.getState()
//     setState(callback(newState,store.dispatch));
// })

@withRouter
class App extends React.Component {
    componentDidMount(){
        this.props.history.listen((location)=>{
            // 路由改变时会触发这里的方法
            console.log('listen',location)
        })
    }
    render() {
        console.log('App.props',this.props)
        return (

            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/manage" component={Manage} />
                <Redirect from="/" to="/login" exact />
            </Switch>

        )
    }
}

export default App;