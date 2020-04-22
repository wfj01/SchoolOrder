import { IShoppingCartViewProps } from "./interface";

export class ShoppingCartViewUiAction{

    private props:IShoppingCartViewProps;

    constructor(props:IShoppingCartViewProps){
        this.props = props;
        this.CalculationMoney = this.CalculationMoney.bind(this);
    }

    /**
     * 计算金额
     */
    public CalculationMoney(){
        this.props.GlobalStepsViewDomainStore!.CalculationMoney();
    }
}