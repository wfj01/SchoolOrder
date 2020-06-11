import { message } from "antd";
import { ClickParam } from "antd/lib/menu";
import { action, observable } from "mobx";
import { requestJson } from "../../../genericComponent/requestJson";
import { PageFormEntity, ShoppingCartViewEntity } from "./entity";

export class StepsViewDomainStore {

    /**
     * 总数据
     */
    @observable
    public allReportTableData: ShoppingCartViewEntity[];

    @observable
    public allReportTableDataa: any[];

    @observable
    public list1:any[];

    @observable
    public allReportTableDatauser:PageFormEntity[];

    /**
     * 选定的行
     */
    @observable
    public selectedRowKeys: string[] | number[];

    /**
     * 展示数据
     */
    @observable
    public showReportTableData: ShoppingCartViewEntity[];
    /**
     * 结束号码
     */
    @observable
    public endNo: string;

    /**
     * 总数
     */
    @observable
    public customerCount: number;

    /**
     * 当前页下标
     */
    @observable
    public PageIndex: number;

    /**
     * 每页数据条数
     */
    @observable
    public PageSize: number;

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

    @observable
    public thirednumber:string;

    /**
     * 计算得出的数
     */
    @observable
    public calculatednumber: number;

    @observable
    public calculatednumber1: number;

    @observable
    public calculatedstring :string;

    @observable
    public calculatedTime:number;
    @observable
    public calculatedTime1:number;

    @observable
    public calculatedTimeNum:string;
    @observable
    public calculatedTimeNumtext:string;
    
    /**
     * 得到的集合
     */
    @observable
    public List: any[];

    @observable
    public List1:any[];

    @observable
    public List2:any[];

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

    @observable
    public showdata:PageFormEntity[];

    constructor() {
        this.studentid = "";
        this.studentName="";
        this.studentAddress = "";
        this.studentPhone ="";
        this.firstnumber = 0;
        this.secondnumber = 0;
        this.calculatednumber = 0;
        this.calculatedstring = "";
        this.calculatedTime = 0;
        this.element = [];
        this.List = [];
        this.List1 = [];
        this.List2 =[];
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
        
        console.log("calculatedstring:",this.calculatedstring );
    }

    public paginationOnChange = (page: number, pageSize?: number | undefined) => {
        this.PageIndex = page;
        this.setShowTableData();
        console.log("显示数据");

    }

    public paginationPageSizeMenuOnClick = (param: ClickParam) => {
        this.PageSize = parseInt(param.key, 10);
        this.setShowTableData();
        console.log("显示数据");

    }
    /** 根据当前页码和显示数设置展示数据 */
    public setShowTableData() {
        this.showReportTableData = this.allReportTableData.slice(0, -1)
            .slice(this.PageSize * (this.PageIndex - 1), this.PageSize * this.PageIndex)
            // .concat(this.showReportTableData.slice(-1));
        console.log("显示数据");
    }

    /**
     * 加载数据
     */
    @action
    public async Loaddata() {
        try {
            this.isLoading = true;
            const res = await requestJson("/api/MyMessage/queryUser?studentid=" + "201710033092",
                {
                    method: "GET"
                })
            if (res.rtnCode !== 0) {
                message.error('暂无数据');
                this.isLoading = false;
                return;
            }
            const data = res.data.table as any[];
            this.showdata = data;
            this.allReportTableDatauser = this.showdata;
            this.studentid = this.allReportTableDatauser[0].studentid;
            this.studentName =  this.allReportTableDatauser[0].studentname;
            this.studentAddress = this.allReportTableDatauser[0].address;
            this.studentPhone = this.allReportTableDatauser[0].telephone;
            this.isLoading = false;
        }
        catch (error) {
            message.error(error);
            this.isLoading = false;
        }
    }

