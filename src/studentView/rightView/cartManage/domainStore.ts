import { message } from "antd";
import { action, observable } from "mobx";
import { requestJson } from "../../../genericComponent/requestJson";
import { ShoppingCartViewEntity } from "./entity";

export class StepsViewDomainStore {

    /**
     * 总数据
     */
    @observable
    public allReportTableData: ShoppingCartViewEntity[];

    /**
     * 加载
     */
    @observable
    public isLoading: boolean;

    /**
     * 表格的Key值
     */
    @observable
    public tableKeys: string[];

    /**
     * 选定行的数据
     */
    @observable
    public selectRowListData: ShoppingCartViewEntity[];

    /**
     * 表格第一个数
     */
    @observable
    public firstnumber: number;

    /**
     * 第二个数
     */
    @observable
    public secondnumber: number;

    /**
     * 计算得出的数
     */
    @observable
    public calculatednumber: number;

    /**
     * 得到的集合
     */
    @observable
    public List: any[];

    public element: any;

    /**
     * 学号
     */
    @observable
    public studentid:string;

    /**
     * 顾客姓名
     */
    @observable
    public studentName:string;

    /**
     * 顾客地址
     */
    @observable
    public studentAddress:string;

    /**
     * 顾客电话
     */
    @observable
    public studentPhone:string;

    /**
     * 确认订餐弹窗是否显示
     */
    @observable
    public ShoppingModelvisible:boolean;

    constructor() {
        this.studentid = "";
        this.studentName="";
        this.studentAddress = "";
        this.studentPhone ="";
        this.firstnumber = 0;
        this.secondnumber = 0;
        this.calculatednumber = 0;
        this.element = [];
        this.List = [];
        this.allReportTableData = [];
        this.tableKeys = [];
        this.isLoading = false;
        this.selectRowListData = [];
        this.ShoppingModelvisible = false;
    }

    /**
     * 获取行下标
     * @param record 
     * @param index 
     */
    public getRowIndex(record: ShoppingCartViewEntity): string {
        return record.id;
    }

    /**
     * 计算金额
     */
    public CalculationMoney() {
        this.List.forEach(element => {
            this.calculatednumber +=element;
        });
    }

    /**
     * 加载数据
     */
    @action
    public async LoadData() {
        try {
            this.isLoading = true;
            const res = await requestJson("/api/Order/queryUser?studentid="+this.studentid,
                {
                    method: "GET"
                })
            if (res.rtnCode !== 0) {
                console.log("res.date:", res.data.table);
                message.error('暂无数据');
                this.isLoading = false;
                return;
            }
            this.allReportTableData = res.data.table as any[];
            if(this.allReportTableData.length>0)
            {
                this.allReportTableData.forEach(element => {
                    this.firstnumber = Number(element.price);
                    this.secondnumber = Number(element.number);
                    this.calculatednumber = (this.firstnumber) * (this.secondnumber)
                    this.List.push(this.calculatednumber);
                });
            }
            else
            {   
                this.isLoading = true;
                message.error("暂无数据");
            }
            this.isLoading = false;
        }

        catch (error) {
            message.error(error);
            this.isLoading = false;
            return;
        }
    }

    /**
     * 可编辑表格的保存
     */
    public async UpdataNumber(item: ShoppingCartViewEntity) {
        try {
            console.log("this.selectRowListData:", this.selectRowListData);
            const res: any = await requestJson("/api/Order/updatanumber",
                {
                    method: "POST",
                    body: JSON.stringify(item),
                    headers: { "content-type": "application/json" }
                }
            )
            if (res.rtnCode !== 0) {
                message.error(res.rtnMsg);
            }
            this.LoadData();
            return res;
        } catch (error) {
            return { rtnCode: 1, rtnMsg: error.toString() }
        }
    }

    /**
     * 删除订单表的数据
     * @param id 
     */
    @action
    public async DeleteMeterType(id: number) {
        try {
            this.isLoading = true;
            const res = await requestJson("/api/Order/deleteorder?id=" + id,
                {
                    method: "GET",
                });
            if (res.rtnCode !== 0) {
                this.isLoading = false;
                message.error("删除失败：" + res.rtnMsg);
            } else {
                this.LoadData();
                this.isLoading = false;
                message.success("删除成功");
            }
        } catch (error) {
            message.error("删除失败：" + error);
            this.isLoading = false;
        }
    }

    /**
     * 提交订单事件
     */
    @action
    public async Confirmorder(){
        try{
        console.log("this.List:",this.allReportTableData);
        this.isLoading = true;
        const res: any = await requestJson("/api/Order/confirmorder?studentid="+this.studentid+"&StudentName="+this.studentName
        +"&StudentAddress="+this.studentAddress+"&StudentPhone="+this.studentPhone,
                {
                    method: "POST",
                    body: JSON.stringify(this.allReportTableData),
                    headers: { "content-type": "application/json" }
                }
            )
            if (res.rtnCode !== 0) {
                message.info(res.rtnMsg);
                this.isLoading = false;
            }
            this.LoadData();
            this.isLoading = false; 
            return res;
        } catch (error) {
            this.isLoading = false;
            return { rtnCode: 1, rtnMsg: error.toString() }
        }
    }

    

}