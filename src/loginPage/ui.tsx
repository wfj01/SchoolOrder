import { Button, Form, Icon, Input } from 'antd';
import { FormCreateOption } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';
import React from 'react';
import './index.css';
import { ILoginPageProps } from './interface';
import { LoginpageUiAction } from './uiAction';
const formItemLayoutStyle = {
 color:"#40a9ff",
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 15
    }
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


/**
 * 登录页面
 */
@inject("GlobalLoginPageStore")
@observer
class LoginPage extends React.Component<ILoginPageProps>{

    private uiaction: LoginpageUiAction;

    constructor(props: ILoginPageProps) {
        super(props);
        this.uiaction = new LoginpageUiAction(props);
    }
    public render() {
        const form = this.props.form;
        return (
            <>
                <div className="bbb" style={{ display: this.props.Logindisplay }}>
                    <Form>
                        <Form.Item
                            label={"账号"} 
                            {...formItemLayoutStyle}
                        >
                            {
                                form.getFieldDecorator("studentid",
                                    {
                                        rules: [
                                            {
                                                whitespace: true,
                                                message: "不能为空"
                                            },
                                            {
                                                max: 15,
                                                message: "长度不能大于12"
                                            }
                                        ]
                                    }
                                )(<Input  onChange={this.props.Usernametext} prefix={<Icon type="user" />}/>)
                            }
                        </Form.Item>
                        <Form.Item
                            label={"密码"}
                            {...formItemLayoutStyle}
                        >
                            {
                                form.getFieldDecorator("Password",
                                    {
                                        rules: [
                                            {
                                                whitespace: true,
                                                message: "不能为空"
                                            },
                                            {
                                                max: 64,
                                                message: "长度过长"
                                            }
                                        ]
                                    }
                                )(<Input value="123456" type="password" onChange={this.props.Passwordtext} prefix={<Icon type="key" />} suffix={<Icon onClick={this.uiaction.eyeClick} className="iconfont+&#xe60e"  type={"&#xe60e"} />}/>)
                            }
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button href="##" type="primary" htmlType="submit" onClick={this.props.LoginOnClick} style={{ marginRight: " 8px" }}>
                                登录
                            </Button>
                            <Button href="##" type="primary" htmlType="submit" onClick={this.props.RegisterOnClick} style={{ marginRight: " 8px" }}>
                                注册
                            </Button>
                            <a id="Forgetpassword" href="##" onClick={this.props.ForgetBtnonClick}>忘记密码</a>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <a href="##" onClick={this.props.Ifbusiness}>如果你是商家，请点击这里</a>
                        </Form.Item>
                    </Form>
                </div>
            </>
        )
    }
}
/**
 * 表单首选项
 */
const formCreateOption: FormCreateOption<ILoginPageProps> = {
    mapPropsToFields(props) {
        return {
            studentid: Form.createFormField({
                value: "201710033092",
            }),
            Password: Form.createFormField({
                value: "123456",
            }),
        }
    }
}
export default Form.create<ILoginPageProps>(formCreateOption)(LoginPage);