import { Alert } from 'antd';
import { inject, observer } from 'mobx-react';
import 'orid/lib/style/standStyle/oridFeedbackPC.scss';
import React from 'react';
import { VerThr } from '../../../genericComponent/gridBox/verThr/verThr';
import { FlexAlign } from '../../../genericComponent/layout/flexAlign/flexAlign';
import { DrawerView } from './drawer/ui';
import { IFirstRestaurantProps } from './interface';
import { PaginationView } from './pagination';
import { RestaurantTable } from './table/ui';
import { TopSearchView } from './topSearch/ui';
import { FirstRestaurantUiAction } from './uiAction';

@inject("GlobalFirstDoMainStore")
@observer
export class FirstRestaurant extends React.Component<IFirstRestaurantProps>{

    private uiAction: FirstRestaurantUiAction;

    constructor(props: IFirstRestaurantProps) {
        super(props);
        this.uiAction = new FirstRestaurantUiAction(props);
    }
    public componentWillUnmount(){
        this.props.GlobalFirstDoMainStore!.clean();
    }
    public render() {
        return (
            <VerThr style={{ paddingTop: '15px' }}>
                <VerThr.top>
                    <TopSearchView />
                </VerThr.top>
                <VerThr.middle style={{ padding: '15px 8px 8px 0px' }}>
                    <RestaurantTable
                        onEyeClick={this.uiAction.onEyeClick} />
                        {this.props.GlobalFirstDoMainStore!.allReportTableData.length >0 
                        ? <DrawerView
                        visible={this.uiAction.visible}
                        onClose={this.uiAction.onCloseClick} />
                        :<div/>}
                    
                </VerThr.middle>
                <VerThr.bottom style={{ paddingRight: "8px" }}
                >
                    <FlexAlign xAlign="between">
                        <Alert
                            message={(
                                <span className="ori-alert-message">
                                    已选择
                                    <a href="##">
                                        {this.props.GlobalFirstDoMainStore!.selectedRow}
                                    </a>
                                    项
                                </span>
                            )}
                            type="info"
                            showIcon={true}
                            className=" ori-alert-nocolor"
                        />
                        <VerThr.bottom style={{ textAlign: "right", paddingRight: "12px", width: '450px' }}>
                            <PaginationView GlobalFirstDoMainStore={this.props.GlobalFirstDoMainStore!} />
                        </VerThr.bottom>
                    </FlexAlign>
                </VerThr.bottom>
            </VerThr>
        )
    }
}