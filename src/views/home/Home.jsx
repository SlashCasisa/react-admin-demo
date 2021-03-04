
import '../../style/view-style/home.scss'
import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import routes from '@/routes'
import {Link} from 'react-router-dom';
// import { HashRouter as Route } from 'react-router-dom'
// import { HashRouter as Route, Switch, Redirect } from 'react-router-dom'
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;
// const { SubMenu } = Menu;
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeMenu: '/admin'
    }
    this.handleClick = e => {
      console.log('click ', e);
      this.setState({
        activeMenu: e.key
      })
      // this.props.history.push(this.state.activeMenu)
    };
  }
  componentDidMount() {
    console.log('home index', routes)
  }
  render() {
    // let { auth } = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : ''
    return (
      <Layout>
        <Header><div>后台管理</div><div>user</div></Header>
        <Layout>
          <Sider>
            <Menu
              onClick={this.handleClick}
              defaultSelectedKeys={[this.state.activeMenu]}
              mode="inline"
            >
                {routes.map(item => {
                  return (
                    <Menu.Item key={item.path}>
                    {/* <Route
                      key={item.path}
                      path={item.path}
                      exact={item.exact}
                      render={props =>
                          <item.component {...props} />
                      }></Route> */}
                       <Link to={item.path}>
                        <span>{item.name}</span>
                      </Link>
                      </Menu.Item>
                  )
                })}
              
            </Menu>
          </Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    )
  }


}

export default Home