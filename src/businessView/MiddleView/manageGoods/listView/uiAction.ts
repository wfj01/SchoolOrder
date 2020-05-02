import { action } from "mobx";
import { ManageGoodsDomainStore } from "../domainStore";
import { ManageGoodsEntity } from "../entity";
import { IManageGoodsViewProps } from "./interface";

export class ManageGoodsViewUiAction{
   
    /**
     * 当前操作类型
     */
    public opearatorType:"none"|"add"|"edit"|"eye";

    /**
     * 当前的弹窗标题
     */
    public modelTitle:string;
    
    private props:IManageGoodsViewProps;
    private domainStore:ManageGoodsDomainStore;

    constructor(props:IManageGoodsViewProps){
        this.domainStore = props.GlobalManageGoodsDomainStore!;
        this.addbtn = this.addbtn.bind(this);
        this.adda = this.adda.bind(this);
        this.cancel = this.cancel.bind(this);
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.onCloseClick = this.onCloseClick.bind(this);
        this.eyeClick= this.eyeClick.bind(this);
        this.props=props;
    }

        
    /**
     * 新增按钮点击
     * @param model 实体类
     */
    @action
    public addbtn(){
        this.opearatorType="add";
        this.modelTitle = "新增数据";
        this.domainStore.currentEditData = new ManageGoodsEntity();
        this.props.GlobalManageGoodsDomainStore!.DialogViewVisible = true;
    }
    
    /**
     * 新增<a>点击
     * @param model 实体类
     */
    @action
    public adda(){
        this.modelTitle = "新增数据";
        this.opearatorType = "add";
        this.domainStore.currentEditData = new ManageGoodsEntity();
        this.props.GlobalManageGoodsDomainStore!.DialogViewVisible = true;
    }

    /**
     * 编辑
     */
    @action
    public edit(){
        this.modelTitle = "编辑数据";
        this.opearatorType = "edit";
        this.props.GlobalManageGoodsDomainStore!.DialogViewVisible = true;
    }

    /**
     * 取消
     */
    @action
    public cancel(){
        this.props.GlobalManageGoodsDomainStore!.DialogViewVisible = false;
        this.opearatorType = "none";
    }

   /**
    * 保存
    * @param model 实体类
    */
    @action
    public save(model:ManageGoodsEntity){

        if (this.opearatorType==="add") {
            this.domainStore.Adddate(model);
            this.props.GlobalManageGoodsDomainStore!.DialogViewVisible = false;
        }else if (this.opearatorType==="edit") {
            this.domainStore.Update(model);
            this.props.GlobalManageGoodsDomainStore!.DialogViewVisible = false;
        }
    }

    @action
    public onCloseClick(){
        this.props.GlobalManageGoodsDomainStore!.DrawerViewVisible = false;
    }
    
    @action
    public eyeClick(){
        this.props.GlobalManageGoodsDomainStore!.DrawerViewVisible = true;
    }
}