import { message } from "antd";
import { action, observable } from "mobx";
import { SellingGoodsEntity } from "./entity";

export class SellGoodsDoMainStore{

    /**
     * 加载
     */
    @observable
    public IsLoading:boolean;

    /**
     * 集合
     */
    @observable
    public List:SellingGoodsEntity[]

    public tableColumns=[
        {dataIndex: 'ID',key: 'ID',title: 'ID',width: "10%"},
        {dataIndex: 'Dishname',key: 'Dishname',title: '菜名',width: "10%"},
        {dataIndex: 'Price',key: 'Price',title: '价格',width: "10%"},
        {dataIndex: 'Score',key: 'Score',title: '得分',width: '10%'},
        {dataIndex: "Time",key: 'Time',title: "时间",width: '10%'},
        {dataIndex: "Windows",key: 'Windows',title: "窗口",width: "10%"},
        {dataIndex: 'Explain',key: 'Explain',title: '说明',width: '10%'}
    ]
    constructor(){
        this.IsLoading = false;
        this.List = new Array<SellingGoodsEntity>();
        this.Loadview = this.Loadview.bind(this);
    }

    @action
    public Loadview(){
        try{
            this.IsLoading = true;
            this.List = new Array <SellingGoodsEntity>();
            const aaa = new SellingGoodsEntity();
            aaa.ID = "123";
            aaa.Price = "123";
            aaa.Dishname = "123";
            aaa.Explain = "123";
            aaa.Score = "123";
            aaa.Windows = "123";
            aaa.Time = "1230;"
            this.List.push(aaa);
            this.IsLoading = false;
        }
        catch(error){
            message.error(error);
            this.IsLoading = false;
        }
    }

}