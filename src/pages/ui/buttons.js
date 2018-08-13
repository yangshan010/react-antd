import React , { Component } from 'react';
import { Button , Card} from 'antd'
export default class Buttons extends Component {
    render () {
        return (
            <div>
                <Card title="基础按钮">
                    <Button type="primary"> Imooc</Button>
                    <Button> Imooc</Button>
                    <Button type="dashed"> Imooc</Button>
                    <Button type="danger"> Imooc</Button>
                    <Button disabled> Imooc</Button>
                </Card>
                <Card title="icon 按钮">
                   <Button shape = "circle" icon="search"></Button>
                   <Button type="primary" icon="search">搜索</Button>
                </Card>
            </div>
        )
    }
}