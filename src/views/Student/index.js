import React from 'react'
import { Switch,Route,Redirect,useRouteMatch } from 'react-router-dom'

import List from './List'
import Add from './Add'
import Edit from './Edit'

function Student(props){
    console.log('Student.props',props)
    const {path} = useRouteMatch()
    return(
        <div>
            Student
            <Switch>
                <Route path={path + "/list"} component={List} />
                <Route path={path + "/add"} component={Add} />
                <Route path={path + "/eidt/:id"} component={Edit} />
                <Redirect from={path + ""} to={path + "/list"} exact />

            </Switch>
        </div>
    )
}

export default Student;