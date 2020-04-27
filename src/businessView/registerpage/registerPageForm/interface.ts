import { FormComponentProps } from "antd/lib/form";
import { BusinessListViewDoMainStore } from "../../domainStore";
import { RegisterPageViewUiAction } from "./uiAction";

export interface IRegisterPageViewProps extends FormComponentProps{
    GlobalBusinessListViewDoMainStore?:BusinessListViewDoMainStore;

    /**
     * 父组件将实现此方法，以获得子组件的action
     * 子组件通过调用此接口方法，将内部的Action 传递给父组件
     */
    getUiAction: (action: RegisterPageViewUiAction) => void;
}