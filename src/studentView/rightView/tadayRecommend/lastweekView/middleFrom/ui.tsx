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
 * 推荐菜-中间内容
 */
@inject("GlobalLastWeekDomainStore")
@observer
class MiddleFromView extends React.Component<IMiddleFromViewProps> {
  
    public render() {
        const form = this.props.form;
        return (
            <Form>
                <Form.Item label="菜名" {...formItemLayoutStyle}>
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
                                        max: 15,
                                        message: "长度不能大于15"
                                    }
                                ]
                            }
                        )(<Input style={{ width: '200px' }} disabled={true} />)
                    }
                </Form.Item>
                <Form.Item label="价格" {...formItemLayoutStyle}>
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
                                        max: 15,
                                        message: "长度不能大于15"
                                    }
                                ]
                            }
                        )(<Input style={{ width: '200px' }} disabled={true} />)
                    }
                </Form.Item>
                <Form.Item label="得分" {...formItemLayoutStyle}>
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
                        )(<Input style={{ width: '200px' }} disabled={true} />)
                    }
                </Form.Item>
                <Form.Item label="时间" {...formItemLayoutStyle}>
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
                                        max: 15,
                                        message: "长度不能大于15"
                                    }
                                ]
                            }
                        )(<Input style={{ width: '200px' }} disabled={true} />)
                    }
                </Form.Item>
                <Form.Item label="窗口" {...formItemLayoutStyle}>
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
                                        max: 15,
                                        message: "长度不能大于15"
                                    }
                                ]
                            }
                        )(<Input style={{ width: '200px' }} disabled={true} />)
                    }
                </Form.Item>
                <Form.Item label="说明" {...formItemLayoutStyle}>
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
        if(props.GlobalLastWeekDomainStore!.List.length>0){
            const lengths = props.GlobalLastWeekDomainStore!.lengths;
            const item = props.GlobalLastWeekDomainStore!.List[lengths];
            return {
                dishname: Form.createFormField({
                    value: item.dishname,
                }),
                price: Form.createFormField({
                    value: item.price,
                }),
                remarks: Form.createFormField({
                    value: item.remarks,
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
            }
        }else{
            return {
                dishname: Form.createFormField({
                    value: "",
                }),
                price: Form.createFormField({
                    value: "",
                }),
                remarks: Form.createFormField({
                    value: "",
                }),
                score: Form.createFormField({
                    value: "",
                }),
                time: Form.createFormField({
                    value: "",
                }),
                windows: Form.createFormField({
                    value: "",
                }),
            }
        }
        }
       
}

export default Form.create<IMiddleFromViewProps>(formCreateOption)(MiddleFromView)