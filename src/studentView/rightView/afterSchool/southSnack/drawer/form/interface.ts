import { FormComponentProps } from "antd/lib/form";
import { SouthSnackDoMainStore } from "../../domainStore";

export interface IFormViewProps extends FormComponentProps {
    /**
     * 数据源
     */
    GlobalSouthSnackDoMainStore?:SouthSnackDoMainStore;
}