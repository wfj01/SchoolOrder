// import { message } from "antd";
import { action, observable } from "mobx";
// import { requestJson } from "../genericComponent/requestJson";
import { ForgetPassWordEntity, RegisterPageViewEntity } from "./entity";

export class BusinessListViewDoMainStore{
    
    /**
     *  当前编辑的项目
     */
    @observable
    public currentEditItem: RegisterPageViewEntity;

    @observable
    public ForgetPasscurrentEditItem:ForgetPassWordEntity;

    /**
     * 第一次输入的密码
     */
    @observable
    public handlePassWord:string;

    /**
     * 第二次输入的密码
     */
    @observable
    public handleConfirmPassword:string;

    public List:RegisterPageViewEntity[];

    /**
     * 注册弹窗是否显示
     */
    @observable
    public RegisterPageVisiable:boolean;

    /**
     * 修改密码弹窗是否显示
     */
    @observable
    public forgetPasswordVisible:boolean;

    /**
     * 忘记密码-密码
     */
    @observable
    public ForgetPassWord:string;

    /**
     * 忘记密码-确认密码
     */
    @observable
    public ForgetConfirmPassword:string;

    /**
     * 登录的姓名
     */
    @observable
    public LoginUsername: string;

    /**
     * 登录的密码
     */
    @observable
    public LoginPassword:string;

    /**
     * 授权码
     */
    @observable
    public AuthorizationCode:string;

    /**
     * 登录等页面
     */
    @observable
    public display1:string;

    /**
     * 主页面
     */
    @observable
    public display2:string;
    
    constructor(){
        this.display1 = "block";
        this.display2 = "none";
        this.LoginUsername = "";
        this.LoginPassword = "";
        this.ForgetPassWord = "";
        this.AuthorizationCode = "";
        this.ForgetConfirmPassword = "";
        this.List = new Array<RegisterPageViewEntity>();
        this.ForgetPasscurrentEditItem = new ForgetPassWordEntity();
        this.currentEditItem = new RegisterPageViewEntity();
        this.handlePassWord = "";
        this.handleConfirmPassword = "";
        this.RegisterPageVisiable = false;
        this.forgetPasswordVisible = false;
    }

    /**
     * 验证
     */
    public async  LoginVerification() {
        // try {
        //     const res = await requestJson("/api/LoginPage/getUser?Name=" + this.LoginUsername + "&Password=" + this.LoginPassword+"&License="+this.AuthorizationCode,
        //         {
        //             method: "GET",
        //         });

        //     if (res.rtnCode === 0) {
                this.display1 = "none";
                this.display2 = "block";
        //         console.log("this.LoginPassword:", this.LoginPassword);
        //     }
        //     else {
        //         message.error(res.rtnMsg);
        //     }
        // } catch (error) {
        //     console.log("错误", error)
        // }
    }

    @action
    public SelectedMeterType(id: number): boolean {
        try {
            this.recursionSelect(id, this.List);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    /**
     * 验证数据
     * @param values 
     */
    public validate(values: RegisterPageViewEntity): string | undefined {
        return undefined;
    }


    @action
    private recursionSelect(id: number, list: RegisterPageViewEntity[]) {
        if (!list) {
            return;
        }
    }

}