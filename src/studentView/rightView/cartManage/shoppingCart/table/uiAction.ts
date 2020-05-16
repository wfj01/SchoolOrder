import { message } from "antd";
import { action } from "mobx";
import { ShoppingCartViewEntity } from "../../entity";
import { IShoppingCartTableViewProps } from "./interface";

export class ShoppingCartViewTableUiAction{


    private props:IShoppingCartTableViewProps;

    constructor(props:IShoppingCartTableViewProps){
        this.props = props;
        this.handleSave = this.handleSave.bind(this);
        this.deleteClick = this.deleteClick.bind(this);
    }

    /**
     * 编辑保存事件
     * @param row 实体对象
     */
    public handleSave(row:ShoppingCartViewEntity){
        const newList = [...this.props.GlobalStepsViewDomainStore!.allReportTableData];
        const index = newList.findIndex((item:ShoppingCartViewEntity)=>{
            return item.id===row.id
        })
        console.log("index:"+index+",row:",row)
        this.props.GlobalStepsViewDomainStore!.allReportTableData.splice(index,1,row);
        this.props.GlobalStepsViewDomainStore!.UpdataNumber(row);
    }

    /**
     * 删除事件
     * @param e 
     */
    @action
    public async deleteClick(value: string, e: React.SyntheticEvent<HTMLAnchorElement>) {
        console.log("执行")
        const deleteid = value;
        if (!deleteid) {
            message.error("无效的对象id");
            return;
        }
        const ix = deleteid.indexOf('_');
        if (ix < 0) {
            message.error('无效的对象id');
            return;
        }
        const id = Number(deleteid.substring(ix + 1));
        console.log("执行执行",deleteid)
        console.log("id:",id);
        if (!id) { return; }
        console.log("1111");
        this.props.GlobalStepsViewDomainStore!.DeleteMeterType(id);
    }
}