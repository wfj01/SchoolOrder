import { Form, Icon, Input, Rate } from 'antd';
import { FormCreateOption } from 'antd/lib/form';
import TextArea from 'antd/lib/input/TextArea';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { IFromViewProps } from './interface';
import { FromViewUiAction } from './uiAction';


const formItemLayoutStyle = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 15
    }
};

@inject("GlobalOrderManagementviewDoMainStore")
@observer
class FromView extends React.Component<IFromViewProps>{

    private uiAction: FromViewUiAction;

    constructor(props: IFromViewProps) {
        super(props);

        this.uiAction = new FromViewUiAction(props);

    }

    /**
     *  组装组件
     */
    public componentDidMount() {
        this.props.getUiAction(this.uiAction);

    }

    public render() {
        const form = this.props.form;
        return (
            <Form>
                <Form.Item label={"Id"} {...formItemLayoutStyle} >
                    {
                        form.getFieldDecorator("id")(<Input disabled={true}/>)
                    }
                </Form.Item>
                <Form.Item label={"评分"} {...formItemLayoutStyle} >
                    {
                        form.getFieldDecorator("Rate",
                            {
                                rules: [
                                    {
                                        required: true,
                                    },
                                ]
                            }
                        )(<Rate character={<Icon type="heart" />} allowHalf={true} />)
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
                        )(<TextArea/>)
                    }
                </Form.Item>
            </Form>
        )
    }
}


/**
 * 表单首选项
 */
const formCreateOption: FormCreateOption<IFromViewProps> = {
    mapPropsToFields(props) {
        const item = props.GlobalOrderManagementviewDoMainStore!.currentEditData;
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
    }
}

export default Form.create<IFromViewProps>(formCreateOption)(FromView);