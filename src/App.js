
import React, { Component } from 'react'
import { BrowserRouter as Router, Route,  Switch} from 'react-router-dom'
 import loadable from './utils/loadable'
// 引入组件
const Login = loadable(() => import(/* webpackChunkName: 'login' */ './views/Login'))
// 公共模块
const DefaultLayout = loadable(() => import(/* webpackChunkName: 'default' */ './containers'))

class App extends Component {
  render() {
    // 打印出 index.js 中 <App></App>  中间的值   比如<App>123</App>  打印出 123
    console.log(this.props.children)
 
    return (
      <Router>
        <div>
          {/*  组件 <Switch> 只渲染出第一个与当前访问地址匹配的 <Route> 或 <Redirect> 否则你有几个 <Route> 都会显示 */}
          <Switch>
            {/* react 路由重定向 */}
            {/* <Redirect exact from="/" to="/login" /> */}
            {/* 输入 localhost:3000/ 路由指向 localhost:3000/login 去  */}
            {/* <Route exact path="/" component={Login} /> */}
            {/* exact=false 的时候 path 等于 /login /login/me 都能匹配   但是 exact=true 的时候 只匹配 path 等于 /login */}
            <Route exact path="/" component={Login} />
            <Route component={DefaultLayout} />
          </Switch>
        </div>
      </Router>
    )
  }
}
 
export default App
