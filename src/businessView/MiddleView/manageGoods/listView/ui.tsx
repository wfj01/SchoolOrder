import { Button } from 'antd';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { VerThr } from '../../../../genericComponent/gridBox/verThr/verThr';
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

    public componentDidMount() {
        this.props.GlobalManageGoodsDomainStore!.Loadview()
    }
    public render() {
        return (
            <>
                <VerThr>
                    <VerThr.top>
                        <Button onClick={this.uiAction.showModal}>新增</Button>
                    </VerThr.top>
                    <VerThr.middle>
                        <ModelView
                            visible={this.uiAction.handleVisible}
                            handleCancel={this.uiAction.handleCancel}
                            handleOk={this.uiAction.handleOk}
                        />
                        <ManageGoodsTable />
                    </VerThr.middle>
                </VerThr>
            </>
        )
    }
}