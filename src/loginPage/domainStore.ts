import { action, observable } from "mobx";
import { ForgetPassWordEntity } from "./entity";

export class LoginPageStore {

    /**
     * 学号
     */
    @observable
    public LoginUserid: string;

    /**
     * 用户名
     */
    @observable
    public Loginstudioname:string;

    /**
     * 密码
     */
    @observable
    public LoginPassword: string;

    @observable
    public List: any;

    /**
     *  当前编辑的项目
     */
    @observable
    public currentEditItem: ForgetPassWordEntity;

    constructor(){
        this.LoginUserid = "";
        this.LoginPassword = "";  
        this.currentEditItem = new ForgetPassWordEntity;
        this.List = new Array <any>();  
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
    public validate(values: ForgetPassWordEntity): string | undefined {
        return undefined;
    }


    @action
    private recursionSelect(id: number, list: ForgetPassWordEntity[]) {
        if (!list) {
            return;
        }
    }
}