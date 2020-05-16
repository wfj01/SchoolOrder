import { message } from "antd";
import { SouthSnackEntity } from "../entity";
import { ISouthSnackTableProps } from "./interface";

export class SouthSnackTableUiAction{

    private props : ISouthSnackTableProps;

    constructor(props:ISouthSnackTableProps){
        this.props = props;
        this.TableOnChaneg = this.TableOnChaneg.bind(this);
        this.EyeClick = this.EyeClick.bind(this);
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

    public EyeClick(e:React.SyntheticEvent<HTMLAnchorElement>){
        e.preventDefault();
        const id = this.getMeterTypeId(e);
        if(!id){return;};
        if (this.props.GlobalSouthSnackDoMainStore!.SelectedCardType(id)) {
            console.log("id:",id);
            const ix = this.props.GlobalSouthSnackDoMainStore!.allReportTableData.findIndex(x=>Number(x.id) === Number(id))
            console.log("ix:",ix);
            this.props.GlobalSouthSnackDoMainStore!.lengths = Number(ix);
            this.props.onEyeClick(this.props.GlobalSouthSnackDoMainStore!.currentEditCardType);
        } else {
            message.error('错误的事件参数');
        }
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

    private getMeterTypeId(e: React.SyntheticEvent<HTMLAnchorElement>): (string | undefined) {

        const id = e.currentTarget.getAttribute("id");
        console.log(id);
        if (!id) {
            message.error("无效的对象id")
            return undefined;
        }
        const index = id.indexOf("_");
        if (index < 0) {
            message.error("无效的对象id")
            return undefined;
        }
        try {
            return id.substring(index + 1);
        } catch (error) {
            message.error(error.message);
            return undefined;
        }
    }
}