import { Modal } from "antd";
import { inject, observer } from "mobx-react";
import React from "react";
import ForgetPassWordForm from '../form/ui';
import { IForgetPassWordDialogProps } from "./interface";
import { ForgetPassWordDialogUiAction } from "./uiAction";


/** 忘记密码弹窗 */
@inject("GlobalBusinessListViewDoMainStore")
@observer
export class ForgetPassWordPage extends React.Component<IForgetPassWordDialogProps> {

    private uiAction:ForgetPassWordDialogUiAction;

    constructor(props:IForgetPassWordDialogProps){
        super(props);
        this.uiAction = new ForgetPassWordDialogUiAction(props);
    }
    public render() {
        return (
            <Modal
                className="bdt-select-tree-overflow"
                title="忘记密码"
                visible={this.props.forgetPasswordVisible}
                onOk={this.uiAction.handleOk}
                onCancel={this.props.handleCancel}
                okText={"确定"}
                width={'400px'}
                cancelText={"取消"}
            >
                <ForgetPassWordForm
                getUiAction={this.uiAction.getSonUiAction}
                GlobalBusinessListViewDoMainStore={this.props.GlobalBusinessListViewDoMainStore!}
            />
            </Modal>
        )
    }
}