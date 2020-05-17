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

@inject("GlobalOrderManagementviewDoMainStore")
@observer
class FormView extends React.Component<IFormViewProps> {

    public render() {
        const form = this.props.form;
        return (
            <Form>
                <Form.Item label={"Id"} {...formItemLayoutStyle} >
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
                        )(<Input disabled={true}/>)
                    }
                </Form.Item>
                <Form.Item label={"评分"} {...formItemLayoutStyle} >
                    {
                        form.getFieldDecorator("Rate",
                            {
                                rules: [
                                    {
                                        required: true,
                                        whitespace: true,
                                        message: "不能为空"
                                    },
                                ]
                            }
                        )(<Rate disabled={true} character={<Icon type="heart" />} allowHalf={true} />)
                    }
                </Form.Item>
                <Form.Item label={"评论"} {...formItemLayoutStyle} >
                    {
                        form.getFieldDecorator("Comment",
                            {
                                rules: [
                                    {
                                        required: true,
                                        whitespace: true,
                                        message: "不能为空"
                                    },
                                ]
                            }
                        )(<TextArea disabled={true}/>)
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
        if(props.GlobalOrderManagementviewDoMainStore!.allReportTableData.length>0){
            const lengths = props.GlobalOrderManagementviewDoMainStore!.lengths;
            const item = props.GlobalOrderManagementviewDoMainStore!.allReportTableData[lengths];
            console.log("itemitemitemitemitemitem:",item)
            console.log("ididididididid",item.id)
            return {
                id: Form.createFormField({
                    value: item.id,
                }),
                Rate:Form.createFormField({
                    value:item.rate,
                }),
                Comment:Form.createFormField({
                    value:item.comment
                })
            }
        }else{
            return {
                id: Form.createFormField({
                    value: ""
                }),
                Rate:Form.createFormField({
                    value:"",
                }),
                Comment:Form.createFormField({
                    Comment:""
                })
            }
        }
        }
       
}

export default Form.create<IFormViewProps>(formCreateOption)(FormView)