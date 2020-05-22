import { Button } from "antd";
import { inject, observer } from "mobx-react";
import React from "react";
import { VerThr } from "../../../../genericComponent/gridBox/verThr/verThr";
import { DrawerView } from "../drawer/ui";
import { ModelView } from "../modal/ui";
import { PaginationView } from "../pagination";
import { OrderManagementTable } from "../table/ui";
import { IOrderManagementprops } from "./interface";
import { OrderManagementUiAction } from "./uiAction";


@inject("GlobalOrderManagementviewDoMainStore")
@observer
export class OrderManagementview extends React.Component<IOrderManagementprops>{

    private uiAction: OrderManagementUiAction;

    constructor(props: IOrderManagementprops) {
        super(props);
        this.uiAction = new OrderManagementUiAction(props);
    }

    public componentDidMount(){
        this.props.GlobalOrderManagementviewDoMainStore!.LoadData()
    }
    public render() {
        return (
            <>
                <VerThr style={{ padding: 8 }}>
                    <VerThr.top style={{ paddingLeft: 8 }}>
                        <Button href="##" onClick={this.uiAction.RefreshClick}>刷新一下</Button>
                    </VerThr.top>
                    <VerThr.middle style={{ padding: 8 }}>
                        <OrderManagementTable
                            onAdd={this.uiAction.adda}
                            onEdit={this.uiAction.edit}
                            onEyeClick={this.uiAction.eyeClick}
                        />
                        <DrawerView
                            visible={this.props.GlobalOrderManagementviewDoMainStore!.DrawerViewVisible}
                            onClose={this.uiAction.onCloseClick} />
                        <ModelView
                            modelTitle={this.uiAction.modelTitle}
                            handleCancel={this.uiAction.cancel}
                            handleOk={this.uiAction.save}
                            visible={this.props.GlobalOrderManagementviewDoMainStore!.DialogViewVisible} />
                    </VerThr.middle>
                    <VerThr.bottom>
                        <PaginationView GlobalOrderManagementDoMainStore={this.props.GlobalOrderManagementviewDoMainStore!} />
                    </VerThr.bottom>
                </VerThr>
            </>
        )
    }
}