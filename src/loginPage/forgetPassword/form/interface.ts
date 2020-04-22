import { FormComponentProps } from "antd/lib/form";
import { ListViewDoMainStore } from "../../../listview/domainStore";
import { LoginPageStore } from "../../domainStore";
import { ForgetPassWordFormUiAction } from "./uiAction";

export interface IForgetPassWordFormProps extends  FormComponentProps{
    GlobalLoginPageStore?: LoginPageStore;
    
    GlobalListViewDoMainStore?:ListViewDoMainStore;

    /**
     * 父组件将实现此方法，以获得子组件的action
     * 子组件通过调用此接口方法，将内部的Action 传递给父组件
     */
    getUiAction: (action: ForgetPassWordFormUiAction) => void;
}