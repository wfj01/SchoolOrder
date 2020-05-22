import { Form, Input } from "antd";
import { FormCreateOption } from "antd/lib/form";
import { inject, observer } from "mobx-react";
import React from "react";
import { IRegisterPageViewProps } from "./interface";
import { RegisterPageViewUiAction } from "./uiAction";

const formItemLayout = {
    labelCol: {
        xs: 24,
        sm: 10,

    },
    wrapperCol: {
        xs: 24,
        sm: 14,
    }
}

@inject("GlobalBusinessListViewDoMainStore")
@observer
class RegisterPageForm extends React.Component<IRegisterPageViewProps>{

    private uiAction: RegisterPageViewUiAction;

    constructor(props: IRegisterPageViewProps) {
        super(props);
        this.uiAction = new RegisterPageViewUiAction(props);
    }

    /**
     *  组装组件
     */
    public componentDidMount() {
        this.props.getUiAction(this.uiAction);

    }

    public render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div style={{ width: "600px" }}>
                <Form
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Form.Item
                        label="真实姓名："
                        style={{ width: '300px' }}
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('Name', {
                                rules: [
                                    {
                                        required: true,
                                        whitespace: true,
                                        message: "不能为空"
                                    },
                                    {
                                        max: 50,
                                        message: '超出长度限制',
                                    }
                                ]
                            })(
                                <Input placeholder="请输入你的真实姓名" />
                            )
                        }
                    </Form.Item>
                    <Form.Item
                        label="登录密码"
                        style={{ width: '300px' }}
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('PassWord', {
                                rules: [
                                    {
                                        required: true,
                                        whitespace: true,
                                        message: "不能为空"
                                    },
                                ]
                            })(
                                <Input placeholder="请输入你的登录密码" onChange={this.uiAction.handlePassWord} />
                            )
                        }
                    </Form.Item>
                </Form>
                <Form
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Form.Item
                        label="确认密码"
                        style={{ width: '300px' }}
                        {...formItemLayout}

                    >
                        {
                            getFieldDecorator('ConfirmPassword', {
                                rules: [
                                    {
                                        required: true,
                                        whitespace: true,
                                        message: "不能为空"
                                    },
                                ]
                            })(
                                <Input placeholder="请再一次输入你的密码" onChange={this.uiAction.handleConfirmPassword} />
                            )}
                    </Form.Item>
                    <Form.Item
                        label="店铺名称："
                        style={{ width: '300px' }}
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('Shopname', {
                                rules: [
                                    {
                                        required: true,
                                        whitespace: true,
                                        message: "不能为空"
                                    },
                                    {
                                        max: 50,
                                        message: '超出长度限制',
                                    }
                                ]
                            })(
                                <Input placeholder="请输入你的店铺名称" />
                            )
                        }
                    </Form.Item>
                </Form>
                <Form
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Form.Item
                        label="店铺地址："
                        style={{ width: '300px' }}
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('Shopaddress', {
                                rules: [
                                    {
                                        required: true,
                                        whitespace: true,
                                        message: "不能为空"
                                    },
                                    {
                                        max: 50,
                                        message: '超出长度限制',
                                    }
                                ]
                            })(
                                <Input placeholder="请输入你的店铺地址" />
                            )
                        }
                    </Form.Item>
                    <Form.Item
                        label="手机号码："
                        style={{ width: '300px' }}
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('Phonenumber', {
                                rules: [
                                    {
                                        required: true,
                                        whitespace: true,
                                        message: "不能为空"
                                    },
                                    {
                                        max: 50,
                                        message: '超出长度限制',
                                    }
                                ]
                            })(
                                <Input placeholder="请输入你的手机号码" />
                            )
                        }
                    </Form.Item>
                </Form>
                <Form
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Form.Item
                        label="介绍自己："
                        style={{ width: '300px' }}
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('Selfintroduction', {
                                rules: [
                                    {
                                        required: true,
                                        whitespace: true,
                                        message: "不能为空"
                                    },
                                    {
                                        max: 50,
                                        message: '超出长度限制',
                                    }
                                ]
                            })(
                                <Input placeholder="请介绍一下自己的店铺" />
                            )
                        }
                    </Form.Item>
                    <Form.Item
                        label="授权码："
                        style={{ width: '300px' }}
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('License', {
                                rules: [
                                    {
                                        required: true,
                                        whitespace: true,
                                        message: "不能为空"
                                    },
                                    {
                                        max: 50,
                                        message: '超出长度限制',
                                    }
                                ]
                            })(
                                <Input placeholder="请输入授权码" />
                            )
                        }
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

/**
 * 表单首选项
 */
const formCreateOption: FormCreateOption<IRegisterPageViewProps> = {
    mapPropsToFields(props) {
        const item = props.GlobalBusinessListViewDoMainStore!.currentEditItem;
        return {
            Name: Form.createFormField({
                value: item.Name,
            }),
            Shopname: Form.createFormField({
                value: item.Shopname,
            }),
            PassWord: Form.createFormField({
                value: item.Password,
            }),
            ConfirmPassword: Form.createFormField({
                value: item.ConfirmPassword,
            }),
            Shopaddress: Form.createFormField({
                value: item.Shopaddress,
            }),
            Phonenumber: Form.createFormField({
                value: item.Phonenumber,
            }),
            Selfintroduction: Form.createFormField({
                value: item.Selfintroduction,
            }),
        }
    }
}
export default Form.create<IRegisterPageViewProps>(formCreateOption)(RegisterPageForm);