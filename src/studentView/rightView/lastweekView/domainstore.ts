import { message } from "antd";
import { action, observable } from "mobx";
import { requestJson } from "../../../genericComponent/requestJson";
import imgURL2 from '../../../image/fentijin.jpg';
import imgURL4 from '../../../image/Hongshaorou.jpg';
import imgURL5 from '../../../image/hongshaozaiji.jpg';
import imgURL3 from '../../../image/mapodoufu.jpg';
import imgURL1 from '../../../image/shaozahui.jpg';
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

    @observable
    public imageUrl:string;

    @observable
    public imageList:string[]
    
    constructor(){
        this.imageUrl = imgURL1;
        this.imageList = [imgURL1,imgURL2,imgURL3,imgURL4,imgURL5];
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