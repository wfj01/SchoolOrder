import { SecondRestaurantDomainStore } from "../domainStore";

export interface IDrawerViewProps{
    /**
     * 数据源
     */
    GlobalSecondDoMainStore?:SecondRestaurantDomainStore;

    visible:boolean;

    onClose:()=>void;
} 