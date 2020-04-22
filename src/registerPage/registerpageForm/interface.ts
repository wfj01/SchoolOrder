import { FormComponentProps } from "antd/lib/form";
import { ListViewDoMainStore } from "../../listview/domainStore";
import { RegisterPageDomainStore } from "../domainStore";
import { RegisterPageFormUiAction } from "./uiAction";

export interface IRegisterPageProps extends FormComponentProps {
    GlobalRegisterPageDomainStore?: RegisterPageDomainStore;

    GlobalListViewDoMainStore?:ListViewDoMainStore;

    /**
     * 父组件将实现此方法，以获得子组件的action
     * 子组件通过调用此接口方法，将内部的Action 传递给父组件
     */
    getUiAction: (action: RegisterPageFormUiAction) => void;
}