import { IOrderManagementprops } from "./interface";

export class OrderManagementUiAction{

    private props:IOrderManagementprops;

    constructor(props:IOrderManagementprops){
        this.props = props;
        this.RefreshClick = this.RefreshClick.bind(this);
    }
    
    public RefreshClick(){
        this.props.GlobalOrderManagementDoMainStore!.LoadData();
    }
}