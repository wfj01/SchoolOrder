import { ManageGoodsDomainStore } from "../domainStore";

export interface IDrawerViewProps{
    /**
     * 数据源
     */
    GlobalManageGoodsDomainStore?: ManageGoodsDomainStore;

    visible:boolean;

    onClose:()=>void;
} 