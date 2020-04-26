import { FormComponentProps } from "antd/lib/form";
import { SecondRestaurantDomainStore } from "../../domainStore";

export interface IFormViewProps extends FormComponentProps {
    /**
     * 数据源
     */
    GlobalSecondDoMainStore?:SecondRestaurantDomainStore;
}