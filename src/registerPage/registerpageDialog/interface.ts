import { RegisterPageDomainStore } from "../domainStore";

export interface IRegisterPageDialogProps {

    GlobalRegisterPageDomainStore?: RegisterPageDomainStore;

    /**
     *  是否显示编辑视图
     */
    RegPagevisiable?: boolean;

    /**
     * 回调方法  取消
     */
    handleCancel: () => void;

    /**
     *  回调方法  确定
     */
    handleOk: (formData: any) => void;
}