import { IOrderManagementTableprops } from "./interface";

export class OrderManagementTableUiAction{
    
    private props:IOrderManagementTableprops;

    constructor(props:IOrderManagementTableprops){
        this.props = props;
        this.loaddata = this.loaddata.bind(this);
    }

    public loaddata(){
        this.props.GlobalOrderManagementDoMainStore!.LoadData();
    }
}