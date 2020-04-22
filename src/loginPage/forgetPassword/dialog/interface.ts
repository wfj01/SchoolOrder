import { ListViewDoMainStore } from "../../../listview/domainStore";
import { LoginPageStore } from "../../domainStore";

export interface IForgetPassWordDialogProps {

    GlobalLoginPageStore?: LoginPageStore;

    GlobalListViewDoMainStore?:ListViewDoMainStore;


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