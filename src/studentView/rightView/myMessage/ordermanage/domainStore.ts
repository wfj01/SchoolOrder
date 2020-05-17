import { message } from "antd";
import { ClickParam } from "antd/lib/menu";
import { action, observable } from "mobx";
import { requestJson } from "../../../../genericComponent/requestJson";
import { OrderManagementEntity } from "./entity";

export class OrderManagementviewDoMainStore {

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

    
    /**
     * 获取到数据的下标
     */
    @observable
    public lengths: number;

    /**
     * 当前正在编辑的数据
     */
    @observable
    public currentEditData: OrderManagementEntity;

    /**
     * 抽屉是否显示
     */
    @observable
    public DrawerViewVisible: boolean = false;;

    /**
     * 弹窗是否显示
     */
    @observable
    public DialogViewVisible: boolean = false;

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


    @action
    public ValiDate(model: OrderManagementEntity): string | undefined {
        return undefined;
    }

    /**
     * 加载数据
     */
    public async LoadData() {
        try {
            this.isloading = true;
            const res = await requestJson("/api/Evaluate/queryUser?studentid=" + "201710033092",
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
                console.log("我执行了")
                if (element.isConfirm === false && element.isComplete === false) {
                    element.state = "未确认";
                }
                else if (element.isConfirm === true && element.isComplete === false) {
                    element.state = "已确认";
                }
                else {
                    element.state = "已完成";
                }
                if (element.isEvaluate === false) {
                    element.Evaluatetext ="未评价"
                }
                else{
                    element.Evaluatetext = "已评价"
                }
                element.total = Number(element.price)*Number(element.number);
            })
            this.isloading = false;
        }

        catch (error) {
            message.error(error);
            this.isloading = false;
            return;
        }
    }

    public async Update(model: OrderManagementEntity){
        try {
            if (!this.isloading) {
                this.isloading = true;
            }
            const res = await requestJson("/api/Evaluate/updatanumber",
                {
                    method: "POST",
                    body: JSON.stringify(model),
                    headers: { "content-type": "application/json" }
                });
            if (res.rtnCode !== 0) {
                message.error("更新失败：" + res.rtnMsg);
                this.LoadData()
                this.isloading = false;
            } else {
                const jsonList = res.data as OrderManagementEntity[];

                if (this.allReportTableData.length > 0) {
                    this.allReportTableData.splice(0, this.allReportTableData.length);
                }
                this.allReportTableData.push(...jsonList);

                this.isloading = false;
                this.LoadData()
                message.success("更新成功");
            }
        } catch (error) {
            message.error("更新失败：" + error);
            this.LoadData()
            this.isloading = false;
        }
    }

    /**
     * 设置指定ID的为当前编辑的数据
     * @param id 
     */
    @action
    public SelectedData(id: string): boolean {
        console.log("id2222:",id);
        try {
            console.log("id3333:",id);
            this.recursionSelect(id, this.allReportTableData);
            return true;
        } catch (error) {
            console.log(error);
            return false;
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

    
    /**
     * 
     * 递归找到选中的数据
     */
    @action
    private recursionSelect(itemId: string, List: OrderManagementEntity[]) {
        console.log("id4444:",itemId);
        console.log("List:",List);
        if (!List) {
            return;
        }
        List.forEach((entity) => {
            console.log("id5555:",Number(itemId));
            console.log("entity.id",Number(entity.id))
            if (Number(itemId) === Number(entity.id)) {
                console.log("entity:",entity);
                this.currentEditData = entity;
                console.log("this.currentEditData:",this.currentEditData);
            }
        });
    }
}