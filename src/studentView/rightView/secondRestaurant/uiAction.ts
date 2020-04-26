import { observable } from "mobx";
import { ISecondRestaurantProps } from "./interface";

export class SecondRestaurantUiAction{
    @observable
    public visible:boolean = false;
    
    constructor(props:ISecondRestaurantProps){
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