import { message } from "antd";
import { action, observable } from "mobx";
import { requestJson } from "../../../genericComponent/requestJson";
import { PageFormEntity } from "./entity";

export class MymessageViewDomainStores {

    @observable
    public isLoading: boolean;

    @observable
    public studentid: string;

    @observable
    public allReportTableData: PageFormEntity[];

    @observable
    public showdata: PageFormEntity[];


    @observable
    public sex: number;

    @observable
    public visible: boolean;

    @observable
    public number1: string;

    @observable
    public number2: string;

    @observable
    public number3: string;

    @observable
    public number4: string;

    @observable
    public number5: string;

    @observable
    public number6: string;

    constructor() {
        this.isLoading = false;
        this.studentid = '';
        this.allReportTableData = [];
        this.number1 = ""
    }

    /**
     * 加载数据
     */
    @action
    public async LoadData() {
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
            this.showdata.map((element: PageFormEntity) => {
                if (element.sex === true) {
                    element.sextext = 1
                }
                else {
                    element.sextext = 0;
                }
                console.log("fhjahfjsjahf", element.sextext)
            })
            this.allReportTableData = this.showdata;
            this.isLoading = false;
        }
        catch (error) {
            message.error(error);
            this.isLoading = false;
        }
    }

    /**
     * 更新
     */
    public async SaveUpdata() {
        try {
            console.log("fafafdadfasqfafaf:",this.number1, this.number2, this.number3, this.number4, this.number5, this.number6);
            const res = await requestJson("/api/MyMessage/saveUpdata?studentid=" + "201710033092"
                + "&Password=" + this.number1 + "&Telephone=" + this.number2 + "&Address=" + this.number3 + "&Email=" + this.number4
                + "&Studentname=" + this.number5,
                {
                    method: "GET"
                });
            if (res.rtnCode !== 0) {
                message.error("更新失败：" + res.rtnMsg);
            } else {
                const jsonList = res.data as PageFormEntity[];
                if (this.allReportTableData.length > 0) {
                    this.allReportTableData.splice(0, this.allReportTableData.length);
                }
                this.allReportTableData.push(...jsonList);
                message.success("更新成功");
            }
        } catch (error) {
            message.error("更新失败：" + error);
        }
    }

}