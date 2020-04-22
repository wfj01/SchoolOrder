import { FormComponentProps } from "antd/lib/form";
import { LastWeekDomainStore } from "../domainstore";

export interface IMiddleFromViewProps extends FormComponentProps {
    GlobalLastWeekDomainStore:LastWeekDomainStore;
}