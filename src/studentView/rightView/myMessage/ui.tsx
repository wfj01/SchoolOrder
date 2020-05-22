import { Button, Form, Input, Radio } from "antd";
import { FormCreateOption } from "antd/lib/form";
import { inject, observer } from "mobx-react";
import React from "react";
import { IMymessageViewProps } from "./interface";

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

@inject("GlobalMymessageViewStores", "GlobalListViewDoMainStore")
@observer
class MymessageView extends React.Component<IMymessageViewProps> {

    constructor(props: IMymessageViewProps) {
        super(props);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePassword1 = this.onChangePassword1.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleaddress = this.handleaddress.bind(this);
        this.handleemail = this.handleemail.bind(this);
        this.handlename = this.handlename.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    public componentDidMount() {
        console.log("wfewefewfw:",this.props.GlobalMymessageViewStores!.allReportTableData[0].password)
        this.props.GlobalMymessageViewStores!.number1 = this.props.GlobalMymessageViewStores!.allReportTableData[0].password;

        this.props.GlobalMymessageViewStores!.studentid = this.props.GlobalListViewDoMainStore!.LoginUsername;
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
                            getFieldDecorator('studentname', {
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
                                <Input placeholder="请输入你的真实姓名" disabled={true} />
                            )
                        }
                    </Form.Item>
                    <Form.Item
                        label="真实学号"
                        style={{ width: '300px' }}
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('studentid', {
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
                                <Input placeholder="请输入你的登录学号" disabled={true} />
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
                            getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        whitespace: true,
                                        message: "不能为空"
                                    },
                                ]
                            })(
                                <Input placeholder="请输入你的登录密码" onChange={this.onChangePassword} />
                            )
                        }
                    </Form.Item>

                    <Form.Item
                        label="确认密码"
                        style={{ width: '300px' }}
                        {...formItemLayout}

                    >
                        {
                            getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        whitespace: true,
                                        message: "不能为空"
                                    },
                                ]
                            })(
                                <Input placeholder="请再一次输入你的密码" onChange={this.onChangePassword1} />
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
                            getFieldDecorator('sex', {
                                rules: [
                                    {
                                        required: true,
                                    },
                                ]
                            })(
                                <Radio.Group disabled={true}>
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
                            getFieldDecorator('telephone', {
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
                                <Input placeholder="请输入你的联系电话" onChange={this.handleOnChange} />
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
                            getFieldDecorator('class', {
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
                                <Input placeholder="请输入你的所在班级" disabled={true} />
                            )
                        }
                    </Form.Item>
                    <Form.Item
                        label="常用地址"
                        style={{ width: '300px' }}
                        {...formItemLayout}

                    >
                        {
                            getFieldDecorator('address', {
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
                                <Input placeholder="请输入你的常用地址" onChange={this.handleaddress} />
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
                            getFieldDecorator('email', {
                                rules: [
                                    {
                                        max: 50,
                                        pattern: new RegExp("^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$"),
                                        message: '邮箱不正确',
                                    }
                                ]
                            })(
                                <Input placeholder="请输入你的邮箱" onChange={this.handleemail} />
                            )
                        }
                    </Form.Item>
                    <Form.Item
                        label="输入昵称"
                        style={{ width: '300px' }}
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('name', {
                            })(
                                <Input placeholder="请输入你的昵称" onChange={this.handlename} />
                            )
                        }
                    </Form.Item>
                </Form>

                <div>
                    <Button href="##" type="primary" onClick={this.handleClick}>保存更改</Button>
                </div>
            </div>
        )
    }

    private handleClick(){
        this.props.GlobalMymessageViewStores!.SaveUpdata();
    }

    private onChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
        if(event.currentTarget.value === 'undefined'){
            this.props.GlobalMymessageViewStores!.number1 = this.props.GlobalMymessageViewStores!.allReportTableData[0].password;
        }
        else
        {
            this.props.GlobalMymessageViewStores!.number1 = event.currentTarget.value;
        }
        console.log('number1',this.props.GlobalMymessageViewStores!.number1);
    }

    private onChangePassword1(event: React.ChangeEvent<HTMLInputElement>) {
        this.props.GlobalMymessageViewStores!.number2 = event.currentTarget.value;

    }

    private handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.props.GlobalMymessageViewStores!.number3 = event.currentTarget.value;

    }

    private handleaddress(event: React.ChangeEvent<HTMLInputElement>) {
        this.props.GlobalMymessageViewStores!.number4 = event.currentTarget.value;

    }

    private handleemail(event: React.ChangeEvent<HTMLInputElement>) {
        this.props.GlobalMymessageViewStores!.number5 = event.currentTarget.value;

    }

    private handlename(event: React.ChangeEvent<HTMLInputElement>) {
        this.props.GlobalMymessageViewStores!.number6 = event.currentTarget.value;

    }
}
/**
 * 表单首选项
 */
const formCreateOption: FormCreateOption<IMymessageViewProps> = {
    mapPropsToFields(props) {
        console.log("dfafsafa", props.GlobalMymessageViewStores!.allReportTableData.length)
        if (props.GlobalMymessageViewStores!.allReportTableData.length > 0) {
            const item = props.GlobalMymessageViewStores!.allReportTableData[0];
            console.log("fhjahfjsjahf", item.sextext)
            return {
                studentname: Form.createFormField({
                    value: item.studentname,
                }),
                studentid: Form.createFormField({
                    value: item.studentid,
                }),
                password: Form.createFormField({
                    value: item.password,
                }),
                ConfirmPassword: Form.createFormField({
                    value: item.password,
                }),
                sex: Form.createFormField({
                    value: item.sextext,
                }),
                telephone: Form.createFormField({
                    value: item.telephone,
                }),
                class: Form.createFormField({
                    value: item.class,
                }),
                address: Form.createFormField({
                    value: item.address,
                }),
                email: Form.createFormField({
                    value: item.email,
                }),
                name: Form.createFormField({
                    value: item.name,
                }),
            }
        } else {
            return {
                studentname: Form.createFormField({
                    value: "",
                }),
                studentid: Form.createFormField({
                    value: "",
                }),
                password: Form.createFormField({
                    value: "",
                }),
                ConfirmPassword: Form.createFormField({
                    value: "",
                }),
                sex: Form.createFormField({
                    value: "",
                }),
                telephone: Form.createFormField({
                    value: "",
                }),
                class: Form.createFormField({
                    value: "",
                }),
                address: Form.createFormField({
                    value: "",
                }),
                email: Form.createFormField({
                    value: "",
                }),
                name: Form.createFormField({
                    value: "",
                }),
            }
        }
    }
}
export default Form.create<IMymessageViewProps>(formCreateOption)(MymessageView);