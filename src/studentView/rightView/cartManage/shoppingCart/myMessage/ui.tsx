import { Button, Form, Input } from "antd";
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

@inject("GlobalMymessageViewStoress", "GlobalListViewDoMainStore")
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
        console.log("wfewefewfw:", this.props.GlobalMymessageViewStoress!.allReportTableData[0].password)
        this.props.GlobalMymessageViewStoress!.number1 = this.props.GlobalMymessageViewStoress!.allReportTableData[0].password;

        this.props.GlobalMymessageViewStoress!.studentid = this.props.GlobalListViewDoMainStore!.LoginUsername;
    }

    public render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form
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
                                <Input placeholder="请输入你的真实姓名" disabled={this.props.GlobalMymessageViewStoress!.handledisabled} />
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
                                <Input placeholder="请输入你的登录学号" disabled={this.props.GlobalMymessageViewStoress!.handledisabled} />
                            )
                        }
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
                                <Input disabled={this.props.GlobalMymessageViewStoress!.handledisabled} placeholder="请输入你的联系电话" onChange={this.handleOnChange} />
                            )}
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
                                <Input  disabled={this.props.GlobalMymessageViewStoress!.handledisabled} placeholder="请输入你的常用地址" onChange={this.handleaddress} />
                            )
                        }
                    </Form.Item>
                </Form>
                <div>
                    <Button href="##" type="primary" style={{justifyContent:"end"}} onClick={this.handleClick}>是否更改</Button>
                </div>
            </div>
        )
    }

    private handleClick() {
        this.props.GlobalMymessageViewStoress!.handledisabled = false;
        // this.props.GlobalMymessageViewStoress!.SaveUpdata();
    }

    private onChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.currentTarget.value === 'undefined') {
            this.props.GlobalMymessageViewStoress!.number1 = this.props.GlobalMymessageViewStoress!.allReportTableData[0].password;
        }
        else {
            this.props.GlobalMymessageViewStoress!.number1 = event.currentTarget.value;
        }
        console.log('number1', this.props.GlobalMymessageViewStoress!.number1);
    }

    private onChangePassword1(event: React.ChangeEvent<HTMLInputElement>) {
        this.props.GlobalMymessageViewStoress!.number2 = event.currentTarget.value;

    }

    private handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.props.GlobalMymessageViewStoress!.number3 = event.currentTarget.value;

    }

    private handleaddress(event: React.ChangeEvent<HTMLInputElement>) {
        this.props.GlobalMymessageViewStoress!.number4 = event.currentTarget.value;

    }

    private handleemail(event: React.ChangeEvent<HTMLInputElement>) {
        this.props.GlobalMymessageViewStoress!.number5 = event.currentTarget.value;

    }

    private handlename(event: React.ChangeEvent<HTMLInputElement>) {
        this.props.GlobalMymessageViewStoress!.number6 = event.currentTarget.value;

    }
}
/**
 * 表单首选项
 */
const formCreateOption: FormCreateOption<IMymessageViewProps> = {
    mapPropsToFields(props) {
        console.log("dfafsafa", props.GlobalMymessageViewStoress!.allReportTableData.length)
        if (props.GlobalMymessageViewStoress!.allReportTableData.length > 0) {
            const item = props.GlobalMymessageViewStoress!.allReportTableData[0];
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