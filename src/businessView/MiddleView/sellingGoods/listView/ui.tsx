import { Button } from "antd";
import { inject, observer } from "mobx-react";
import React from "react";
import { FlexAlign } from "../../../../genericComponent/layout/flexAlign/flexAlign";
import { VerThr } from "../../../../genericComponent/layout/gridBox/verThr/verThr";
import { PaginationView } from "../pagination";
import { SellingGoodsTable } from "../table/ui";
import { ISellingGoodsViewProps } from "./interface";
import { ListViewUiAction } from "./uiAction";

/**
 * 在卖商品视图
 */
@inject("GlobalSellGoodsDoMainStore")
@observer
export class SellingGoodsView extends React.Component<ISellingGoodsViewProps>{
    private uiAction: ListViewUiAction;

    constructor(props: ISellingGoodsViewProps) {
        super(props);
        this.uiAction = new ListViewUiAction(props);
    }


    public render() {
        return (
            <VerThr>
                <VerThr.top style={{ padding: '8px 6px 8px 8px' }}>
                    <Button type="primary" onClick={this.uiAction.handleOnClick}>导出</Button>
                </VerThr.top>
                <VerThr.middle>
                    <SellingGoodsTable />
                </VerThr.middle>
                <VerThr.bottom>
                    <FlexAlign xAlign="between">
                        <div style={{ textAlign: "right", paddingRight: "12px", width: '450px' }}>
                            <PaginationView GlobalSellGoodsDoMainStore={this.props.GlobalSellGoodsDoMainStore!} />
                        </div>
                    </FlexAlign>
                </VerThr.bottom>
            </VerThr>
        )
    }
}