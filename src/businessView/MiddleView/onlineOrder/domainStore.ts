import { message } from "antd";
import { action, observable } from "mobx";
import { requestJson } from "../../../genericComponent/requestJson";
import { OnlineOrderTableEntity } from "./entity";

export class OnlineOrderDoMainStore{

    /**
     * 是否加载表格数据
     */
    @observable
    public Isloading:boolean;

    /**
     * 未确认订单的数据集合
     */
    @observable
    public allReportTableData1:OnlineOrderTableEntity[];

    /**
     * 已确认订单的数据集合
     */
    @observable
    public allReportTableData2:OnlineOrderTableEntity[];

    /**
     * 已完成订单的数据集合
     */
    @observable
    public allReportTableData3:OnlineOrderTableEntity[];

    constructor(){
        this.Isloading = false;
        this.allReportTableData1 = new Array<OnlineOrderTableEntity>();
        this.allReportTableData2 = new Array<OnlineOrderTableEntity>();
        this.allReportTableData3 = new Array<OnlineOrderTableEntity>();
    }

    /**
     * 未确认加载数据
     */
    @action
    public async Loaddata() {
        try {
            this.Isloading = true;
            const res = await requestJson("/api/OnlineOrder/queryUser",
                {
                    method: "GET"
                })
            if (res.rtnCode !== 0) {
                message.error('暂无数据');
                this.Isloading = false;
                return;
            }
            console.log("res.date:", res.data.table);
            const data = res.data.table as any[];
            this.allReportTableData1 = data;
            this.Isloading = false;
        }
        catch(error){
            message.error(error);
        }
    }

    /**
     * 已确认订单的加载 
     */
    @action
    public async Loaddataa() {
        try {
            this.Isloading = true;
            const res = await requestJson("/api/OnlineOrder/queryUsera",
                {
                    method: "GET"
                })
            if (res.rtnCode !== 0) {
                message.error('暂无数据');
                this.Isloading = false;
                return;
            }
            console.log("res.date:", res.data.table);
            const data = res.data.table as any[];
            this.allReportTableData2 = data;
            this.Isloading = false;
        }
        catch(error){
            message.error(error);
        }
    }

    /**
     * 已完成订单的加载
     */
    @action
    public async Loaddatab() {
        try {
            this.Isloading = true;
            const res = await requestJson("/api/OnlineOrder/queryUserb",
                {
                    method: "GET"
                })
            if (res.rtnCode !== 0) {
                message.error('暂无数据');
                this.Isloading = false;
                return;
            }
            console.log("res.date:", res.data.table);
            const data = res.data.table as any[];
            this.allReportTableData3 = data;
            this.Isloading = false;
        }
        catch(error){
            message.error(error);
        }
    }

    /**
     * 确定订单事件
     * @param id 当前操作数据下标
     */
    @action
    public async Confirmorder(id:string){
        try
        {
            this.Isloading = true;
            const res = await requestJson("/api/OnlineOrder/confirmorder?id="+id,
            {
                method:"GET",
            });
            if (res.rtnCode !== 0) {
                this.Isloading = false;
                message.error("确认失败：" + res.rtnMsg);
            } else {
                this.Loaddata();
                this.Isloading = false;
                message.success("确认成功");
            }
        } catch (error) {
            message.error("确认失败：" + error);
            this.Isloading = false;
        }
    }

    /**
     * 确定订单事件
     * @param id 当前操作数据下标
     */
    @action
    public async Completedmorder(id:string){
        try
        {
            this.Isloading = true;
            const res = await requestJson("/api/OnlineOrder/Completemorder?id="+id,
            {
                method:"GET",
            });
            if (res.rtnCode !== 0) {
                this.Isloading = false;
                message.error("确认失败：" + res.rtnMsg);
            } else {
                this.Loaddataa();
                this.Isloading = false;
                message.success("确认成功");
            }
        } catch (error) {
            message.error("确认失败：" + error);
            this.Isloading = false;
        }
    }
}