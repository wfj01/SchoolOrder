import { FirstRestaurantDoMainStore } from "../domainStore";

export interface IDrawerViewProps{
    /**
     * 数据源
     */
    GlobalFirstDoMainStore?:FirstRestaurantDoMainStore;

    visible:boolean;

    onClose:()=>void;
} 