    /**
     * 加载数据
     */
    @action
    public async LoadData() {
        this.calculatedstring="";
        this.calculatednumber = 0;
        this.calculatedTime = 0;
        this.calculatedTimeNum= "";
        this.calculatedTimeNumtext = "";
        this.calculatedTimeNum =""
        this.List = [];
        this.List1 = []; 
        try {
            this.isLoading = true;
            const res = await requestJson("/api/Order/queryUser?studentid="+"201710033092",
                {
                    method: "GET"
                })
            if (res.rtnCode !== 0) {
                console.log("res.date:", res.data.table);
                message.error('当前页面暂无数据，请继续订餐吧'+'😊');
                this.isLoading = false;
                return;
            }
            this.allReportTableData = res.data.table as any[];
            this.showReportTableData = this.allReportTableData;
            if(this.allReportTableData.length>0)
            {
                this.allReportTableData.forEach(element => {
                    this.firstnumber = Number(element.price);
                    this.secondnumber = Number(element.number);
                    this.thirednumber = element.dishname;
                    this.calculatedTime1 = parseInt(element.time,10);
                    this.calculatednumber1 = (this.firstnumber) * (this.secondnumber);
                    this.List.push(this.calculatednumber1,);
                    this.List1.push(this.thirednumber);
                    this.List2.push(this.calculatedTime1);
                });
                console.log(" this.List", this.List.length)
                console.log("calculatednumber",this.calculatednumber,)
                this.List.forEach(element => {
                    this.calculatednumber +=element;
                });
                if(this.List2.length<3){
                    this.calculatednumber = this.calculatednumber;
                }
                else{
                    this.calculatednumber =this.calculatednumber *0.85;
                }
                this.calculatedTimeNumtext = ((this.calculatednumber)).toString()+"元";

                console.log("this.List2",this.List2);
                console.log("thiscalculatedTimeNum",this.calculatedTime)
                this.List2.forEach(element=>{
                    this.calculatedTime += element;
                })
                if(this.List2.length<3){
                    this.calculatedTime = this.calculatedTime;
                }
                else{
                    this.calculatedTime =this.calculatedTime *0.6;
                }
                this.calculatedTimeNum = ((this.calculatedTime)).toString()+"分钟";
    

                console.log("this.calculatedTimeNum",this.calculatedTimeNum)
                this.List1.forEach(element=>{
                    this.calculatedstring +=element;
                    this.calculatedstring = (this.calculatedstring)+("*")+(this.secondnumber);
                })
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
     * 加载数据
     */
    public async LoadDataa() {
        try {
            const res = await requestJson("/api/Order/ordermanage?studentid=" + "201710033092",
                {
                    method: "GET"
                })
            if (res.rtnCode !== 0) {
                message.error('暂无数据');
                return;
            }
            console.log("res.date:", res.data.table);
            this.allReportTableDataa = res.data.table as any[];
            this.allReportTableDataa.forEach(element=>{
                this.list1.push(element.id)
            })

            console.log("list1list1list1list1list1:",this.list1);
        }
        catch (error) {
            message.error(error);
            return;
        }
    }
    /**
     * 提交订单事件
     */
    @action
    public async Confirmorder(){
        try{
        this.LoadDataa();
        console.log("this.List:",this.allReportTableData);
        this.isLoading = true;
        const res: any = await requestJson("/api/Order/confirmorder?Studentid="+this.studentid+"&StudentName="+this.studentName
        +"&StudentAddress="+this.studentAddress+"&StudentPhone="+this.studentPhone,
                {
                    method: "POST",
                    body: JSON.stringify(this.allReportTableData),
                    headers: { "content-type": "application/json" }
                }
            )
            if (res.rtnCode !== 0) {
                message.error(res.rtnMsg);
                this.isLoading = false;
            }
            message.success("提交订单成功，请耐心等待"+"✈✈")
            this.LoadData();
            this.allReportTableData =[];
            this.calculatednumber=0;
            this.calculatedstring="";
            this.isLoading = false; 
            return res;
        } catch (error) {
            this.isLoading = false;
            return { rtnCode: 1, rtnMsg: error.toString() }
        }
    }
    public ClearData(){
        this.allReportTableData = [];
    }
}