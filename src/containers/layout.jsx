import React, { Component }  from 'react'
import AdminHeader from './header.jsx'
import routes from '@/routes'
import { HashRouter as Route, Switch, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
class layout extends Component{
    render(){
        let { auth } = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : ''
        return (
            <div>
           <AdminHeader/>
           <Switch>
               {routes.map(item => {
                                return (
                                    <Route
                                        key={item.path}
                                        path={item.path}
                                        exact={item.exact}
                                        render={props =>
                                            !auth ? (
                                                <item.component {...props} />
                                            ) : item.auth && item.auth.indexOf(auth) !== -1 ? (
                                                <item.component {...props} />
                                            ) : (
                                                // 这里也可以跳转到 403 页面
                                                <Redirect to='/404' {...props} />
                                            )
                                        }></Route>
                                )
                            })}
           </Switch>
           </div>
        )
           
    }
}
export default withRouter(layout)