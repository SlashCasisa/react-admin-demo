import React, { Component } from 'react'
import {Layout} from 'antd'
import '../../style/view-style/home.scss'
const { Header, Footer, Sider, Content } = Layout;
class Home extends Component {
    componentDidMount() {
       console.log('home index')
    }
  render() {
    return (
      <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
    )
  }
}
 
export default Home