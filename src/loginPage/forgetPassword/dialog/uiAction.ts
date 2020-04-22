import { ForgetPassWordFormUiAction } from "../form/uiAction";
import { IForgetPassWordDialogProps } from "./interface";

export class ForgetPassWordDialogUiAction{


    private props:IForgetPassWordDialogProps;

    /**
     *  内部表单组件的action
     */
    private sonUiAction: ForgetPassWordFormUiAction;

    constructor(props:IForgetPassWordDialogProps){
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
    public getSonUiAction(sonUiAction: ForgetPassWordFormUiAction) {
        this.sonUiAction = sonUiAction;
    }
}