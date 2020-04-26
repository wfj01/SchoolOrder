import { SouthSnackDoMainStore } from "../domainStore";
import { SouthSnackEntity } from "../entity";

export interface ISouthSnackTableProps{
    
    GlobalSouthSnackDoMainStore?:SouthSnackDoMainStore;

    onEyeClick:(model:SouthSnackEntity)=>void;
    
}