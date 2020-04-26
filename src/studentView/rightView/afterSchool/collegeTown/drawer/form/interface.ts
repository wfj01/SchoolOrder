import { FormComponentProps } from "antd/lib/form";
import { CollegeTownDoMainStore } from "../../domainStore";

export interface IFormViewProps extends FormComponentProps {
    /**
     * 数据源
     */
    GlobalCollegeTownDoMainStore?:CollegeTownDoMainStore
}