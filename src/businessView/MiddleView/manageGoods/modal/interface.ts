import { ManageGoodsDomainStore } from "../domainStore";

export interface IModelViewProps {

    GlobalManageGoodsDomainStore?: ManageGoodsDomainStore;
    
    visible?: boolean;
    /**
     * 回调方法  取消
     */
    handleCancel: () => void;

    /**
     *  回调方法  确定
     */
    handleOk: (formData: any) => void;

    /**
     * 弹窗标题
     */
    modelTitle:string;
}