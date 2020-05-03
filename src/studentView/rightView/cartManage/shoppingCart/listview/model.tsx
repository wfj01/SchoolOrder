import { Form, Input, Modal } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { inject, observer } from "mobx-react";
import React from "react";
import { StepsViewDomainStore } from "../../domainStore";


const formItemLayoutStyle = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 15
    }
};
export interface IShoppingCartViewModelProps extends FormComponentProps{
    GlobalStepsViewDomainStore?: StepsViewDomainStore;

    visible:boolean;

    handleCancel:()=>void;

    handleOk:()=>void;
}

@inject("GlobalStepsViewDomainStore")
@observer
class ShoppingCartViewModel extends React.Component<IShoppingCartViewModelProps> {

    constructor(props:IShoppingCartViewModelProps){
        super(props);
        this.handlestudentName = this.handlestudentName.bind(this);
        this.handlestudentaddress = this.handlestudentaddress.bind(this);
        this.handlestudentphone = this.handlestudentphone.bind(this);
    }
    public render() {
        const form = this.props.form;
        return (
            <>
                <Modal
                title={"填写个人信息"}
                visible={this.props.visible}
                okText={"确定"}
                cancelText={"取消"}
                onCancel={this.props.handleCancel}
                onOk={this.props.handleOk}
                destroyOnClose={true}>
                    <Form>
                        <Form.Item label={"您的姓名"} {...formItemLayoutStyle} >
                            {
                                form.getFieldDecorator("studentName",
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
                                )(<Input onChange={this.handlestudentName}/>)
                            }
                        </Form.Item>
                        <Form.Item label={"您的收货地址"} {...formItemLayoutStyle} >
                            {
                                form.getFieldDecorator("studentaddress",
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
                                )(<Input onChange={this.handlestudentaddress}/>)
                            }
                        </Form.Item>
                        <Form.Item label={"您的电话"} {...formItemLayoutStyle} >
                            {
                                form.getFieldDecorator("studentphone",
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
                                )(<Input onChange={this.handlestudentphone}/>)
                            }
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        )
    }

    private handlestudentName(event: React.ChangeEvent<HTMLInputElement>)
    {
        this.props.GlobalStepsViewDomainStore!.studentName = event.target.value;
    }
    
    private handlestudentaddress(event: React.ChangeEvent<HTMLInputElement>)
    {
        this.props.GlobalStepsViewDomainStore!.studentAddress = event.target.value;
    }
    
    private handlestudentphone(event: React.ChangeEvent<HTMLInputElement>)
    {
        this.props.GlobalStepsViewDomainStore!.studentPhone = event.target.value;
    }
}

export default Form.create<IShoppingCartViewModelProps>()(ShoppingCartViewModel);