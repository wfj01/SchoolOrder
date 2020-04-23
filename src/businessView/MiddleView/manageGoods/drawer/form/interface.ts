import { FormComponentProps } from "antd/lib/form";
import { ManageGoodsDomainStore } from "../../domainStore";

export interface IFormViewProps extends FormComponentProps {
    /**
     * 数据源
     */
    GlobalManageGoodsDomainStore?: ManageGoodsDomainStore
}