import { Cascader, Form, Input } from 'antd';
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

const options = [
    {
        value: '第一餐厅',
        label: '第一餐厅',
        children: [
            {
                value: '一窗口',
                label: '一窗口',
            },
            {
                value: '二窗口',
                label: '二窗口',
            },
            {
                value: '三窗口',
                label: '三窗口',
            },
        ],
    },
    {
        value: '第二餐厅',
        label: '第二餐厅',
        children: [
            {
                value: '一窗口',
                label: '一窗口',
            },
            {
                value: '二窗口',
                label: '二窗口',
            },
            {
                value: '三窗口',
                label: '三窗口',
            },
        ],
    },
    {
        value: '南门',
        label: '南门',
        children: [
            {
                value: '王家饭店',
                label: '王家饭店',
            },
        ],
    },
    {
        value: '大学城',
        label: '大学城',
        children: [
            {
                value: '饭店',
                label: '饭店',
            },
        ],
    },
];

@inject("GlobalManageGoodsDomainStore")
@observer
class FromView extends React.Component<IFromViewProps>{

    private uiAction: FromViewUiAction;

    constructor(props: IFromViewProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.onChange = this.onChange.bind(this);
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
                        form.getFieldDecorator("id",
                            {
                                rules: [
                                    {
                                        required: true,
                                    }
                                ]
                            }
                        )(<Input disabled={true} value="1" defaultValue="1" />)
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
                        )(<Input placeholder="请输入菜名" />)
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
                        )(<Input placeholder="请输入价格" />)
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
                                ]
                            }
                        )(<TextArea placeholder="请输入做法" />)
                    }
                </Form.Item>
                <Form.Item label={"评分"} {...formItemLayoutStyle} >
                    {
                        form.getFieldDecorator("score",
                            {
                                rules: [
                                    {
                                        required: true,
                                    },
                                ]
                            }
                        )(<Input disabled={true}  />)
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
                        )(<Input placeholder="请输入时间" />)
                    }
                </Form.Item>

                <Form.Item label={"说明"} {...formItemLayoutStyle} >
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
                        )(<Input placeholder="请输入说明" />)
                    }
                </Form.Item>
                <Form.Item label={"窗口"} {...formItemLayoutStyle} >
                    <Cascader placeholder="请选择窗口" options={options} onChange={this.onChange} changeOnSelect={true} />
                </Form.Item>
            </Form>
        )
    }

    private handleChange(value: any) {
        console.log(`selected ${value}`);
    }

    private handleChange1(value: any) {
        console.log(`selected ${value}`);
    }

    private onChange(value: any) {
        this.props.GlobalManageGoodsDomainStore!.valueText = value.join("")
        console.log("value.tostring()", value.join(""));
    }
}

const formCreateOption: FormCreateOption<IFromViewProps> = {
    mapPropsToFields(props) {
        return {
            id: Form.createFormField({
                value: (props.GlobalManageGoodsDomainStore!.List.length) + 4
            }),
            score: Form.createFormField({
                value: "0"
            })
        }
    }
}

export default Form.create<IFromViewProps>(formCreateOption)(FromView)