import { observable } from "mobx";
import { IManageGoodsViewProps } from "./interface";

export class ManageGoodsViewUiAction{

    /**
     * 管理商品弹窗
     */
    @observable
    public handleVisible : boolean;


    constructor(props:IManageGoodsViewProps){
        this.handleVisible = false;
        this.handleCancel = this.handleCancel.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.showModal = this.showModal.bind(this);
    }

    public showModal(){
        this.handleVisible = true;
        
    }
    
 
    /**
     *  确定方法 
     */
    public handleOk() {
        this.handleVisible = false;
    }


    public handleCancel(){
        this.handleVisible = false;
    }
}