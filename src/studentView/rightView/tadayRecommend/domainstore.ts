import { message } from "antd";
import { action, observable } from "mobx";
import { requestJson } from "../../../genericComponent/requestJson";
import imgURL2 from '../../../image/fentijin.jpg';
import imgURL1 from '../../../image/hongshaorou.jpg';
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

    @observable
    public imageUrl:string;

    @observable
    public imageList:string[]
    
    
    constructor(){
        this.imageUrl = imgURL1;
        this.imageList=[imgURL1,imgURL2]
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
            message.success('最后');
            this.imageUrl = imgURL2;
            return;
        }
        else {
            console.log("lengths1:",this.lengths);
            this.lengths = this.lengths + 1;
            this.imageUrl = this.imageList[this.lengths];
            console.log("lengths2:",this.lengths);
            this.Loadate();
        }
    }

    public LastClcik() {
        console.log("lengths:",this.lengths);

        if ((this.lengths-1) < 0) {
            this.imageUrl = imgURL1;
            return;
        }
        else {
            this.lengths = this.lengths - 1;
            this.imageUrl = this.imageList[this.lengths];
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
            message.error('暂无数据');
            this.Isloading = false;
            return;
        }
        const data = res.data.table;
        this.List = data;
        this.Isloading = false;
    }
    /**
     * 更新
     */
    public async Update(model: TadayRecommendEntity) {
        try {
            if (!this.Isloading) {
                this.Isloading = true;
            }
            const res = await requestJson("/api/Business/updatedate",
                {
                    method: "POST",
                    body: JSON.stringify(model),
                    headers: { "content-type": "application/json" }
                });
            if (res.rtnCode !== 0) {
                message.error("更新失败：" + res.rtnMsg);
                this.Isloading = false;
            } else {
                const jsonList = res.data as TadayRecommendEntity[];

                if (this.List.length > 0) {
                    this.List.splice(0, this.List.length);
                }
                this.List.push(...jsonList);

                this.Isloading = false;
                message.success("更新成功");
            }
        } catch (error) {
            message.error("更新失败：" + error);
            this.Isloading = false;
        }
    }
}