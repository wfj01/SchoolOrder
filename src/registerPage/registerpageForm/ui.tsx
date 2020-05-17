import { Form, Input, Radio } from "antd";
import { FormCreateOption } from "antd/lib/form";
import { inject, observer } from "mobx-react";
import React from "react";
import { IRegisterPageProps } from "./interface";
import { RegisterPageFormUiAction } from "./uiAction";

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


/** 
 * 注册页面弹窗——Form表单
 */
@inject("GlobalRegisterPageDomainStore", "GlobalListViewDoMainStore")
@observer
class RegisterPageForm extends React.Component<IRegisterPageProps> {

    private uiAction: RegisterPageFormUiAction;

    constructor(props: IRegisterPageProps) {
        super(props);
        this.uiAction = new RegisterPageFormUiAction(props);
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
                            getFieldDecorator('Studentname', {
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
                        label="真实学号"
                        style={{ width: '300px' }}
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('StudentId', {
                                rules: [
                                    {
                                        required: true,
                                        whitespace: true,
                                        message: "不能为空"
                                    },
                                    {
                                        max: 12,
                                        message: '超出长度限制',
                                    }
                                ]
                            })(
                                <Input placeholder="请输入你的登录学号" />
                            )
                        }
                    </Form.Item>
                </Form>
                <Form
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
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
                </Form>
                <Form
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Form.Item
                        label="选择性别"
                        style={{ width: '300px' }}
                        {...formItemLayout}

                    >
                        {
                            getFieldDecorator('Sex', {
                                rules: [
                                    {
                                        required: true,
                                    },
                                ]
                            })(
                                <Radio.Group >
                                <Radio value={0}>女</Radio>
                                <Radio value={1}>男</Radio>
                              </Radio.Group>
                            )}
                    </Form.Item>
                    <Form.Item
                        label="联系电话"
                        style={{ width: '300px' }}
                        {...formItemLayout}

                    >
                        {
                            getFieldDecorator('Telephone', {
                                rules: [
                                    {
                                        required: true,
                                        whitespace: true,
                                        message: "不能为空"
                                    },
                                    {
                                        max: 11,
                                        message: '超出长度',
                                    }
                                ]
                            })(
                                <Input placeholder="请输入你的联系电话" />
                            )}
                    </Form.Item>
                </Form>
                <Form
                    style={{ display: "flex", justifyContent: "space-between" }}
                >                    <Form.Item
                    label="所在班级"
                    style={{ width: '300px' }}
                    {...formItemLayout}

                >
                        {
                            getFieldDecorator('Class', {
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
                                <Input placeholder="请输入你的所在班级" />
                            )
                        }
                    </Form.Item>
                    <Form.Item
                        label="常用地址"
                        style={{ width: '300px' }}
                        {...formItemLayout}

                    >
                        {
                            getFieldDecorator('Address', {
                                rules: [
                                    {
                                        required: true,
                                        whitespace: true,
                                        message: "不能为空"
                                    },
                                    {
                                        max: 250,
                                        message: '超出长度限制',
                                    }
                                ]
                            })(
                                <Input placeholder="请输入你的常用地址" />
                            )
                        }
                    </Form.Item>
                </Form>
                <Form
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Form.Item
                        label="输入邮箱"
                        style={{ width: '300px' }}
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('Email', {
                                rules: [
                                    {
                                        max: 50,
                                        pattern: new RegExp("^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$"),
                                        message: '邮箱不正确',
                                    }
                                ]
                            })(
                                <Input placeholder="请输入你的邮箱" />
                            )
                        }
                    </Form.Item>
                    <Form.Item
                        label="输入昵称"
                        style={{ width: '300px' }}
                        {...formItemLayout}
                    >
                        {
                                <Input placeholder="请输入你的邮箱" />
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
const formCreateOption: FormCreateOption<IRegisterPageProps> = {
    mapPropsToFields(props) {
        const item = props.GlobalRegisterPageDomainStore!.currentEditItem;
        return {
            UserName: Form.createFormField({
                value: item.Studentname,
            }),
            StudentId: Form.createFormField({
                value: item.StudentId,
            }),
            PassWord: Form.createFormField({
                value: item.PassWord,
            }),
            ConfirmPassword: Form.createFormField({
                value: item.ConfirmPassword,
            }),
            Sex: Form.createFormField({
                value: item.Sex,
            }),
            Telephone: Form.createFormField({
                value: item.Telephone,
            }),
            Class: Form.createFormField({
                value: item.Class,
            }),
            Address: Form.createFormField({
                value: item.Address,
            }),
            Email: Form.createFormField({
                value: item.Email,
            }),
        }
    }
}
export default Form.create<IRegisterPageProps>(formCreateOption)(RegisterPageForm);