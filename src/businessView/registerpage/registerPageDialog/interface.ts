import { BusinessListViewDoMainStore } from "../../domainStore";

export interface IRegisterPageDialogProps {

    GlobalBusinessListViewDoMainStore?:BusinessListViewDoMainStore;

    /**
     *  是否显示编辑视图
     */
    RegisterPagevisiable?: boolean;

    /**
     * 回调方法  取消
     */
    handleCancel: () => void;

    /**
     *  回调方法  确定
     */
    handleOk: (formData: any) => void;
}