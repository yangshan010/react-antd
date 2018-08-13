import React , {Component} from 'react'
import MenuConfig from '../../config/menuConfig'
import { Menu, Icon } from 'antd';
import './index.less'
import MenuItem from 'antd/lib/menu/MenuItem';
import { NavLink } from "react-router-dom";
import { connect }  from 'react-redux'
import { switchMenu } from '../../redux/action'
const SubMenu = Menu.SubMenu;
 class NavLeft extends Component {
    
    componentWillMount () {
        const menuTreeNode = this.renderMenu(MenuConfig)
        this.setState ({
            menuTreeNode
        })
    }
     
    renderMenu = (data) => {
        return data.map ((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            } 
            return <Menu.Item  title = {item.title} key= {item.key}> 
            <NavLink to={item.key}>
            {item.title}
            </NavLink>
            </Menu.Item>
            
        })
    }
    handleClick = ({item}) => {
        const {dispatch} = this.props
        dispatch(switchMenu(item.props.title))
    }
    render () {
        const style = {
            backgroundColor:'red'
        }
        const arr = [13,4,5,2,6,7,8,9]
        return (
            <div > 
                <div className="logo">
                    <img src="/asstes/logo-ant.svg" alt=""/> 
                    <h1>Imooc Ms</h1>
                </div>
                <Menu
                onClick = {this.handleClick}
                theme="dark">
                    
                           {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}
export default connect()(NavLeft)