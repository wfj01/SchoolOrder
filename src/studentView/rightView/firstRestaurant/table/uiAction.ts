import { message } from "antd";
import { FirstRestaurantEntity } from "../entity";
import { IRestaurantTableProps } from "./interface";

export class RestaurantTableUiAction{

    private props : IRestaurantTableProps;

    constructor(props:IRestaurantTableProps){
        this.props = props;
        this.TableOnChaneg = this.TableOnChaneg.bind(this);
        this.EyeClick = this.EyeClick.bind(this);
    }

    /**
     * 编辑保存事件
     * @param row 实体对象
     */
    public handleSave(row:FirstRestaurantEntity){
        const newList = [...this.props.GlobalFirstDoMainStore!.List];
        const index = newList.findIndex((item:FirstRestaurantEntity)=>{
            return item.id===row.id
        })
        console.log("index:"+index+",row:",row)
        this.props.GlobalFirstDoMainStore!.List.splice(index,1,row);
        // this.props.GlobalFirstDoMainStore!.UpdatainevioceAddress(row);
        
    }
    public EyeClick(e:React.SyntheticEvent<HTMLAnchorElement>){
        e.preventDefault();
        const id = this.getMeterTypeId(e);
        if(!id){return;};
        if (this.props.GlobalFirstDoMainStore!.SelectedCardType(id)) {
            console.log("id:",id);
            const ix = this.props.GlobalFirstDoMainStore!.allReportTableData.findIndex(x=>Number(x.id) === Number(id))
            console.log("ix:",ix);
            this.props.GlobalFirstDoMainStore!.lengths = Number(ix);
            this.props.onEyeClick(this.props.GlobalFirstDoMainStore!.currentEditCardType);
        } else {
            message.info('错误的事件参数');
        }
    }

    /**
     * 表格选中事件
     * @param selectedRowKeys 选中的数量
     * @param selectedRows 
     */
    public TableOnChaneg(selectedRowKeys:  string[] | number[], selectedRows: object[]) {
        // if (selectedRowKeys.length === 0) {
        //     this.props.GlobalFirstDoMainStore!.Isdisplay = "none";
        // } else {
        //     this.props.GlobalFirstDoMainStore!.Isdisplay = "block";
        // }
        this.props.GlobalFirstDoMainStore!.tableKeys = selectedRowKeys as string[];
        this.props.GlobalFirstDoMainStore!.selectRowListData = selectedRows as FirstRestaurantEntity[];
        console.log("选中的数据：",this.props.GlobalFirstDoMainStore!.selectRowListData)
        this.props.GlobalFirstDoMainStore!.selectedRowKeys = selectedRowKeys;
        // console.log("SlectedRowKey:", selectedRowKeys + ",tableKeys:" + this.tableKeys)
        this.props.GlobalFirstDoMainStore!.selectedRow = selectedRowKeys.length;
        console.log("SelecredRowKeysSelecredRowKeysSelecredRowKeys",selectedRowKeys);
    }

    private getMeterTypeId(e: React.SyntheticEvent<HTMLAnchorElement>): (string | undefined) {

        const id = e.currentTarget.getAttribute("id");
        console.log(id);
        if (!id) {
            message.info("无效的对象id")
            return undefined;
        }
        const index = id.indexOf("_");
        if (index < 0) {
            message.info("无效的对象id")
            return undefined;
        }
        try {
            return id.substring(index + 1);
        } catch (error) {
            message.info(error.message);
            return undefined;
        }
    }
}