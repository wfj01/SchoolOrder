import { ManageGoodsDomainStore } from "../domainStore";
import { ManageGoodsEntity } from "../entity";

export interface IManageGoodsTableProps {
    GlobalManageGoodsDomainStore?: ManageGoodsDomainStore;
    
    onEyeClick:(model:ManageGoodsEntity)=>void;

    onAdd:(model:ManageGoodsEntity)=>void;

    onEdit:(model:ManageGoodsEntity)=>void;
}