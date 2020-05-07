import { message } from "antd";
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

    constructor() {
        this.studentid = "";
        this.isloading = false;
        this.allReportTableData = [];
    }

    /**
     * 加载数据
     */
    public async LoadData() {
        try {
            this.isloading = true;
            const res = await requestJson("/api/Order/ordermanage?studentid=" + this.studentid,
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