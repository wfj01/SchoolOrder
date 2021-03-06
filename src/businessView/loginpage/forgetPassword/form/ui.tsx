import { Form, Input } from 'antd';
import { FormCreateOption } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { IForgetPassWordFormProps } from './interface';
import { ForgetPassWordFormUiAction } from './uiAction';


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
 * 忘记密码-修改密码
 */
@inject("GlobalBusinessListViewDoMainStore")
@observer
class ForgetPassWordForm extends React.Component<IForgetPassWordFormProps>{


    private uiAction: ForgetPassWordFormUiAction;

    constructor(props: IForgetPassWordFormProps) {
        super(props);
        this.uiAction = new ForgetPassWordFormUiAction(props);
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
            <Form>
                <Form.Item
                    label="账  号："
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
                            <Input placeholder="请输入你的账号" />
                        )
                    }
                </Form.Item>
                <Form.Item
                    label="店铺名称"
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
                                    max: 12,
                                    message: '超出长度限制',
                                }
                            ]
                        })(
                            <Input placeholder="请输入你的店铺名称" />
                        )
                    }
                </Form.Item>

                <Form.Item
                    label="登录密码"
                    style={{ width: '300px' }}
                    {...formItemLayout}
                >
                    {
                        getFieldDecorator('Password', {
                            rules: [
                                {
                                    required: true,
                                    whitespace: true,
                                    message: "不能为空"
                                },
                            ]
                        })(
                            <Input placeholder="请输入你的登录密码" onChange={this.uiAction.handleForgetPassWord} />
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
        )
    }
}
/**
 * 表单首选项
 */
const formCreateOption: FormCreateOption<IForgetPassWordFormProps> = {
    mapPropsToFields(props) {
        const item = props.GlobalBusinessListViewDoMainStore!.ForgetPasscurrentEditItem;
        return {
            Studentname: Form.createFormField({
                value: item.Name,
            }),
            Studentid: Form.createFormField({
                value: item.Shopname,
            }),
            Password: Form.createFormField({
                value: item.Password,
            }),
            // ConfirmPassword: Form.createFormField({
            //     value: item.ConfirmPassword,
            // }),
        }
    }
}

export default Form.create<IForgetPassWordFormProps>(formCreateOption)(ForgetPassWordForm);