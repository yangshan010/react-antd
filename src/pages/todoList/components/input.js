import React, { Component } from 'react'
import { Input , Row , Button , Col} from 'antd'
import { connect } from 'react-redux'
import { addItem } from '../../../redux/action'
 class TodoInput extends Component {
    constructor () {
        super()
        this.state = {
            value:''
        }
    }
    handleInput = (e) => {
        console.log(e.target.value)
        this.setState({
            value:e.target.value
        })
    }

    handleSubmit = () => {
        let obj = {
            text:this.state.value,
            state:false
        }
        this.props.addTodoItem(obj)
        this.setState ({
            value:''
        })
    }
    render() {
        return (
                <Row>
                    <Col>
                        <Input value={this.state.value} onChange={this.handleInput} placeholder="请输入"/>
                        
                        
                    </Col>
                    <Col>
                        <Button onClick={this.handleSubmit}>
                            确定
                        </Button>
                    </Col>
                </Row>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return  {
        addTodoItem: (item) => {
            dispatch(addItem(item))
        }
    }
}

export default connect(null,mapDispatchToProps)(TodoInput)