import React from 'react'
//引入路由
import {Route, Switch} from 'react-router-dom'
import loadable from '../../utils/loadable'
// 引入组件
const fromDemo = loadable(() => import(/* webpackChunkName: 'login' */ '../../views/fromDemo'))
const Admin = loadable(() => import(/* webpackChunkName: 'login' */ '../../views/home'))
class ContentMain extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/admin' component={Admin}/>
                    <Route exact path='/fromDemo' component={fromDemo}/>
                    {/* <Route exact path='/page/AlertDemo' component={global.Admin}/> */}
                </Switch>
            </div>
        )
    }
}

export default ContentMain