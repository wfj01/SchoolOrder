import { observable } from "mobx";
import { IMenuViewProps } from "./interface";

export class MenuViewuiAction{
    public current: string;

    @observable
    public handlevisible:boolean;

    public props :IMenuViewProps;

    constructor(props:IMenuViewProps){
        this.props = props;
        this.current = "1";
        this.handlevisible = false;
        this.handleOk = this.handleOk.bind(this);
        this.handleclick = this.handleclick.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    public handleclick(){
        console.log("执行")

        this.handlevisible = true;
    }

    public handleCancel(){
        this.handlevisible = false;
    }
    public handleOk(){
        this.handlevisible = false;
    }
 

}