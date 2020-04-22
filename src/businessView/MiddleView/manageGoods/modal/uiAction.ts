import { FromViewUiAction } from "../form/uiAction";
import { IModelViewProps } from "./interface";

export class ModelViewUiAction{
    private props:IModelViewProps;

    /**
     *  内部表单组件的action
     */
    private sonUiAction: FromViewUiAction;

    constructor(props:IModelViewProps){
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
    public getSonUiAction(sonUiAction: FromViewUiAction) {
        this.sonUiAction = sonUiAction;
    }
}