export class ManageGoodsEntity {

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

    constructor() {
        this.id = "";
        this.price = "";
        this.score = "";
        this.windows = "";
        this.remarks = "";
        this.dishname = "";
        this.time = "";
    }
}