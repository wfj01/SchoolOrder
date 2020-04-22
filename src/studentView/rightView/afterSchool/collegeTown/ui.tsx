import { Alert } from 'antd';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { VerThr } from '../../../../genericComponent/gridBox/verThr/verThr';
import { FlexAlign } from '../../../../genericComponent/layout/flexAlign/flexAlign';
import { ICollegeTownProps } from './interface';
import { PaginationView } from './pagination';
import { CollegeTownTable } from './table/ui';
import { TopSearchView } from './topSearch/ui';

/**
 * 大学城
 */
@inject("GlobalCollegeTownDoMainStore")
@observer
export class CollegeTown extends React.Component<ICollegeTownProps> {
    public render() {
        return (
            <VerThr>
                <VerThr.top>
                    <TopSearchView />
                </VerThr.top>
                <VerThr.middle style={{ padding: '8px' }}>
                    <CollegeTownTable />
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