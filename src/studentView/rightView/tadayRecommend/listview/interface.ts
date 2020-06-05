import { TadayRecommendDomainStore } from "../domainstore";
import { LastWeekDomainStore } from "../lastweekView/domainstore";

export interface ITadayRecommendProps{
    GlobalTadayRecommendDomainStore?:TadayRecommendDomainStore;

    GlobalLastWeekDomainStore?:LastWeekDomainStore;
}