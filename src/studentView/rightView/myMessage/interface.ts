import { FormComponentProps } from "antd/lib/form";
import { ListViewDoMainStore } from "../../../listview/domainStore";
import { MymessageViewDomainStores } from "./doMainStore";

export interface IMymessageViewProps extends FormComponentProps{
    GlobalMymessageViewStores:MymessageViewDomainStores;

    GlobalListViewDoMainStore?: ListViewDoMainStore;

}