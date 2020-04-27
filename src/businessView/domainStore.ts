import { action, observable } from "mobx";
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

    constructor(){
        this.ForgetPassWord = "";
        this.ForgetConfirmPassword = "";
        this.List = new Array<RegisterPageViewEntity>();
        this.ForgetPasscurrentEditItem = new ForgetPassWordEntity();
        this.currentEditItem = new RegisterPageViewEntity();
        this.handlePassWord = "";
        this.handleConfirmPassword = "";
        this.RegisterPageVisiable = false;
        this.forgetPasswordVisible = false;
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