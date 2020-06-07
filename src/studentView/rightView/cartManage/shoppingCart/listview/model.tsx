import { Modal } from "antd";
import { inject, observer } from "mobx-react";
import React from "react";
import { StepsViewDomainStore } from "../../domainStore";
import { MymessageViewa } from "../myMessage";


// const formItemLayoutStyle = {
//     labelCol: {
//         span: 6
//     },
//     wrapperCol: {
//         span: 15
//     }
// };
export interface IShoppingCartViewModelProps{
    GlobalStepsViewDomainStore?: StepsViewDomainStore;

    visible:boolean;

    handleCancel:()=>void;

    handleOk:()=>void;
}

@inject("GlobalStepsViewDomainStore")
@observer
export class ShoppingCartViewModel extends React.Component<IShoppingCartViewModelProps> {

    constructor(props:IShoppingCartViewModelProps){
        super(props);
    }
    public render() {
        // const form = this.props.form;
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
                  <MymessageViewa/>
                  </Modal>
            </>
        )
    }
}