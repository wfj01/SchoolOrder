import { Form, Icon, Input, Rate } from "antd";
import { FormCreateOption } from "antd/lib/form";
import TextArea from "antd/lib/input/TextArea";
// import { FormCreateOption } from "antd/lib/form";
import { inject, observer } from "mobx-react";
import React from "react";
import { IFormViewProps } from "./interface";


const formItemLayoutStyle = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 15
    }
};
/**
 * 加载Form表单的数据
 */

@inject("GlobalManageGoodsDomainStore")
@observer
class FormView extends React.Component<IFormViewProps> {

    public render() {
        const form = this.props.form;
        return (
            <Form>
                <Form.Item label={"序号"} {...formItemLayoutStyle} >
                    {
                        form.getFieldDecorator("id",
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
                        )(<Input />)
                    }
                </Form.Item>
                <Form.Item label={"菜名"} {...formItemLayoutStyle} >
                    {
                        form.getFieldDecorator("dishname",
                            {
                                rules: [
                                    {
                                        required: true,
                                        whitespace: true,
                                        message: "不能为空"
                                    },
                                    {
                                        required: true,
                                        max: 30,
                                        message: "长度不能大于30"
                                    }
                                ]
                            }
                        )(<Input disabled={true} />)
                    }
                </Form.Item>
                <Form.Item label={"价格"} {...formItemLayoutStyle} >
                    {
                        form.getFieldDecorator("price",
                            {
                                rules: [
                                    {
                                        required: true,
                                        whitespace: true,
                                        message: "不能为空"
                                    },
                                    {
                                        required: true,
                                        max: 30,
                                        message: "长度不能大于30"
                                    }
                                ]
                            }
                        )(<Input disabled={true} />)
                    }
                </Form.Item>
                <Form.Item label={"得分"} {...formItemLayoutStyle} >
                    {
                        form.getFieldDecorator("score",
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
                        )(<Rate disabled={true} character={<Icon type="heart" />} allowHalf={true} />)
                    }
                </Form.Item>
                <Form.Item label={"时间"} {...formItemLayoutStyle} >
                    {
                        form.getFieldDecorator("time",
                            {
                                rules: [
                                    {
                                        required: true,
                                        whitespace: true,
                                        message: "不能为空"
                                    },
                                    {
                                        required: true,
                                        max: 25,
                                        message: "长度不能大于25"
                                    }
                                ]
                            }
                        )(<Input disabled={true} />)
                    }
                </Form.Item>
                <Form.Item label={"做法"} {...formItemLayoutStyle} >
                    {
                        form.getFieldDecorator("practice",
                            {
                                rules: [
                                    {
                                        required: true,
                                        whitespace: true,
                                        message: "不能为空"
                                    },
                                    {
                                        required: true,
                                        max: 25,
                                        message: "长度不能大于25"
                                    }
                                ]
                            }
                        )(<TextArea disabled={true} style={{ height: "150px" }} />)
                    }
                </Form.Item>
                <Form.Item label={"购买窗口"} {...formItemLayoutStyle} >
                    {
                        form.getFieldDecorator("windows",
                            {
                                rules: [
                                    {
                                        required: true,
                                        whitespace: true,
                                        message: "不能为空"
                                    },
                                    {
                                        required: true,
                                        max: 25,
                                        message: "长度不能大于25"
                                    }
                                ]
                            }
                        )(<Input disabled={true} />)
                    }
                </Form.Item>
                <Form.Item label={"点评"} {...formItemLayoutStyle} >
                    {
                        form.getFieldDecorator("remarks",
                            {
                                rules: [
                                    {
                                        required: true,
                                        whitespace: true,
                                        message: "不能为空"
                                    },
                                    {
                                        required: true,
                                        max: 25,
                                        message: "长度不能大于25"
                                    }
                                ]
                            }
                        )(<Input disabled={true} />)
                    }
                </Form.Item>
            </Form>
        )
    }
}


/**
 * 表单首选项
 */
const formCreateOption: FormCreateOption<IFormViewProps> = {
    mapPropsToFields(props) {
        console.log("props.DemoTableViewDomainSotre!.lengths:",props.GlobalManageGoodsDomainStore!.lengths);
        if(props.GlobalManageGoodsDomainStore!.List.length>0){
            const lengths = props.GlobalManageGoodsDomainStore!.lengths;
            const item = props.GlobalManageGoodsDomainStore!.List[lengths];
            return {
                id: Form.createFormField({
                    value: item.id,
                }),
                dishname: Form.createFormField({
                    value: item.dishname,
                }),
                price: Form.createFormField({
                    value: item.price,
                }),
                practice: Form.createFormField({
                    value: item.practice,
                }),
                score: Form.createFormField({
                    value: item.score,
                }),
                time: Form.createFormField({
                    value: item.time,
                }),
                windows: Form.createFormField({
                    value: item.windows,
                }),
                remarks: Form.createFormField({
                    value: item.remarks,
                }),
            }
        }else{
            return {
                id: Form.createFormField({
                    value: ""
                }),
                dishname: Form.createFormField({
                    value: ""
                }),
                price: Form.createFormField({
                    value: ""
                }),
                practice: Form.createFormField({
                    value: ""
                }),
                score: Form.createFormField({
                    value: "",
                }),
                time: Form.createFormField({
                    value: ""
                }),
                windows: Form.createFormField({
                    value: ""
                }),
                remarks: Form.createFormField({
                    value: ""
                }),
            }
        }
        }
       
}

export default Form.create<IFormViewProps>(formCreateOption)(FormView)