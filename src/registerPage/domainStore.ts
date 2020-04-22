import { action, observable } from "mobx";
import { RegisterPageFormEntity } from "./entity";

export class RegisterPageDomainStore{
    @observable
    public studentid: number;

    @observable
    public password: string;

    @observable
    public Isloading: boolean;

    @observable
    public List: any;

    @observable
    public DialogViewVisible: boolean;

    /**
     *  当前编辑的项目
     */
    @observable
    public currentEditItem: RegisterPageFormEntity;

    constructor() {
        this.Isloading = false;
        this.List = new Array<any>();
        this.currentEditItem = new RegisterPageFormEntity();
        this.studentid = 0;
        this.password = "";
        this.DialogViewVisible = false;
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
    public validate(values: RegisterPageFormEntity): string | undefined {
        return undefined;
    }


    @action
    private recursionSelect(id: number, list: RegisterPageFormEntity[]) {
        if (!list) {
            return;
        }
    }

}