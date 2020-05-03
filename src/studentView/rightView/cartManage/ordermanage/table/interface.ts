import { ListViewDoMainStore } from "../../../../../listview/domainStore";
import { OrderManagementDoMainStore } from "../domainStore";

export interface IOrderManagementTableprops{
    GlobalOrderManagementDoMainStore?: OrderManagementDoMainStore;
    GlobalListViewDoMainStore?: ListViewDoMainStore;
}