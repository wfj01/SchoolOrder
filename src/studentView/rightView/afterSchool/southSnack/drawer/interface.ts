import { SouthSnackDoMainStore } from "../domainStore";

export interface IDrawerViewProps{
    /**
     * 数据源
     */
    GlobalSouthSnackDoMainStore?:SouthSnackDoMainStore;

    visible:boolean;

    onClose:()=>void;
} 