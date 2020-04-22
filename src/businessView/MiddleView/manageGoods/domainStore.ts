import { message } from "antd";
import { observable } from "mobx";
import { ManageGoodsEntity } from "./entity";

export class ManageGoodsDomainStore{

    /**
     * 加载
     */
    @observable
    public IsLoading:boolean;
    
    /**
     * 集合
     */
    @observable
    public List : ManageGoodsEntity[];
    
    /**
     *  当前编辑的项目
     */
    @observable
    public currentEditItem: ManageGoodsEntity;


    constructor(){
        this.IsLoading = false;
        this.List = new Array <ManageGoodsEntity>();
        this.currentEditItem = new ManageGoodsEntity;
        this.Loadview = this.Loadview.bind(this);
        
    }

    public Loadview(){
        try{
            this.IsLoading = true;
            this.List = new Array <ManageGoodsEntity>();
            const aaa = new ManageGoodsEntity();
            aaa.id = "123";
            aaa.price = "123";
            aaa.dishname = "123";
            aaa.remarks = "123";
            aaa.score = "123";
            aaa.windows = "123";
            aaa.time = "1230;"
            this.List.push(aaa);
            this.IsLoading = false;
        }
        catch(error){
            message.error(error);
            this.IsLoading = false;
        }
    }

    /**
     * 验证数据
     * @param values 
     */
    public validate(values: ManageGoodsEntity): string | undefined {
        return undefined;
    }
}