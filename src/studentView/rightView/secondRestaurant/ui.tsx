import { Alert } from 'antd';
import { inject, observer } from 'mobx-react';
import 'orid/lib/style/standStyle/oridFeedbackPC.scss';
import React from 'react';
import { VerThr } from '../../../genericComponent/gridBox/verThr/verThr';
import { FlexAlign } from '../../../genericComponent/layout/flexAlign/flexAlign';
import { ISecondRestaurantProps } from './interface';
import { PaginationView } from './pagination';
import { SecondRestaurantTable } from './table/ui';
import { TopSearchView } from './topSearch/ui';

/**
 * 第二餐厅
 */
@inject("GlobalSecondDoMainStore")
@observer
export class SecondRestaurant extends React.Component<ISecondRestaurantProps>{
    public render() {
        return (
            <VerThr>
                <VerThr.top>
                    <TopSearchView />
                </VerThr.top>
                <VerThr.middle style={{ padding: '8px' }}>
                    < SecondRestaurantTable />
                </VerThr.middle>
                <VerThr.bottom style={{ paddingRight: "8px" }}
                >
                    <FlexAlign xAlign="between">
                        <Alert
                            message={(
                                <span className="ori-alert-message">
                                    已选择
                                    <a href="##">
                                        {this.props.GlobalSecondDoMainStore!.selectedRow}
                                    </a>
                                    项
                                </span>
                            )}
                            type="info"
                            showIcon={true}
                            className=" ori-alert-nocolor"
                        />
                        <div style={{ textAlign: "right", paddingRight: "12px",width:'450px' }}>
                            <PaginationView GlobalSecondDoMainStore={this.props.GlobalSecondDoMainStore!} />
                        </div>
                    </FlexAlign>
                </VerThr.bottom>
            </VerThr>
        )
    }
}