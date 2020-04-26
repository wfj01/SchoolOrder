import { CollegeTownDoMainStore } from "../domainStore";

export interface IDrawerViewProps{
    /**
     * 数据源
     */
    GlobalCollegeTownDoMainStore?:CollegeTownDoMainStore

    visible:boolean;

    onClose:()=>void;
} 