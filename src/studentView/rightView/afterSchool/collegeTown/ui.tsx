import { Alert } from 'antd';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { VerThr } from '../../../../genericComponent/gridBox/verThr/verThr';
import { FlexAlign } from '../../../../genericComponent/layout/flexAlign/flexAlign';
import { DrawerView } from './drawer/ui';
import { ICollegeTownProps } from './interface';
import { PaginationView } from './pagination';
import { CollegeTownTable } from './table/ui';
import { TopSearchView } from './topSearch/ui';
import { CollegeTownUiAction } from './uiAction';

/**
 * 大学城
 */
@inject("GlobalCollegeTownDoMainStore")
@observer
export class CollegeTown extends React.Component<ICollegeTownProps> {

    private uiAction: CollegeTownUiAction;

    constructor(props: ICollegeTownProps) {
        super(props);
        this.uiAction = new CollegeTownUiAction(props);
    }
    public render() {
        return (
            <VerThr style={{ paddingTop: '15px' }}>
                <VerThr.top>
                    <TopSearchView />
                </VerThr.top>
                <VerThr.middle style={{ padding: '15px 8px 8px 0px' }}>
                    <CollegeTownTable
                        onEyeClick={this.uiAction.onEyeClick} />
                    <DrawerView
                        visible={this.uiAction.visible}
                        onClose={this.uiAction.onCloseClick} />
                </VerThr.middle>
                <VerThr.bottom style={{ paddingRight: "8px" }}
                >
                    <FlexAlign xAlign="between">
                        <Alert
                            message={(
                                <span className="ori-alert-message">
                                    已选择
                                    <a href="##">
                                        {this.props.GlobalCollegeTownDoMainStore!.selectedRow}
                                    </a>
                                项
                                </span>
                            )}
                            type="info"
                            showIcon={true}
                            className=" ori-alert-nocolor"
                        />
                        <div style={{ textAlign: "right", paddingRight: "12px", width: '450px' }}>
                            <PaginationView GlobalCollegeTownDoMainStore={this.props.GlobalCollegeTownDoMainStore!} />
                        </div>
                    </FlexAlign>
                </VerThr.bottom>
            </VerThr>
        )
    }
}