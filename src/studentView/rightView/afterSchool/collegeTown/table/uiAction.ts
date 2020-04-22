import { CollegeTownEntity } from "../entity";
import { ICollegeTownTableProps } from "./interface";

export class CollegeTownTableUiAction{

    private props : ICollegeTownTableProps;

    constructor(props:ICollegeTownTableProps){
        this.props = props;
        this.TableOnChaneg = this.TableOnChaneg.bind(this);
    }

    /**
     * 编辑保存事件
     * @param row 实体对象
     */
    public handleSave(row:CollegeTownEntity){
        const newList = [...this.props.GlobalCollegeTownDoMainStore!.List];
        const index = newList.findIndex((item:CollegeTownEntity)=>{
            return item.id===row.id
        })
        console.log("index:"+index+",row:",row)
        this.props.GlobalCollegeTownDoMainStore!.List.splice(index,1,row);
        // this.props.GlobalFirstDoMainStore!.UpdatainevioceAddress(row);
        
    }
    /**
     * 表格选中事件
     * @param selectedRowKeys 选中的数量
     * @param selectedRows 
     */
    public TableOnChaneg(selectedRowKeys:  string[] | number[], selectedRows: object[]) {
        this.props.GlobalCollegeTownDoMainStore!.tableKeys = selectedRowKeys as string[];
        this.props.GlobalCollegeTownDoMainStore!.selectRowListData = selectedRows as CollegeTownEntity[];
        console.log("选中的数据：",this.props.GlobalCollegeTownDoMainStore!.selectRowListData)
        this.props.GlobalCollegeTownDoMainStore!.selectedRowKeys = selectedRowKeys;
        // console.log("SlectedRowKey:", selectedRowKeys + ",tableKeys:" + this.tableKeys)
        this.props.GlobalCollegeTownDoMainStore!.selectedRow = selectedRowKeys.length;
        console.log("SelecredRowKeysSelecredRowKeysSelecredRowKeys",selectedRowKeys);
    }
}