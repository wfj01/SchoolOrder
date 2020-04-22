import { SouthSnackEntity } from "../entity";
import { ISouthSnackTableProps } from "./interface";

export class SouthSnackTableUiAction{

    private props : ISouthSnackTableProps;

    constructor(props:ISouthSnackTableProps){
        this.props = props;
        this.TableOnChaneg = this.TableOnChaneg.bind(this);
    }

    /**
     * 编辑保存事件
     * @param row 实体对象
     */
    public handleSave(row:SouthSnackEntity){
        const newList = [...this.props.GlobalSouthSnackDoMainStore!.List];
        const index = newList.findIndex((item:SouthSnackEntity)=>{
            return item.id===row.id
        })
        console.log("index:"+index+",row:",row)
        this.props.GlobalSouthSnackDoMainStore!.List.splice(index,1,row);
        // this.props.GlobalSouthSnackDoMainStore!.UpdatainevioceAddress(row);
        
    }
    /**
     * 表格选中事件
     * @param selectedRowKeys 选中的数量
     * @param selectedRows 
     */
    public TableOnChaneg(selectedRowKeys:  string[] | number[], selectedRows: object[]) {
        // if (selectedRowKeys.length === 0) {
        //     this.props.GlobalSouthSnackDoMainStore!.Isdisplay = "none";
        // } else {
        //     this.props.GlobalSouthSnackDoMainStore!.Isdisplay = "block";
        // }
        this.props.GlobalSouthSnackDoMainStore!.tableKeys = selectedRowKeys as string[];
        this.props.GlobalSouthSnackDoMainStore!.selectRowListData = selectedRows as SouthSnackEntity[];
        console.log("选中的数据：",this.props.GlobalSouthSnackDoMainStore!.selectRowListData)
        this.props.GlobalSouthSnackDoMainStore!.selectedRowKeys = selectedRowKeys;
        // console.log("SlectedRowKey:", selectedRowKeys + ",tableKeys:" + this.tableKeys)
        this.props.GlobalSouthSnackDoMainStore!.selectedRow = selectedRowKeys.length;
        console.log("SelecredRowKeys",selectedRowKeys.length);
    }
}