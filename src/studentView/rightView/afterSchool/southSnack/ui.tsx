import { Alert } from 'antd';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { VerThr } from '../../../../genericComponent/gridBox/verThr/verThr';
import { FlexAlign } from '../../../../genericComponent/layout/flexAlign/flexAlign';
import { ISouthSnackProps } from './interface';
import { PaginationView } from './pagination';
import { SouthSnackTable } from './table/ui';
import { TopSearchView } from './topSearch/ui';

/**
 * 南门小吃
 */
@inject("GlobalSouthSnackDoMainStore")
@observer
export class SouthSnack extends React.Component<ISouthSnackProps> {
    public render() {
        return (
            <VerThr>
                <VerThr.top>
                    <TopSearchView />
                </VerThr.top>
                <VerThr.middle style={{ padding: '8px' }}>
                    <SouthSnackTable />
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