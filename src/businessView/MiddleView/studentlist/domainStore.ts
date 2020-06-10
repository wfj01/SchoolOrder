import { message } from "antd";
import { ClickParam } from "antd/lib/menu";
import { action, observable } from "mobx";
import { requestJson } from "../../../genericComponent/requestJson";
import { StudentListEntity } from "./entity";

export class StudentListDomainStores {

    @observable
    public isLoading: boolean;

    @observable
    public allReportTableData: StudentListEntity[];

    @observable
    public showReportTableData: StudentListEntity[];

    @observable
    public aaa: any[];

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
        this.isLoading = false;
        this.allReportTableData = [];
        this.aaa = [];
        this.customerCount = 0;
        this.PageIndex = 1
        this.PageSize = 20;
        this.showReportTableData = new Array<StudentListEntity>();
    }

    @action
    public async Loaddata() {
        try {
            this.isLoading = true;
            const res = await requestJson("/api/CustomerList/studentlist",
                {
                    method: "GET"
                })
            if (res.rtnCode !== 0) {
                message.error('暂无数据');
                this.isLoading = false;
                return;
            }
            const data = res.data.table as any[];
            this.aaa = data;
            this.allReportTableData = this.aaa;
            // this.showReportTableData = this.allReportTableData;
            this.setShowTableData();
            this.isLoading = false;
        }
        catch (error) {
            message.error(error);
            this.isLoading = false;
        }
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
}