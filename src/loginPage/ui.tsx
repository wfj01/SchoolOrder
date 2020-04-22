import { Button, Checkbox, Form, Input } from 'antd';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { ILoginPageProps } from './interface';
// import { LoginpageUiAction } from './uiAction';
const formItemLayoutStyle = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 15
    }
};

/**
 * 登录页面
 */
@inject("GlobalLoginPageStore")
@observer
class LoginPage extends React.Component<ILoginPageProps>{

    // private uiaction: LoginpageUiAction;

    // constructor(props: ILoginPageProps) {
    //     super(props);
    //     this.uiaction = new LoginpageUiAction(props);
    // }
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
                                )(<Input onChange={this.props.Usernametext} />)
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
                                )(<Input onChange={this.props.Passwordtext} />)
                            }
                        </Form.Item>
                        <Form.Item {...formItemLayoutStyle}>
                            <Checkbox>记住账号</Checkbox>
                        </Form.Item>
                        <Form.Item {...formItemLayoutStyle}>
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
export default Form.create<ILoginPageProps>()(LoginPage);