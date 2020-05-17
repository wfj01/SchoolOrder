import { message } from "antd";
import { action } from "mobx";
import { IOrderManagementTableprops } from "./interface";

export class OrderManagementTableUiAction{
    
    private props:IOrderManagementTableprops;

    constructor(props:IOrderManagementTableprops){
        this.props = props;
        this.editClick = this.editClick.bind(this);
        this.eyeClick = this.eyeClick.bind(this);
        this.getNeighborhoodId = this.getNeighborhoodId.bind(this);
    }

    /**
     * 查看事件
     * @param e 
     */
    public eyeClick(e:React.SyntheticEvent<HTMLAnchorElement>){
        e.preventDefault();
        const id = this.getNeighborhoodId(e);
        if(!id){return;};
        console.log("我是id:",id);
        if (this.props.GlobalOrderManagementviewDoMainStore!.SelectedData(id)) {
            console.log("Number(id):",Number(id));
            const ix = this.props.GlobalOrderManagementviewDoMainStore!.allReportTableData.findIndex(x=>Number(x.id) === Number(id))
            console.log("ix:",ix);
            this.props.GlobalOrderManagementviewDoMainStore!.lengths = Number(ix);
            this.props.onEyeClick(this.props.GlobalOrderManagementviewDoMainStore!.currentEditData);
        } else {
            message.error('错误的事件参数');
        }
    }
    /**
     * 编辑事件
     * @param e 
     */
    @action
    public async editClick(e: React.SyntheticEvent<HTMLAnchorElement>) {
        e.preventDefault();
        const id = this.getNeighborhoodId(e);
        if (!id) { return; };
        console.log("我是id1111:",id);
        if (this.props.GlobalOrderManagementviewDoMainStore!.SelectedData(id)) {
            this.props.onEdit(this.props.GlobalOrderManagementviewDoMainStore!.currentEditData);
        } else {
            message.error('错误的事件参数');
        }

    }

    /**
     * 获取点击元素的ID
     * @param e 
     */
    private getNeighborhoodId(e: React.SyntheticEvent<HTMLAnchorElement>): (string | undefined) {

        const id = e.currentTarget.getAttribute("id");

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