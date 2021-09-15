import React from 'react'
import {render} from 'react-dom';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import App from './App'
import myContext from './context'


const Router = process.env.NODE_ENV === 'production' ? BrowserRouter : HashRouter;

render(
    <myContext.Provider value={{a:10,b:20}}>
        <Router>
            <App/>
            {/* <Route component={App} /> */}
        </Router>
    </myContext.Provider>
    ,
    document.querySelector('#app')
)