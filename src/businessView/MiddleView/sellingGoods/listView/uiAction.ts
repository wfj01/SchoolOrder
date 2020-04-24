import { exportExcel } from "../exportExcel";
import { ISellingGoodsViewProps } from "./interface";

export class ListViewUiAction{

    public props:ISellingGoodsViewProps;

    constructor(props:ISellingGoodsViewProps){
        this.props = props;
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    public handleOnClick() {
        console.log("导出");
        exportExcel(this.props.GlobalSellGoodsDoMainStore!.tableColumns!, this.props.GlobalSellGoodsDoMainStore!.allReportTableData, "在卖商品明细表.xlsx")
    }
}