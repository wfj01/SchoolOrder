/**
 * 实体类
 */
export class SecondRestaurantEntity {

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
     * 做法
     */
    public practice:string;

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