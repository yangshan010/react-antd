import React , {Component } from 'react'
import {Card, Form, Button, Input, Checkbox,Radio,Select , Switch,DatePicker,TimePicker,Upload,Icon,message,InputNumber } from 'antd' 
import moment from 'moment'

const FormItem = Form.Item
const Option = Select.Option
class FormRegister extends Component {
    state = {}
     getBase64 = (img, callback) =>  {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }
      handleChange = (info) => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          this.getBase64(info.file.originFileObj, imageUrl => this.setState({
            imageUrl,
            loading: false,
          }));
        }
      }
      handleSubmit = () => {
        const userInfo = this.props.form.getFieldsValue()
        this.props.form.validateFields((err,value) => {

        })
      }
    render() {
        
        const { getFieldDecorator } = this.props.form
        const RadioGroup  = Radio.Group
        const formItemLayout = {
            labelCol:{
                xs:24,
                sm:4
            },
            wrapperCol: {
                xs:24,
                sm:12
            }
        }
        const offestLayout = {
            wrapperCol: {
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
        }
        return (
            <div>
                <Card title="注册">
                    <Form>
                        <FormItem label="用户名" {...formItemLayout}>
                        {
                                getFieldDecorator('userName', {
                                    initialValue:'',
                                    rules:[
                                        {required:true,message:'用户名不能为空'},
                                        {min:5,max:10,message:'123'}
                                    ]
                                })(
                                    <Input placeholder="请输入用户名"/> 
                                )
                            }                     
                        </FormItem>
                        <FormItem label="密码" {...formItemLayout}>
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
                        <FormItem label="性别" {...formItemLayout}>
                        {
                                getFieldDecorator('sex ', {
                                    initialValue:'1',   
                                    rules:[
                                        {required:true,message:'性别不能为空'}
                                    ]
                                })(
                                    <RadioGroup>
                                        <Radio value="1">男</Radio>   
                                        <Radio value="2">女</Radio>   
                                        
                                    </RadioGroup>

                                )
                            }   
                        </FormItem>    
                        <FormItem label="年龄" {...formItemLayout}>
                        {
                                getFieldDecorator('age ', {
                                    initialValue:'18',
                                    rules:[
                                        {required:true,message:'年龄'}
                                    ] 
                                })(
                                    <InputNumber />
                                )
                            }   
                        </FormItem>    
                        <FormItem label="当前状态" {...formItemLayout}>
                        {
                                getFieldDecorator('state ', {
                                    initialValue:'1',
                                    rules:[
                                        {required:true,message:'年龄'}
                                    ] 
                                })(
                                    <Select>
                                        <Option value="1">闲鱼一条</Option>
                                        <Option value="2">风华浪子</Option>
                                    </Select>
                                )
                            }   
                        </FormItem>    
                        <FormItem label="爱好" {...formItemLayout}>
                        {
                                getFieldDecorator('hobbily', {
                                    initialValue:['1','2'] ,
                                    rules:[
                                        {required:true,message:'爱好'}
                                    ] 
                                })(
                                    <Select mode="multiple">
                                        <Option value="1">游泳</Option>
                                        <Option value="2">健身</Option>
                                    </Select>
                                )
                            }   
                        </FormItem>    
                        <FormItem label="是否已婚" {...formItemLayout}>
                        {
                                getFieldDecorator('marry', {
                                    initialValue:true ,
                                    valuePropName:'checked',
                                    rules:[
                                        {required:true,message:'爱好'}
                                    ] 
                                })(
                                   <Switch/>
                                )
                            }   
                        </FormItem>    
                        <FormItem label="生日" {...formItemLayout}>
                        {
                                getFieldDecorator('birthdy', {
                                    initialValue:moment('2018-08-08 12:00:09'),
                                   
                                    rules:[
                                        {required:true,message:'爱好'}
                                    ] 
                                })(
                                   <DatePicker 
                                   showTime
                                   format="YYYY-MM-DD HH:mm:ss"/>
                                )
                            }   
                        </FormItem>    
                        <FormItem label="上传" {...formItemLayout}>
                        {
                                getFieldDecorator('upload', {
                                 
                                   
                                    // rules:[
                                    //     {required:true,message:'爱好'}
                                    // ] 
                                })(
                                  <Upload 
                                    listType="picture"
                                    showUploadList = {false}
                                    action= '//jsonplaceholder.typicode.com/posts/'
                                    onChange = {this.handleChange}
                                  >
                                    {this.state.imageUrl ? <img src={this.state.imageUrl} /> : <Icon type="plus" />}
                                  </Upload>
                                )
                            }   
                        </FormItem>    
                        <FormItem {...offestLayout}>
                        {
                                getFieldDecorator('read', {
                                
                                })(
                                    <Checkbox>
                                        我已经阅读 <a href="#">木刻协议</a>
                                    </Checkbox>
                                )
                            }   
                        </FormItem>    
                        <FormItem {...offestLayout}>
                            <Button onClick = {this.handleSubmit}>
                                提交
                            </Button>
                        </FormItem>    
                        
                    </Form>
                </Card>
            </div>
        )
    }
}
export default  Form.create()(FormRegister)