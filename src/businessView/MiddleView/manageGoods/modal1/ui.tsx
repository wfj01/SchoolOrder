import { Modal } from "antd";
import { inject, observer } from "mobx-react";
import React from "react";
import CompanyForm from './form/ui';
import { IModelViewProps } from "./interface";
import { ModelViewUiAction } from "./uiAction";

@inject("GlobalManageGoodsDomainStore")
@observer
export class ModelView1 extends React.Component<IModelViewProps>{

    private uiAction: ModelViewUiAction;

    constructor(props: IModelViewProps) {
        super(props);
        this.uiAction = new ModelViewUiAction(props);
    }
    public render() {
        return (
            <Modal
                title={"新增数据"}
                visible={this.props.visible}
                okText={"确定"}
                cancelText={"取消"}
                onCancel={this.props.handleCancel}
                onOk={this.uiAction.handleOk}
                destroyOnClose={true}
                
            >
                <CompanyForm
                    getUiAction={this.uiAction.getSonUiAction}
                    GlobalManageGoodsDomainStore={this.props.GlobalManageGoodsDomainStore!}
                />
            </Modal>
        )
    }
}