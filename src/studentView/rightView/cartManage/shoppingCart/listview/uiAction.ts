import { IShoppingCartViewProps } from "./interface";

export class ShoppingCartViewUiAction{

    private props:IShoppingCartViewProps;

    constructor(props:IShoppingCartViewProps){
        this.props = props;
        this.CalculationMoney = this.CalculationMoney.bind(this);
        this.Confirmorder = this.Confirmorder.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    /**
     * 计算金额
     */
    public CalculationMoney(){
        this.props.GlobalStepsViewDomainStore!.CalculationMoney();
    }


    /**
     * 确认订单
     */
    public Confirmorder(){
        this.props.GlobalStepsViewDomainStore!.ShoppingModelvisible = true;
    }

    /**
     * 弹窗确定事件
     */
    public handleOk(){
        this.props.GlobalStepsViewDomainStore!.Confirmorder();
        this.props.GlobalStepsViewDomainStore!.ShoppingModelvisible = false;
    }

    /**
     * 弹窗取消事件
     */
    public handleCancel(){
        this.props.GlobalStepsViewDomainStore!.ShoppingModelvisible = false;
    }
}