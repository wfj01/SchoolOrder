import { message } from "antd";
import { CollegeTownEntity } from "../entity";
import { ICollegeTownTableProps } from "./interface";

export class CollegeTownTableUiAction {

    private props: ICollegeTownTableProps;

    constructor(props: ICollegeTownTableProps) {
        this.props = props;
        this.TableOnChaneg = this.TableOnChaneg.bind(this);
        this.EyeClick = this.EyeClick.bind(this);
    }

    /**
     * 编辑保存事件
     * @param row 实体对象
     */
    public handleSave(row: CollegeTownEntity) {
        const newList = [...this.props.GlobalCollegeTownDoMainStore!.List];
        const index = newList.findIndex((item: CollegeTownEntity) => {
            return item.id === row.id
        })
        console.log("index:" + index + ",row:", row)
        this.props.GlobalCollegeTownDoMainStore!.List.splice(index, 1, row);
        // this.props.GlobalFirstDoMainStore!.UpdatainevioceAddress(row);

    }

    public EyeClick(e:React.SyntheticEvent<HTMLAnchorElement>){
        e.preventDefault();
        const id = this.getMeterTypeId(e);
        if(!id){return;};
        if (this.props.GlobalCollegeTownDoMainStore!.SelectedCardType(id)) {
            console.log("id:",id);
            const ix = this.props.GlobalCollegeTownDoMainStore!.allReportTableData.findIndex(x=>Number(x.id) === Number(id))
            console.log("ix:",ix);
            this.props.GlobalCollegeTownDoMainStore!.lengths = Number(ix);
            this.props.onEyeClick(this.props.GlobalCollegeTownDoMainStore!.currentEditCardType);
        } else {
            message.info('错误的事件参数');
        }
    }


    /**
     * 表格选中事件
     * @param selectedRowKeys 选中的数量
     * @param selectedRows 
     */
    public TableOnChaneg(selectedRowKeys: string[] | number[], selectedRows: object[]) {
        this.props.GlobalCollegeTownDoMainStore!.tableKeys = selectedRowKeys as string[];
        this.props.GlobalCollegeTownDoMainStore!.selectRowListData = selectedRows as CollegeTownEntity[];
        console.log("选中的数据：", this.props.GlobalCollegeTownDoMainStore!.selectRowListData)
        this.props.GlobalCollegeTownDoMainStore!.selectedRowKeys = selectedRowKeys;
        // console.log("SlectedRowKey:", selectedRowKeys + ",tableKeys:" + this.tableKeys)
        this.props.GlobalCollegeTownDoMainStore!.selectedRow = selectedRowKeys.length;
        console.log("SelecredRowKeysSelecredRowKeysSelecredRowKeys", selectedRowKeys);
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