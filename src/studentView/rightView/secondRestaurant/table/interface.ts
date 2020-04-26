import { SecondRestaurantDomainStore } from "../domainStore";
import { SecondRestaurantEntity } from "../entity";

export interface IRestaurantTableProps {
    GlobalSecondDoMainStore?:SecondRestaurantDomainStore;

    onEyeClick:(model:SecondRestaurantEntity)=>void;
}