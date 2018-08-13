import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row,Col,Button } from 'antd' 
import { submitTodo } from '../../../redux/action'
 class Item extends Component {
    render() {
        return (
            <li>
                <span style={{ textDecoration: this.props.state ? 'line-through' : 'none'}}>{this.props.text}</span>
                <Button onClick={this.props.submitTodo}>完成</Button>
                <Button>删除</Button>
                <Button >切换</Button>
            </li>
        )
    }
}
const mapDispatchToProps = (dispatch,ownsProps) => {
    console.log(ownsProps)
    const { id } = ownsProps
    return {
        submitTodo: () => {
            dispatch(submitTodo(id))
        }
    }
}
export default connect(null,mapDispatchToProps)(Item)
