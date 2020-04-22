import { FormComponentProps } from "antd/lib/form";
import { TadayRecommendDomainStore } from "../domainstore";

export interface IMiddleFromViewProps extends FormComponentProps {
    GlobalTadayRecommendDomainStore:TadayRecommendDomainStore;
}