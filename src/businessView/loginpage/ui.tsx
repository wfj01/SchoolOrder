import { Button, Form, Icon, Input } from "antd";
import React from "react";
import { IBudinessLoginPageProps } from "./interface";


const formItemLayoutStyle = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 15
    }
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

class BudinessLoginPage extends React.Component<IBudinessLoginPageProps>{
    public render() {
        const form = this.props.form;
        return (
            <>
                <div style={{ width: "400px", display: this.props.Logindisplay }}>

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
                                                required: true,
                                                whitespace: true,
                                                message: "不能为空"
                                            },
                                            {
                                                required: true,
                                                max: 15,
                                                message: "长度不能大于12"
                                            }
                                        ]
                                    }
                                )(<Input defaultValue="wangfujun"  prefix={<Icon type="user" />} onChange={this.props.Usernametext} />)
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
                                                required: true,
                                                whitespace: true,
                                                message: "不能为空"
                                            },
                                            {
                                                required: true,
                                                max: 64,
                                                message: "长度过长"
                                            }
                                        ]
                                    }
                                )(<Input defaultValue="123456" type="password" onChange={this.props.Passwordtext} prefix={<Icon type="key" />} />)
                            }
                        </Form.Item>
                        <Form.Item
                            label={"授权码"}
                            {...formItemLayoutStyle}
                        >
                            {
                                form.getFieldDecorator("AuthorizationCode ",
                                    {
                                        rules: [
                                            {
                                                required: true,
                                                whitespace: true,
                                                message: "不能为空"
                                            },
                                            {
                                                required: true,
                                                max: 64,
                                                message: "长度过长"
                                            }
                                        ]
                                    }
                                )(<Input defaultValue="Wfj123" prefix={<Icon type="message" />} onChange={this.props.AuthorizationCode} />)
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
                    </Form>
                </div>
            </>
        )
    }
}
export default Form.create<IBudinessLoginPageProps>()(BudinessLoginPage);