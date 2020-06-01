import { observable } from "mobx";
import { IMenuViewProps } from "./interface";

export class MenuViewuiAction{
    public current: string;

    @observable
    public handlevisible:boolean;

    public props :IMenuViewProps;

    public display1:string;

    public display2:string;

    constructor(props:IMenuViewProps){
        this.display1 = "block";
        this.display2 = "none";
        this.props = props;
        this.current = "1";
        this.handlevisible = false;
        this.handleOk = this.handleOk.bind(this);
        this.handleclick = this.handleclick.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleshangjiaclick = this.handleshangjiaclick.bind(this);
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

    public handleshangjiaclick(){
        console.log("执行")

        this.display1 = "none";
        this.display2 = "block";
    }
}