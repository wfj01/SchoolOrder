import { FormComponentProps } from "antd/lib/form";
import { FirstRestaurantDoMainStore } from "../../domainStore";

export interface IFormViewProps extends FormComponentProps {
    /**
     * 数据源
     */
    GlobalFirstDoMainStore?:FirstRestaurantDoMainStore;
}