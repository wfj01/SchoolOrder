import { OrderManagementviewDoMainStore } from "../domainStore";

export interface IDrawerViewProps{
    /**
     * 数据源
     */
    GlobalOrderManagementviewDoMainStore?: OrderManagementviewDoMainStore;
    visible:boolean;

    onClose:()=>void;
} 