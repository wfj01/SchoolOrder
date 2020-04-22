import { message } from "antd";
import { action, observable } from "mobx";
import { requestJson } from "../../../genericComponent/requestJson";
import { TadayRecommendEntity } from "./entity";

export class TadayRecommendDomainStore{
    
    /**
     * 数据集合
     */
    @observable
    public List:TadayRecommendEntity[];

    /**
     * 是否加载
     */
    @observable
    public Isloading: boolean;

    @observable
    public lengths: number;

    /**
     * 客户总数
     */
    @observable
    public customerCount:number;
    
    /**
     * 每页数据条数
     */
    @observable
    public PageSize:number;

    /**
     * 每页数据条数
     */
    @observable
    public PageIndex:number;

    /**
     *  当前编辑的项目
     */
    @observable
    public currentEditItem: TadayRecommendEntity;

    
    constructor(){
        this.Isloading = false;
        this.List = [];
        this.customerCount = 0;
        this.PageSize = 20;
        this.PageIndex =1;
        this.lengths = 0;
    }

    public NextClick() {
        console.log("lengths:",this.lengths);
        if ((this.lengths+1)===this.List.length) {
            message.info('最后');
            return;
        }
        else {
            console.log("lengths1:",this.lengths);
            this.lengths = this.lengths + 1;
            console.log("lengths2:",this.lengths);
            this.Loadate();
        }
    }

    public LastClcik() {
        console.log("lengths:",this.lengths);

        if ((this.lengths-1) < 0) {
            message.info('第一');
            return;
        }
        else {
            this.lengths = this.lengths - 1;
            this.Loadate();
        }
    }

    /**
     * 加载数据
     */
    @action
    public async Loadate() {
        this.Isloading = true;
        const res = await requestJson("/api/TadayRecommend/queryUser",
            {
                method: "GET"
            })
        if (res.rtnCode !== 0) {
            message.info('暂无数据');
            this.Isloading = false;
            return;
        }
        const data = res.data.table;
        this.List = data;
        this.Isloading = false;
    }
}