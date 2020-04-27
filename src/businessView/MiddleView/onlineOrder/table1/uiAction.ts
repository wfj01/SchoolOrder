import { message } from "antd";
import { IUnidentifiedOrderTableProps } from "./interface";

export class UnidentifiedOrderTableUiAction{

    private props:IUnidentifiedOrderTableProps;

    constructor(props:IUnidentifiedOrderTableProps){
        this.props = props;
        this.handleAction = this.handleAction.bind(this);
    }

    public handleAction(value: string, e: React.SyntheticEvent<HTMLAnchorElement>){
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
        const id = deleteid.substring(ix + 1);
        console.log("执行执行",deleteid)
        console.log("id:",id);
        if (!id) { return; }
        console.log("执行到这里了！");
        this.props.GlobalOnlineOrderDoMainStore!.Confirmorder(id); 
    }
}