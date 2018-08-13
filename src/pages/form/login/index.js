import React , { Component } from "react";
import { Card , Form , Input, Button , message , Icon,Checkbox} from 'antd'
const FormItem = Form.Item
 class Login extends Component {

    handleSubmit = () => {
        let userInfo =  this.props.form.getFieldsValue()
        this.props.form.validateFields ((err,value) => {
            if (!err) {
                message.success (`${userInfo.userName},恭喜您`)
            }
        })
    }
    render () {
        const { getFieldDecorator } = this.props.form
        return  (
            <div>
                <Card title="登陆行内表单">
                    <Form layout="inline">
                        <FormItem> 
                            {
                                getFieldDecorator('userName', {
                                    initialValue:'',
                                    rules:[
                                        {required:true,message:'用户名不能为空'},
                                        {min:5,max:10,message:'123'}
                                    ]
                                })(
                                    <Input  prefix={<Icon type="user" />} placeholder="请输入用户名"/> 
                                )
                            }                        
                        </FormItem>
                        <FormItem> 
                        {
                                getFieldDecorator('password ', {
                                    initialValue:'',
                                    rules:[
                                        {required:true,message:'密码不能为空'}
                                    ]
                                })(
                                    <Input placeholder="请输入密码"/>
                                )
                            }   
                        </FormItem>
                        <FormItem> 
                            <Button type="primary" onClick={this.handleSubmit}>登陆</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card style={{marginTop:'10px'}}>
                    <Form >
                    <FormItem> 
                            {
                                getFieldDecorator('userName', {
                                    initialValue:'',
                                    rules:[
                                        {required:true,message:'用户名不能为空'},
                                        {min:5,max:10,message:'123'}
                                    ]
                                })(
                                    <Input  prefix={<Icon type="user" />} placeholder="请输入用户名"/> 
                                )
                            }                        
                        </FormItem>
                        <FormItem> 
                        {
                                getFieldDecorator('password ', {
                                    initialValue:'',
                                    rules:[
                                        {required:true,message:'密码不能为空'}
                                    ]
                                })(
                                    <Input placeholder="请输入密码"/>
                                )
                            }   
                        </FormItem>
                        <FormItem> 
                        {
                                getFieldDecorator('remember ', {
                                    valuePropName:'checked',
                                    initialValue:true,
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }   
                        </FormItem>
                        <FormItem> 
                            <Button type="primary" onClick={this.handleSubmit}>登陆</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )

    }
}
export default Form.create()(Login);