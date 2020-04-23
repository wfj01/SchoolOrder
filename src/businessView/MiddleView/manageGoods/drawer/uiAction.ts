import { IDrawerViewProps } from "./interface";
import { FromViewUiAction } from "../modal/form/uiAction";

export class DrawerViewUiAction{
    /**
     *  内部表单组件的action
     */
    private sonUiAction: FromViewUiAction;

    constructor(props:IDrawerViewProps){
        this.getSonUiAction = this.getSonUiAction.bind(this);
    }

    

    /**
     * 获取子组件action
     * @param sonUiAction 
     */
    public getSonUiAction(sonUiAction: FromViewUiAction) {
        this.sonUiAction = sonUiAction;
    }

    /**
     *  确定方法 
     */
    public handleOk() {
        const result = this.sonUiAction.validate();
        if (!result.isValidated) { return; };
    }
}