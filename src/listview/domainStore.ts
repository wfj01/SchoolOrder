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
        this.handleConfirmPassword="";
        this.display1 = "block";
        this.display2 = "none";
        this.LoginVerification = this.LoginVerification.bind(this);
    }

    /**
     * 验证
     */
    public async  LoginVerification() {
        console.log("this.LoginUsername:", this.LoginUsername);
        console.log("this.LoginPassword:", this.LoginPassword);
        try {
            const res = await requestJson("/api/Login/getUser?Studentid=" + this.LoginUsername + "&Password=" + this.LoginPassword,
                {
                    method: "GET",
                });
            if (res.rtnCode === 0) {
                this.display1 = "none";
                this.display2 = "block";
                console.log("this.LoginPassword:", this.LoginPassword);
            }
            else {
                message.info(res.rtnMsg);
            }
        } catch (error) {
            console.log("错误", error)
        }
    }

    /**
     * 注册
     */
    public async Adddata(model: RegisterPageFormEntity) {
        console.log("model:", model);
        try {
            if (this.handlePassWord !== this.handleConfirmPassword) {
                message.info("两次密码不一致!");
                return;
            }
            else
            {
            const res: any = await requestJson("/api/Register/postUser",
                {
                    method: "POST",
                    body: JSON.stringify(model),
                    headers: { "content-type": "application/json" }
                });
            if (res.rtnCode !== 0) {
                message.error("新增失败：" + res.rtnMsg);
            } else {
                this.RegisterPageVisiable = false;
                message.success("新增成功");
            }
        }
        } catch (error) {
            message.error("新增失败：" + error);
            this.RegisterPageVisiable = false;
        }
    }

    /**
     * 修改密码
     */
    public async UpdatePassWord(model: ForgetPassWordEntity) {
        console.log("model:", model);
        try {
            if (this.ForgetPassWord !== this.ConfirmPassword) {
                message.info("两次密码不一致!");
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
                    message.error("更新失败：" + res.rtnMsg);
                } else {
                    this.ForgetPassWordVisiable = false;
                    message.success("更新成功");
                }
            }
        } catch (error) {
            message.error("更新失败：" + error);
            this.RegisterPageVisiable = false;
        }
    }
}