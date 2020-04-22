import { message } from "antd";
import { action, observable } from "mobx";
import { requestJson } from "../../../genericComponent/requestJson";
import { LastWeekEntity } from "./entity";

export class LastWeekDomainStore{
    
    /**
     * 数据集合
     */
    @observable
    public List:LastWeekEntity[];

    /**
     * 是否加载
     */
    @observable
    public Isloading: boolean;

    @observable
    public lengths: number;


    /**
     *  当前编辑的项目
     */
    @observable
    public currentEditItem: LastWeekEntity;

    
    constructor(){
        this.Isloading = false;
        this.List = [];
        this.lengths = 0;
    }

    /**
     * 加载数据
     */
    @action
    public async Loadate() {
        this.Isloading = true;
        const res = await requestJson("/api/Lastweek/queryUser",
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