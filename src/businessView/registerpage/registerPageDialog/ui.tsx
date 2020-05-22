import { Modal } from "antd";
import { inject, observer } from "mobx-react";
import React from "react";
import RegisterPageForm from '../registerPageForm/ui';
import { IRegisterPageDialogProps } from "./interface";
import { RegisterPageDialogUiAction } from "./uiAction";

@inject("GlobalBusinessListViewDoMainStore")
@observer
export class BusinessRegisterPage extends React.Component<IRegisterPageDialogProps>{
    
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
                visible={this.props.RegisterPagevisiable}
                onOk={this.uiAction.handleOk}
                onCancel={this.props.handleCancel}
                width={"700px"}
                okText={"确定"}
                cancelText={"取消"}
            >
                <RegisterPageForm
                getUiAction={this.uiAction.getSonUiAction}
                GlobalBusinessListViewDoMainStore={this.props.GlobalBusinessListViewDoMainStore!}
            />
            </Modal>
        )
    }
}