import { Button, Input } from "antd";
import { inject, observer } from "mobx-react";
import React from "react";
import { ShoppingCartTableView } from "../table/ui";
import { IShoppingCartViewProps } from "./interface";
import { ShoppingCartViewUiAction } from "./uiAction";

@inject("GlobalStepsViewDomainStore","GlobalListViewDoMainStore")
@observer
export class ShoppingCartView extends React.Component<IShoppingCartViewProps>{

    private uiAction: ShoppingCartViewUiAction;

    constructor(props: IShoppingCartViewProps) {
        super(props);
        this.uiAction = new ShoppingCartViewUiAction(props);
    }
    public render() {
        return (
            <>
                <Button onClick={this.uiAction.CalculationMoney}>计算金额</Button>
                <div>
                    <label>总金额</label>
                    <Input disabled={true} style={{width:"120px"}} value={this.props.GlobalStepsViewDomainStore!.calculatednumber}/>
                </div>
                <ShoppingCartTableView />
            </>
        )
    }
}