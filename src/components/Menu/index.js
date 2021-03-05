import React from 'react'
import {Link} from 'react-router-dom';
import {Menu, Icon} from 'antd';
global.menus = [
    {
        title: '首页',
        icon: 'page',
        key: '/admin'
    },   {
        title: '其它',
        icon: 'bulb',
        key: '/fromDemo',
        // subs: [
            // {key: '/page/AlertDemo', title: '弹出框', icon: ''},
        // ]
     },
]
const menus =global.menus;
//此组件的意义就是将数据抽离出来，通过传递数据去渲染
class CustomMenu extends React.Component {
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
          };
    this.renderSubMenu = ({key, icon, title, subs}) => {
        return (
            <Menu.SubMenu key={key} title={<span>{icon && <Icon type={icon}/>}<span>{title}</span></span>}>
                {
                    subs && subs.map(item => {
                        return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                    })
                }
            </Menu.SubMenu>
        )
    }
    this.renderMenuItem = ({key, icon, title,}) => {
        return (
            <Menu.Item key={key}>
                <Link to={key}>
                    {icon && <Icon type={icon}/>}
                    <span>{title}</span>
                </Link>
            </Menu.Item>
        )
    }
}
    render() {
        return (
                <Menu
                defaultSelectedKeys={['/admin']}
                // defaultOpenKeys={['/admin']}
                onClick={this.handleClick}
                mode="inline"
            >
                {
                    menus.map(item => {
                        return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                    })
                }
            </Menu>
        )
    }
}
export default CustomMenu
