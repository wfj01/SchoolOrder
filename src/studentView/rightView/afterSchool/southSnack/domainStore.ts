import { message } from "antd";
import { ClickParam } from "antd/lib/menu";
import { action, observable } from "mobx";
import { IResponseJsonResult, requestJson } from "../../../../genericComponent/requestJson";
import { SouthSnackEntity } from "./entity";

export class SouthSnackDoMainStore {
    /**
     * 开始号码
     */
    @observable
    public formNo: string;

    /**
     * 表格数据集合
     */
    @observable
    public List: SouthSnackEntity[];

    /**
     * 选定的行
     */
    @observable
    public selectedRowKeys: string[] | number[];

    /**
     * 总数据
     */
    @observable
    public allReportTableData: any[];

    /**
     * 展示数据
     */
    @observable
    public showReportTableData: any[];

    /**
     * 结束号码
     */
    @observable
    public endNo: string;

    /**
     * 加载
     */
    @observable
    public isLoading: boolean;

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
     * 表格的Key值
     */
    @observable
    public tableKeys: string[];


    /**
     * 选定行的数据
     */
    @observable
    public selectRowListData: SouthSnackEntity[];

    /**
     * 输入的菜名
     */
    @observable
    public Dishname:string;

    /**
     * 输入的开始价格
     */
    @observable
    public StartPrice:string;

    /**
     * 输入的结束价格
     */
    @observable
    public EndPrice:string;

    /**
     * data数组的序列
     */
    @observable
    public lengths: number;

    /**
     * 当前正在编辑的水卡类型
     */
    @observable
    public currentEditCardType:SouthSnackEntity;

    constructor() {
        this.Dishname="";
        this.StartPrice="";
        this.EndPrice="";
        this.customerCount = 0;
        this.PageIndex = 1
        this.PageSize = 20;
        this.showReportTableData = new Array<any>();
        this.allReportTableData = [];
        this.tableKeys = [];
        this.selectedRow = 0;
        this.selectedRowKeys = [];
        this.isLoading = false;
        this.selectRowListData = [];
        this.List = new Array<SouthSnackEntity>();
    }

    /**
     * 获取行下标
     * @param record 
     * @param index 
     */
    public getRowIndex(record: SouthSnackEntity): string {
        return record.id;
    }
    /**
     * 加载数据
     */
    @action
    public async LoadData() {
        try {
            this.isLoading = true;
            const res = await requestJson("/api/SouthSnack/queryUser",
                {
                    method: "GET"
                })
                if (res.rtnCode !== 0) {
                    message.error('暂无数据');
                    this.isLoading = false;
                    return;
                }
            const data = res.data.table as any[];
            this.allReportTableData = data;
            this.showReportTableData = this.allReportTableData;
            this.setShowTableData();
            this.isLoading = false;
        }
        catch (error) {
            message.error(error);
            this.isLoading = false;
        }
    }

    /**
     * 查询条件查询
     */
    @action
    public async SearchBtn(){
        this.allReportTableData=[];
        this.showReportTableData =[];
        this.isLoading = true;
        try {
            this.isLoading = true;
            const res = await requestJson("/api/SouthSnack/SearchBtn?dishname="+this.Dishname+"&price1="+this.StartPrice+"&price2="+this.EndPrice,
                {
                    method: "GET"
                })
                if (res.rtnCode !== 0) {
                    message.error('暂无数据');
                    this.isLoading = false;
                    return;
                }
                const data = res.data.table as any[];
                this.allReportTableData = data;
                this.showReportTableData = this.allReportTableData;
                this.isLoading = false;
        }
        catch (error) {
            message.error(error);
            this.isLoading = false;
        }
    }

    /**
     * 点击保存按钮的保存事件
     */
    @action
    public async SaveBtn(): Promise<IResponseJsonResult> {
        try {
            console.log("this.selectRowListData:",this.selectRowListData);
            const res:any = await requestJson("/api/SouthSnack/postUser?studentid="+"201710033092",
                {
                    method: "POST",
                    body: JSON.stringify(this.selectRowListData),
                    headers: { "content-type": "application/json" }
                }
            )
            if (res.rtnCode !== 0) {
                message.error(res.rtnMsg);
            }
            this.LoadData();
            message.success("添加购物车成功");
            return res;
        } catch (error) {
            return { rtnCode: 1, rtnMsg: error.toString() }
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

    /**
     * @param id 
     */
    @action
    public SelectedCardType(id:string):boolean{
        try {     
            this.recursionSelect(id,this.allReportTableData);
            return true;
        } catch (error) {
            console.log("error:",error);
            return false;
        }   
    }
    
    /**
     * 
     * 递归找到选中的数据
     */
    @action
    private recursionSelect(itemId:string,CardTypeList:SouthSnackEntity[]){
        CardTypeList.forEach((entity)=>{
           if(itemId===entity.id){
               this.currentEditCardType = entity;
           }
       });
   }
}