import { RegisterPageViewUiAction } from "../registerPageForm/uiAction";
import { IRegisterPageDialogProps } from "./interface";

export class RegisterPageDialogUiAction{


    private props:IRegisterPageDialogProps;

    /**
     *  内部表单组件的action
     */
    private sonUiAction: RegisterPageViewUiAction;

    constructor(props:IRegisterPageDialogProps){
        this.props = props;
        this.handleOk = this.handleOk.bind(this);
        this.getSonUiAction = this.getSonUiAction.bind(this);
    }

    /**
     *  确定方法 
     */
    public handleOk() {
        const result = this.sonUiAction.validate();
        if (!result.isValidated) { return; };
        this.props.handleOk(result.formData);
    }




    /**
     * 获取子组件action
     * @param sonUiAction 
     */
    public getSonUiAction(sonUiAction: RegisterPageViewUiAction) {
        this.sonUiAction = sonUiAction;
    }
}