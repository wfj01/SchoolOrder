// import { message } from "antd";
import { message } from "antd";
import { action, observable } from "mobx";
import { requestJson } from "../genericComponent/requestJson";
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
        try {
            if (this.LoginUsername === "") {
                message.error("账号不能为空😠");
                return;
            } else if(this.LoginPassword ===""){
                message.error("密码不能为空😠");
                return;
            }
            const res = await requestJson("/api/LoginPage/getUser?Name=" + this.LoginUsername + "&Password=" + this.LoginPassword+"&License="+this.AuthorizationCode,
                {
                    method: "GET",
                });

            if (res.rtnCode === 0) {
                this.display1 = "none";
                this.display2 = "block";
                message.success("登录成功👏👏👏")
                console.log("this.LoginPassword:", this.LoginPassword);
            }
            else {
                message.error(res.rtnMsg+"😏");
            }
        } catch (error) {
            message.error(error+"😏")
            console.log("错误", error)
        }
    }

    
    /**
     * 注册
     */
    public async Adddata(model: RegisterPageViewEntity) {
        try {
            if (this.handlePassWord !== this.handleConfirmPassword) {
                message.error("两次密码不一致!");
                return;
            }
            else {
                const res: any = await requestJson("/api/BusinessRegister/postUser",
                    {
                        method: "POST",
                        body: JSON.stringify(model),
                        headers: { "content-type": "application/json" }
                    });
                if (res.rtnCode !== 0) {
                    message.error("注册失败," + res.rtnMsg + "😓");
                } else {
                    this.RegisterPageVisiable = false;
                    message.success("🎉" + "注册成功，正返回登录页面," + "😄" + "🎉");
                }
            }
        } catch (error) {
            message.error("注册失败," + error + "😓");
            this.RegisterPageVisiable = false;
        }
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




    /**
     * 修改密码
     */
    public async UpdatePassWord(model: ForgetPassWordEntity) {
        try {
            if (this.ForgetPassWord !== this.ForgetConfirmPassword) {
                message.error("两次密码不一致!");
                return;
            }
            else {
                const res: any = await requestJson("/api/BusinessForget/updateForgetPass",
                    {
                        method: "POST",
                        body: JSON.stringify(model),
                        headers: { "content-type": "application/json" }
                    });
                if (res.rtnCode !== 0) {
                    message.error("修改失败," + res.rtnMsg + "😓");
                } else {
                    this.forgetPasswordVisible = false;
                    message.success("🎉" + "修改成功,请重新登录" + "😄" + "🎉");
                }
            }
        } catch (error) {
            message.error("修改失败," + error + "😓");
            this.RegisterPageVisiable = false;
        }
    }

    @action
    private recursionSelect(id: number, list: RegisterPageViewEntity[]) {
        if (!list) {
            return;
        }
    }

}