import { Button } from "antd";
import { inject, observer } from "mobx-react";
import React from "react";
import { VerThr } from "../../../../../genericComponent/gridBox/verThr/verThr";
import { PaginationView } from "../pagination";
import { OrderManagementTable } from "../table/ui";
import { IOrderManagementprops } from "./interface";
import { OrderManagementUiAction } from "./uiAction";


@inject("GlobalOrderManagementDoMainStore")
@observer
export class OrderManagement extends React.Component<IOrderManagementprops>{

    private uiAction: OrderManagementUiAction;

    constructor(props: IOrderManagementprops) {
        super(props);
        this.uiAction = new OrderManagementUiAction(props);
    }
    public render() {
        return (
            <>
                <VerThr style={{ padding: 8 }}>
                    <VerThr.top style={{ paddingLeft    : 8 }}>
                        <Button onClick={this.uiAction.RefreshClick}>刷新一下</Button>
                    </VerThr.top>
                    <VerThr.middle style={{ padding: 8 }}>
                        <OrderManagementTable />
                    </VerThr.middle>
                    <VerThr.bottom>
                        <PaginationView GlobalOrderManagementDoMainStore={this.props.GlobalOrderManagementDoMainStore!} />
                    </VerThr.bottom>
                </VerThr>
            </>
        )
    }
}