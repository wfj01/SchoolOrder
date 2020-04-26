import { observable } from "mobx";
import { ICollegeTownProps } from "./interface";

export class CollegeTownUiAction{
    @observable
    public visible:boolean = false;
    
    constructor(props:ICollegeTownProps){
        this.onEyeClick = this.onEyeClick.bind(this);
        this.onCloseClick = this.onCloseClick.bind(this);
    }

    public onEyeClick(){
        this.visible = true;
    }

    public onCloseClick(){
        this.visible = false;
    }
}