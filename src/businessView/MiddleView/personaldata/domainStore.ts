import { message } from "antd";
import { action, observable } from "mobx";
import { requestJson } from "../../../genericComponent/requestJson";
import { MiddleFromViewEntity } from "./entity";

export class PersonaldataDoMainStore{

    /**
     * 返回的数据集合
     */
    @observable
    public List:MiddleFromViewEntity[];

    /**
     * 指定显示的数组中的数据
     */
    @observable
    public lengths:number;

    /**
     * 是否加载
     */
    @observable
    public Isloading:boolean;


    constructor(){
        this.List = [];
        this.lengths = 0;
        this.Isloading = false;
    }

    @action
    public async loaddata(){
        try {
            this.Isloading = true;
            const res = await requestJson("/api/LoginPage/personaldata",
                {
                    method: "GET"
                })
                if (res.rtnCode !== 0) {
                    message.error('暂无数据');
                    this.Isloading = false;
                    return;
                }
            const data = res.data.table as any[];
            this.List = data;
            console.log("ListListListListList:",this.List);
            message.success("加载成功");
            this.Isloading = false;

        }
        catch (error) {
            message.error(error);
            this.Isloading = false;

        }
    }
}