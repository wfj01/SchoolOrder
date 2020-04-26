import { observable } from "mobx";
import { ISouthSnackProps } from "./interface";

export class SouthSnackUiAction{
    @observable
    public visible:boolean = false;
    
    constructor(props:ISouthSnackProps){
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