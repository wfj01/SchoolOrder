import { message } from "antd";
import { observable } from "mobx";
import { requestJson } from "../genericComponent/requestJson";
import { ForgetPassWordEntity } from "../loginPage/entity";
import { RegisterPageFormEntity } from "../registerPage/entity";

export class ListViewDoMainStore {

    /**
     *  是否显示注册对话框
     */
    @observable
    public RegisterPageVisiable: boolean = false;


    @observable
    public ForgetPassWordVisiable: boolean = false;

    /**
     * 登录页面是否显示
     */
    @observable
    public display1: string;

    /**
     * 用户页面是否显示
     */
    @observable
    public display2: string;

    /**
     * 用户名
     */
    @observable
    public LoginUsername: string;

    /**
     * 密码
     */
    @observable
    public LoginPassword: string;

    @observable
    public Loginstudioname: string;

    @observable
    public ForgetPassWord: string;

    @observable
    public ConfirmPassword: string;


    @observable
    public handlePassWord: string;

    @observable
    public handleConfirmPassword: string;

    constructor() {
        this.LoginUsername = "";
        this.LoginPassword = "";
        this.ForgetPassWord = "";
        this.ConfirmPassword = "";
        this.handlePassWord = "";
        this.handleConfirmPassword = "";
        this.display1 = "block";
        this.display2 = "none";
        this.LoginVerification = this.LoginVerification.bind(this);
    }

    /**
     * 验证
     */
    public async  LoginVerification() {
        try {
            const res = await requestJson("/api/Login/getUser?Studentid=" + this.LoginUsername + "&Password=" + this.LoginPassword,
                {
                    method: "GET",
                });
            if (res.rtnCode === 0) {
                message.loading("正在登录中 😇", 0.5)
                const aaa = res.data.table;
                aaa.forEach((element: any) => {
                    this.Loginstudioname = element.studentname
                });
                message.success("🎉" + "登录成功 😃" + "🎉", 1.2);
                setTimeout(() => {
                    const that = this;
                    const Loginstudioname = this.Loginstudioname;
                    that.display1 = "none";
                    that.display2 = "block";
                    message.success("🎉" + "亲爱的" + Loginstudioname + "," + "欢迎登录订餐系统" + "🎉", 3)
                }, 1500)
            }
            else {
                message.error("登录失败," + res.rtnMsg + "😓");
            }
        } catch (error) {
            message.error("登录失败," + error + "😓");
        }
    }

    /**
     * 注册
     */
    public async Adddata(model: RegisterPageFormEntity) {
        try {
            if (this.handlePassWord !== this.handleConfirmPassword) {
                message.error("两次密码不一致!");
                return;
            }
            else {
                const res: any = await requestJson("/api/Register/postUser",
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

    /**
     * 修改密码
     */
    public async UpdatePassWord(model: ForgetPassWordEntity) {
        try {
            if (this.ForgetPassWord !== this.ConfirmPassword) {
                message.error("两次密码不一致!");
                return;
            }
            else {
                const res: any = await requestJson("/api/ForgetPas/updateForgetPass",
                    {
                        method: "POST",
                        body: JSON.stringify(model),
                        headers: { "content-type": "application/json" }
                    });
                if (res.rtnCode !== 0) {
                    message.error("修改失败," + res.rtnMsg + "😓");
                } else {
                    this.ForgetPassWordVisiable = false;
                    message.success("🎉" + "修改成功,请重新登录" + "😄" + "🎉");
                }
            }
        } catch (error) {
            message.error("修改失败," + error + "😓");
            this.RegisterPageVisiable = false;
        }
    }
}