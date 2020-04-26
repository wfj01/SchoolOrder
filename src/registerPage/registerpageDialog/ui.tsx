import { Modal } from "antd";
import { inject, observer } from "mobx-react";
import React from "react";
import RegisterPageForm from '../registerpageForm/ui';
import { IRegisterPageDialogProps } from "./interface";
import { RegisterPageDialogUiAction } from "./uiAction";


/** 注册页面弹窗 */
@inject("GlobalRegisterPageDomainStore")
@observer
export class RegisterPageDialog extends React.Component<IRegisterPageDialogProps> {

    private uiAction:RegisterPageDialogUiAction;

    constructor(props:IRegisterPageDialogProps){
        super(props);
        this.uiAction = new RegisterPageDialogUiAction(props);
    }
    public render() {
        return (
            <Modal
                className="bdt-select-tree-overflow"
                title="注册"
                visible={this.props.RegPagevisiable}
                onOk={this.uiAction.handleOk}
                onCancel={this.props.handleCancel}
                width={"800px"}
                okText={"确定"}
                cancelText={"取消"}
            >
                <RegisterPageForm
                getUiAction={this.uiAction.getSonUiAction}
                GlobalRegisterPageDomainStore={this.props.GlobalRegisterPageDomainStore!}
            />
            </Modal>
        )
    }
}