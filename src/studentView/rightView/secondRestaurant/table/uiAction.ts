import { SecondRestaurantEntity } from "../entity";
import { IRestaurantTableProps } from "./interface";

export class SecondRestaurantTableUiAction{

    private props : IRestaurantTableProps;

    constructor(props:IRestaurantTableProps){
        this.props = props;
        this.TableOnChaneg = this.TableOnChaneg.bind(this);
    }

    /**
     * 编辑保存事件
     * @param row 实体对象
     */
    public handleSave(row:SecondRestaurantEntity){
        const newList = [...this.props.GlobalSecondDoMainStore!.List];
        const index = newList.findIndex((item:SecondRestaurantEntity)=>{
            return item.id===row.id
        })
        console.log("index:"+index+",row:",row)
        this.props.GlobalSecondDoMainStore!.List.splice(index,1,row);
        // this.props.GlobalSecondDoMainStore!.UpdatainevioceAddress(row);
        
    }
    /**
     * 表格选中事件
     * @param selectedRowKeys 选中的数量
     * @param selectedRows 
     */
    public TableOnChaneg(selectedRowKeys:  string[] | number[], selectedRows: object[]) {
        // if (selectedRowKeys.length === 0) {
        //     this.props.GlobalSecondDoMainStore!.Isdisplay = "none";
        // } else {
        //     this.props.GlobalSecondDoMainStore!.Isdisplay = "block";
        // }
        this.props.GlobalSecondDoMainStore!.tableKeys = selectedRowKeys as string[];
        this.props.GlobalSecondDoMainStore!.selectRowListData = selectedRows as SecondRestaurantEntity[];
        console.log("选中的数据：",this.props.GlobalSecondDoMainStore!.selectRowListData)
        this.props.GlobalSecondDoMainStore!.selectedRowKeys = selectedRowKeys;
        // console.log("SlectedRowKey:", selectedRowKeys + ",tableKeys:" + this.tableKeys)
        this.props.GlobalSecondDoMainStore!.selectedRow = selectedRowKeys.length;
        console.log("SelecredRowKeys",selectedRowKeys.length);
    }
}