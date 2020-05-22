import { Button } from 'antd';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { VerThr } from '../../../../genericComponent/gridBox/verThr/verThr';
import { DrawerView } from '../drawer/ui';
import { ModelView } from '../modal/ui';
import { ManageGoodsTable } from '../table/ui';
import { IManageGoodsViewProps } from './interface';
import { ManageGoodsViewUiAction } from './uiAction';

@inject("GlobalManageGoodsDomainStore")
@observer
export class ManageGoodsView extends React.Component<IManageGoodsViewProps>{

    private uiAction: ManageGoodsViewUiAction;

    constructor(props: IManageGoodsViewProps) {
        super(props);
        this.uiAction = new ManageGoodsViewUiAction(props);
    }
    public render() {
        return (
            <VerThr>
                <VerThr.top>
                    <Button href="##" onClick={this.uiAction.addbtn} style={{ float: "left", margin: 8 }}>新增</Button>
                </VerThr.top>
                <VerThr.middle>
                    <ManageGoodsTable
                        onAdd={this.uiAction.adda}
                        onEdit={this.uiAction.edit}
                        onEyeClick={this.uiAction.eyeClick}
                    />
                    <DrawerView
                        visible={this.props.GlobalManageGoodsDomainStore!.DrawerViewVisible}
                        onClose={this.uiAction.onCloseClick} />
                    <ModelView
                        modelTitle = {this.uiAction.modelTitle}
                        handleCancel={this.uiAction.cancel}
                        handleOk={this.uiAction.save}
                        visible={this.props.GlobalManageGoodsDomainStore!.DialogViewVisible} />
                </VerThr.middle>
            </VerThr>
        )
    }
}