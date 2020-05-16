import { Button, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { inject, observer } from "mobx-react";
import React from "react";
import { ShoppingCartTableView } from "../table/ui";
import { IShoppingCartViewProps } from "./interface";
import ShoppingCartViewModel from './model';
import { ShoppingCartViewUiAction } from "./uiAction";

@inject("GlobalStepsViewDomainStore", "GlobalListViewDoMainStore")
@observer
export class ShoppingCartView extends React.Component<IShoppingCartViewProps>{

    private uiAction: ShoppingCartViewUiAction;

    constructor(props: IShoppingCartViewProps) {
        super(props);
        this.uiAction = new ShoppingCartViewUiAction(props);

    }

    public componentDidMount() {
        this.props.GlobalStepsViewDomainStore!.LoadData();
    }
    public render() {
        return (
            <div style={{padding:8}}>
                <Button type="primary" onClick={this.uiAction.Confirmorder}>提交订单</Button>
                <div>
                    <div style={{ display: "block" }}>
                        <label style={{width:150,display:"block"}}>总金额：</label>
                        <Input disabled={true} style={{ width: "300px" }} value={this.props.GlobalStepsViewDomainStore!.calculatednumber} />
                    </div>
                    <div style={{ display: "block" }}>
                        <label style={{width:150,display:"block"}}>订单详情：</label>
                        <TextArea  disabled={true} style={{ width: "300px" }} value={this.props.GlobalStepsViewDomainStore!.calculatedstring} />
                    </div>
                </div>
                <div style={{padding:8}}>
                <ShoppingCartTableView />
                </div>
                <ShoppingCartViewModel
                    visible={this.props.GlobalStepsViewDomainStore!.ShoppingModelvisible}
                    handleOk={this.uiAction.handleOk}
                    handleCancel={this.uiAction.handleCancel}
                />
            </div>
        )
    }


}