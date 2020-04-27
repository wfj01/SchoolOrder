import { action } from "mobx";
import { IBusinessListViewProps } from "./interface";

export class BusinessListViewUiAction {

    private props:IBusinessListViewProps;

    constructor(props: IBusinessListViewProps) {
        this.props = props;
        this.UsernameText = this.UsernameText.bind(this);
        this.PasswordText = this.PasswordText.bind(this);
        this.LoginBtnOnClick = this.LoginBtnOnClick.bind(this);
        this.RegisterOnClick = this.RegisterOnClick.bind(this);
        this.ForgetBtnonClick = this.ForgetBtnonClick.bind(this);
        this.RegisterPagecancel = this.RegisterPagecancel.bind(this);
        this.RegisterPagesave = this.RegisterPagecancel.bind(this);
        this.ForgetPassPagecancel = this.ForgetPassPagecancel.bind(this);
        this.ForgetPassPagesave=this.ForgetPassPagesave.bind(this);
    }

    @action
    public UsernameText(event: React.ChangeEvent<HTMLInputElement>) {
        console.log("UsernameText:", event.target.value);
    }

    @action
    public PasswordText(event: React.ChangeEvent<HTMLInputElement>) {
        console.log("PasswordText:", event.target.value);
    }

    @action
    public LoginBtnOnClick() {
        console.log("登录按钮！！！");
    }

    @action
    public RegisterOnClick() {
        console.log("注册按钮！！！");
        this.props.GlobalBusinessListViewDoMainStore!.RegisterPageVisiable = true;
    }

    @action
    public ForgetBtnonClick() {
        console.log("忘记密码！！！");
        this.props.GlobalBusinessListViewDoMainStore!.forgetPasswordVisible = true;
    }

    @action
    public RegisterPagecancel(){
        this.props.GlobalBusinessListViewDoMainStore!.RegisterPageVisiable = false;
    }

    @action
    public RegisterPagesave(){
        this.props.GlobalBusinessListViewDoMainStore!.RegisterPageVisiable = false;
    }

    @action
    public ForgetPassPagecancel(){
        this.props.GlobalBusinessListViewDoMainStore!.forgetPasswordVisible = false;
    }

    @action
    public ForgetPassPagesave(){
        this.props.GlobalBusinessListViewDoMainStore!.forgetPasswordVisible = false;
    }

}