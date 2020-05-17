import { ListViewDoMainStore } from "../../../../../listview/domainStore";
import { OrderManagementviewDoMainStore } from "../domainStore";
import { OrderManagementEntity } from "../entity";

export interface IOrderManagementTableprops{
    GlobalOrderManagementviewDoMainStore?: OrderManagementviewDoMainStore;
    GlobalListViewDoMainStore?: ListViewDoMainStore;
        
    onEyeClick:(model:OrderManagementEntity)=>void;

    onAdd:(model:OrderManagementEntity)=>void;

    onEdit:(model:OrderManagementEntity)=>void;
}