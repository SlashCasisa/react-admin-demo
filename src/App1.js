import React, { Component } from 'react'
// BrowserRouter 地址栏 没有 #  是需要服务端配合, 是基于html5的pushState和replaceState的，很多浏览器不支持，存在兼容性问题。
import { BrowserRouter as Router, Route,  Switch} from 'react-router-dom'
// HashRouter 地址栏 有 #  不需要服务端配合   是浏览器端解析路由
// import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
 import loadable from './utils/loadable'
// 引入组件
// import Login from './views/Login'
// import Admin from './views/home'
const Login = loadable(() => import(/* webpackChunkName: 'login' */ './views/Login'))
const Admin = loadable(() => import(/* webpackChunkName: 'login' */ './views/home'))

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
            <Route path="/admin" component={Admin} />
          </Switch>
        </div>
      </Router>
    )
  }
}
 
export default App