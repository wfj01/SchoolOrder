import { FormComponentProps } from "antd/lib/form";
import { OrderManagementviewDoMainStore } from "../../domainStore";

export interface IFormViewProps extends FormComponentProps {
    /**
     * 数据源
     */
    GlobalOrderManagementviewDoMainStore?: OrderManagementviewDoMainStore;}