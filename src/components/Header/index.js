import React , {Component} from 'react'
import { Row,Col } from 'antd';
import './index.less'
import Util from '../../util/util'
import axios from '../../axios'
import {connect} from 'react-redux'
  class Header extends Component {
    constructor (props) {
        super(props)
        this.state = {
            usserName : 'yangshan',
            sysTime:new Date().getTime()
        }
    }    
    componentWillMount () {
        console.log(this.props)
        this.getWeatherData()
        setInterval (() => {
            let sysTime = Util.formateDate(new Date().getTime())
            this.setState ({
                sysTime
            })
        },1000)
    }
    getWeatherData = () => {
        let options = {
            url :'http://api.map.baidu.com/telematics/v3/weather?location=%E5%8C%97%E4%BA%AC&output=json&ak=BWlUcywANnPLtIRqG0wYizt7uDFfyPc8'
        }
        axios.jsonp(options)
        .then((res) => {
            console.log('res',res)
        })
    }
    render () {
        
        return (
            <div className="header">
                <Row  className="header-top">
                    <Col span="24">
                        <span>欢迎，{this.state.usserName}</span>
                        <a href="#"> 退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        {this.props.menuName}
                    </Col>
                    <Col span="20" className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-detail">晴转多云</span>
                    </Col>
                </Row>
            </div>
           

        )
    }
}
const mapStateToProps = state => {
    return {
        menuName: state.menuName
    }
};
const mapDispatchToProps = dispatch => {
    return () => {}
}

export default connect(mapStateToProps)(Header)