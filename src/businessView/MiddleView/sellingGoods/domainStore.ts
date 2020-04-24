import { message } from "antd";
import { ClickParam } from "antd/lib/menu";
import { ColumnProps } from "antd/lib/table";
import { action, observable } from "mobx";
import { requestJson } from "../../../genericComponent/requestJson";
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
    public allReportTableData:SellingGoodsEntity[]

    /**
     * 展示数据
     */
    @observable
    public showReportTableData: SellingGoodsEntity[];

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
     * 已选中的行数
     */
    @observable
    public selectedRow: number = 0;

    /**
     * 表格需要的列
     */
    @observable
    public tableColumns:Array<ColumnProps<any>>;

    constructor(){
        this.customerCount = 0;
        this.PageIndex = 1
        this.PageSize = 20;
        this.IsLoading = false;
        this.showReportTableData = new Array<SellingGoodsEntity>();
        this.allReportTableData = new Array<SellingGoodsEntity>();
        this.Loadview = this.Loadview.bind(this);
    }

    @action
    public async Loadview(){
        try{
            if(!this.IsLoading){
                this.IsLoading=true;
            }
            if (this.allReportTableData.length>0) {
                this.allReportTableData.splice(0,this.allReportTableData.length);
            }
            const res=await requestJson('/api/Business/loaddata', {
                method: "GET"
            });
            if (res.rtnCode===0) {
                const data = res.data.table;
                console.log("data:",data);
                this.allReportTableData = data;
                this.setShowTableData();
                this.IsLoading = false;           
            } else {
                message.error(res.rtnMsg);
                this.IsLoading = false;
            }
        } catch (error) {    
            console.log(error);
            this.IsLoading = false;
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
        this.showReportTableData = this.allReportTableData
            .slice(this.PageSize * (this.PageIndex - 1), this.PageSize * this.PageIndex)
        //     .concat(this.showReportTableData.slice(-1));
        console.log("显示数据");
    }

}