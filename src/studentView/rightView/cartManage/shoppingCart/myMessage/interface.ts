import { FormComponentProps } from "antd/lib/form";
import { ListViewDoMainStore } from "../../../../../listview/domainStore";
import { MymessageViewDomainStoress } from "./doMainStore";

export interface IMymessageViewProps extends FormComponentProps{
    GlobalMymessageViewStoress:MymessageViewDomainStoress;

    GlobalListViewDoMainStore?: ListViewDoMainStore;

}