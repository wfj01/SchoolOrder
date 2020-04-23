import { Form, Input } from 'antd';
import { FormCreateOption } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { IFromViewProps } from './interface';
import { FromViewUiAction } from './uiAction';


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

@inject("GlobalManageGoodsDomainStore")
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
        const { getFieldDecorator } = this.props.form;
        return (

            <Form>
                <Form.Item
                    label="菜名："
                    style={{ width: '300px' }}
                    {...formItemLayout}
                >
                    {
                        getFieldDecorator('dishname', {
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
                            <Input placeholder="请输入菜名" />
                        )
                    }
                </Form.Item>
                <Form.Item
                    label="价格"
                    style={{ width: '300px' }}
                    {...formItemLayout}
                >
                    {
                        getFieldDecorator('price', {
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
                            <Input placeholder="请输入所需要的价格" />
                        )
                    }
                </Form.Item>

                <Form.Item
                    label="需要时间"
                    style={{ width: '300px' }}
                    {...formItemLayout}
                >
                    {
                        getFieldDecorator('time', {
                            rules: [
                                {
                                    required: true,
                                    whitespace: true,
                                    message: "不能为空"
                                },
                            ]
                        })(
                            <Input placeholder="请输入需要的时间" />
                        )
                    }
                </Form.Item>

                <Form.Item
                    label="购买窗口"
                    style={{ width: '300px' }}
                    {...formItemLayout}

                >
                    {
                        getFieldDecorator('windows', {
                            rules: [
                                {
                                    required: true,
                                    whitespace: true,
                                    message: "不能为空"
                                },
                            ]
                        })(
                            <Input placeholder="请输入你的窗口" />
                        )}
                </Form.Item>
                <Form.Item
                    label="备注"
                    style={{ width: '300px' }}
                    {...formItemLayout}

                >
                    {
                        getFieldDecorator('remarks', {
                            rules: [
                                {
                                    required: true,
                                    whitespace: true,
                                    message: "不能为空"
                                },
                            ]
                        })(
                            <Input />
                        )}
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
        const item = props.GlobalManageGoodsDomainStore!.currentEditItem;
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
            remarks: Form.createFormField({
                value: item.remarks,
            }),
            time: Form.createFormField({
                value: item.time,
            }),
            windows: Form.createFormField({
                value: item.windows,
            }),
        }
    }
}

export default Form.create<IFromViewProps>(formCreateOption)(FromView);