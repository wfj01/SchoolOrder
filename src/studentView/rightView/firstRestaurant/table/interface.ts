import { FirstRestaurantDoMainStore } from "../domainStore";
import { FirstRestaurantEntity } from "../entity";

export interface IRestaurantTableProps{

    GlobalFirstDoMainStore?:FirstRestaurantDoMainStore;

    onEyeClick:(model:FirstRestaurantEntity)=>void;

}