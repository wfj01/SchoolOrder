import { Alert } from 'antd';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { VerThr } from '../../../../genericComponent/gridBox/verThr/verThr';
import { FlexAlign } from '../../../../genericComponent/layout/flexAlign/flexAlign';
import { DrawerView } from './drawer/ui';
import { ISouthSnackProps } from './interface';
import { PaginationView } from './pagination';
import { SouthSnackTable } from './table/ui';
import { TopSearchView } from './topSearch/ui';
import { SouthSnackUiAction } from './uiAction';

/**
 * 南门小吃
 */
@inject("GlobalSouthSnackDoMainStore")
@observer
export class SouthSnack extends React.Component<ISouthSnackProps> {

    private uiAction:SouthSnackUiAction;

    constructor(props:ISouthSnackProps){
        super(props);
        this.uiAction = new SouthSnackUiAction(props);
    }
    public render() {
        return (
            <VerThr style={{ paddingTop: '15px' }}>
                <VerThr.top>
                    <TopSearchView />
                </VerThr.top>
                <VerThr.middle style={{ padding: '15px 8px 8px 0px' }}>
                    <SouthSnackTable 
                    onEyeClick={this.uiAction.onEyeClick}/>
                    <DrawerView
                       visible={this.uiAction.visible}
                       onClose={this.uiAction.onCloseClick}/>
                </VerThr.middle>
                <VerThr.bottom style={{ paddingRight: "8px" }}
                >
                    <FlexAlign xAlign="between">
                        <Alert
                            message={(
                                <span className="ori-alert-message">
                                    已选择
                                    <a href="##">
                                        {this.props.GlobalSouthSnackDoMainStore!.selectedRow}
                                    </a>
                                项
                                </span>
                            )}
                            type="info"
                            showIcon={true}
                            className=" ori-alert-nocolor"
                        />
                        <div style={{ textAlign: "right", paddingRight: "12px", width: '450px' }}>
                            <PaginationView GlobalSouthSnackDoMainStore={this.props.GlobalSouthSnackDoMainStore!} />
                        </div>
                    </FlexAlign>
                </VerThr.bottom>
            </VerThr>
        )
    }
}