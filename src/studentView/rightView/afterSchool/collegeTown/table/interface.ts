import { CollegeTownDoMainStore } from "../domainStore";
import { CollegeTownEntity } from "../entity";

export interface ICollegeTownTableProps{
    
    GlobalCollegeTownDoMainStore?:CollegeTownDoMainStore;

    onEyeClick:(model:CollegeTownEntity)=>void;

    
}