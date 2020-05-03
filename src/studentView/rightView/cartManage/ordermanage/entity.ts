export class OrderManagementEntity {

    /**
     * ID
     */
    public id: string;

    /**
     * 菜名
     */
    public dishname: string;

    /**
     * 价格
     */
    public price: string;
   
    /**
     * 得分
     */
    public score: string;

    /**
     * 时间
     */
    public time: string;

    /**
     * 购买窗口
     */
    public windows: string;

    /**
     * 备注
     */
    public remarks: string;

    /**
     * 数量
     */
    public number: string;

    public isConfirm:boolean;

    public isComplete:boolean;

    /**
     * 状态
     */
    public state:string;

    constructor() {
        this.id = "";
        this.number = "";
        this.price = "";
        this.score = "";
        this.time = "";
        this.dishname = "";
        this.remarks = "";
        this.windows = "";
    }
}