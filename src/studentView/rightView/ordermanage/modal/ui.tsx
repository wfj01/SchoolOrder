import { Modal } from "antd";
import { inject, observer } from "mobx-react";
import React from "react";
import CompanyForm from './form/ui';
import { IModelViewProps } from "./interface";
import { ModelViewUiAction } from "./uiAction";

@inject("GlobalOrderManagementviewDoMainStore")
@observer
export class ModelView extends React.Component<IModelViewProps>{

    private uiAction: ModelViewUiAction;

    constructor(props: IModelViewProps) {
        super(props);
        this.uiAction = new ModelViewUiAction(props);
    }
    public render() {
        return (
            <Modal
                title={this.props.modelTitle}
                visible={this.props.visible}
                okText={"确定"}
                cancelText={"取消"}
                onCancel={this.props.handleCancel}
                onOk={this.uiAction.handleOk}
                destroyOnClose={true}
            >
                <CompanyForm
                    getUiAction={this.uiAction.getSonUiAction}
                    GlobalOrderManagementviewDoMainStore={this.props.GlobalOrderManagementviewDoMainStore!}
                />
            </Modal>
        )
    }
}