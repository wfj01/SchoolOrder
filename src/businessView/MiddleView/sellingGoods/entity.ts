export class SellingGoodsEntity {

    /**
     * ID
     */
    public ID: string;

    /**
     * 菜名
     */
    public Dishname: string;

    /**
     * 价格
     */
    public Price: string;
    /**
     * 得分
     */
    public Score: string;

    /**
     * 时间
     */
    public Time: string;
    /**
     * 购买窗口
     */
    public Windows: string;
    /**
     * 说明
     */
    public Explain: string;

    constructor() {
        this.ID = "";
        this.Price = "";
        this.Score = "";
        this.Windows = "";
        this.Explain = "";
        this.Dishname = "";
        this.Time = "";
    }
}