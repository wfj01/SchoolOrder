import { observable } from "mobx";
import { IFirstRestaurantProps } from "./interface";

export class FirstRestaurantUiAction{
    @observable
    public visible:boolean = false;
    
    constructor(props:IFirstRestaurantProps){
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