import { message } from "antd";
import { ClickParam } from "antd/lib/menu";
import { observable } from "mobx";
import { requestJson } from "../../../../genericComponent/requestJson";
import { OrderManagementEntity } from "./entity";

export class OrderManagementDoMainStore {

    /**
     * 学生学号
     */
    @observable
    public studentid: string;

    /**
     * 是否加载
     */
    @observable
    public isloading: boolean;

    /**
     * 数据集合
     */
    @observable
    public allReportTableData: OrderManagementEntity[];

    /**
     * 展示数据
     */
    @observable
    public showReportTableData: OrderManagementEntity[];
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

    constructor() {
        this.studentid = "";
        this.isloading = false;
        this.customerCount = 0;
        this.PageIndex = 1
        this.PageSize = 20;
        this.allReportTableData = [];
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
    public async LoadData() {
        try {
            this.isloading = true;
            const res = await requestJson("/api/Order/ordermanage?studentid=" + "201710033092",
                {
                    method: "GET"
                })
            if (res.rtnCode !== 0) {
                message.error('暂无数据');
                this.isloading = false;
                return;
            }
            console.log("res.date:", res.data.table);
            this.allReportTableData = res.data.table as any[];
            this.showReportTableData = this.allReportTableData;
            this.allReportTableData.map((element: OrderManagementEntity) => {
                if (element.isConfirm === false && element.isComplete === false) {
                    element.state = "未确认";
                }
                else if (element.isConfirm === true && element.isComplete === false) {
                    element.state = "已确认";
                }
                else {
                    element.state = "已完成";
                }
            })
            this.isloading = false;
        }

        catch (error) {
            message.error(error);
            this.isloading = false;
            return;
        }
    }
    /**
     * 获取行下标
     * @param record 
     * @param index 
     */
    public getRowIndex(record: OrderManagementEntity): string {
        return record.id;
    }

    public ClearData(){
        this.allReportTableData = [];
    }
}