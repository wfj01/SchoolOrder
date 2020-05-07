import { Form, Input } from "antd";
import { FormCreateOption } from "antd/lib/form";
import { inject, observer } from "mobx-react";
import React from "react";
import { IMiddleFromViewProps } from "./interface";

const formItemLayoutStyle = {
    labelCol: {
        span: 3
    },
    wrapperCol: {
        span: 1
    }
};
/**
 * 中间内容
 */
@inject("GlobalPersonaldataDoMainStore")
@observer
class MiddleFromView extends React.Component<IMiddleFromViewProps> {
    public componentDidMount(){
        this.props.GlobalPersonaldataDoMainStore!.loaddata();
    }
    public render() {
        const form = this.props.form;
        return (
            <Form>
                <Form.Item label="姓名" {...formItemLayoutStyle}>
                    {
                        form.getFieldDecorator("name",
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
                                        message: "长度不能大于15"
                                    }
                                ]
                            }
                        )(<Input style={{ width: '200px' }} disabled={true} />)
                    }
                </Form.Item>
                <Form.Item label="密码" {...formItemLayoutStyle}>
                    {
                        form.getFieldDecorator("password",
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
                                        message: "长度不能大于15"
                                    }
                                ]
                            }
                        )(<Input style={{ width: '200px' }} disabled={true} />)
                    }
                </Form.Item>
                <Form.Item label="店铺名称" {...formItemLayoutStyle}>
                    {
                        form.getFieldDecorator("shopname",
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
                                        message: "长度不能大于15"
                                    }
                                ]
                            }
                        )(<Input style={{ width: '200px' }} disabled={true} />)
                    }
                </Form.Item>
                <Form.Item label="店铺地址" {...formItemLayoutStyle}>
                    {
                        form.getFieldDecorator("shopaddress",
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
                                        message: "长度不能大于15"
                                    }
                                ]
                            }
                        )(<Input style={{ width: '200px' }} disabled={true} />)
                    }
                </Form.Item>
                <Form.Item label="电话名称" {...formItemLayoutStyle}>
                    {
                        form.getFieldDecorator("phonenumber",
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
                                        message: "长度不能大于15"
                                    }
                                ]
                            }
                        )(<Input style={{ width: '200px' }} disabled={true} />)
                    }
                </Form.Item>
                <Form.Item label="介绍自己" {...formItemLayoutStyle}>
                    {
                        form.getFieldDecorator("selfintroduction",
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
                                        message: "长度不能大于15"
                                    }
                                ]
                            }
                        )(<Input style={{ width: '200px' }} disabled={true} />)
                    }
                </Form.Item>
                <Form.Item label="授权码" {...formItemLayoutStyle}>
                    {
                        form.getFieldDecorator("license",
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
                                        message: "长度不能大于15"
                                    }
                                ]
                            }
                        )(<Input style={{ width: '200px' }} disabled={true} />)
                    }
                </Form.Item>
            </Form>
        )
    }
}
/**
 * 表单首选项
 */
const formCreateOption: FormCreateOption<IMiddleFromViewProps> = {
    mapPropsToFields(props) {
        console.log("props.GlobalPersonaldataDoMainStore!.List",props.GlobalPersonaldataDoMainStore!.List)
        console.log("props.GlobalPersonaldataDoMainStore!.List.length：",props.GlobalPersonaldataDoMainStore!.List.length);
        if(props.GlobalPersonaldataDoMainStore!.List.length>0){
            // const lengths = props.GlobalPersonaldataDoMainStore!.lengths;
            const item = props.GlobalPersonaldataDoMainStore!.List[0];
            console.log("item:",item);
            return {
                name: Form.createFormField({
                    value: item.name,
                }),
                password: Form.createFormField({
                    value: item.password,
                }),
                shopname: Form.createFormField({
                    value: item.shopname,
                }),
                shopaddress: Form.createFormField({
                    value: item.shopaddress,
                }),
                phonenumber: Form.createFormField({
                    value: item.phonenumber,
                }),
                selfintroduction: Form.createFormField({
                    value: item.selfintroduction,
                }),
                license: Form.createFormField({
                    value: item.license,
                }),
            }
            }else{
            return {
                name: Form.createFormField({
                    value: "",
                }),
                password: Form.createFormField({
                    value: "",
                }),
                shopname: Form.createFormField({
                    value: "",
                }),
                shopaddress: Form.createFormField({
                    value: "",
                }),
                phonenumber: Form.createFormField({
                    value: "",
                }),
                selfintroduction: Form.createFormField({
                    value: "",
                }),
                license: Form.createFormField({
                    value: "",
                }),
            }
        }
        }
       
}

export default Form.create<IMiddleFromViewProps>(formCreateOption)(MiddleFromView)