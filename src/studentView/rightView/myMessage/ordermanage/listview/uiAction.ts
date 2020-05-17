import { action } from "mobx";
import { OrderManagementviewDoMainStore } from "../domainStore";
import { OrderManagementEntity } from "../entity";
import { IOrderManagementprops } from "./interface";

export class OrderManagementUiAction {

    /**
     * 当前操作类型
     */
    public opearatorType: "none" | "add" | "edit" | "eye";

    /**
     * 当前的弹窗标题
     */
    public modelTitle: string;

    private props: IOrderManagementprops;

    private domainStore: OrderManagementviewDoMainStore;


    constructor(props: IOrderManagementprops) {
        this.domainStore = props.GlobalOrderManagementviewDoMainStore!;
        this.adda = this.adda.bind(this);
        this.cancel = this.cancel.bind(this);
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.RefreshClick = this.RefreshClick.bind(this);
        this.onCloseClick = this.onCloseClick.bind(this);
        this.eyeClick = this.eyeClick.bind(this);
        this.props = props;
    }

    public RefreshClick() {
        this.props.GlobalOrderManagementviewDoMainStore!.LoadData();
    }

    /**
     * 新增<a>点击
     * @param model 实体类
     */
    @action
    public adda() {
        this.modelTitle = "新增数据";
        this.opearatorType = "add";
        this.domainStore.currentEditData = new OrderManagementEntity();
        this.props.GlobalOrderManagementviewDoMainStore!.DialogViewVisible = true;
    }

    /**
     * 编辑
     */
    @action
    public edit() {
        this.modelTitle = "编辑数据";
        this.opearatorType = "edit";
        this.props.GlobalOrderManagementviewDoMainStore!.DialogViewVisible = true;
    }

    /**
     * 取消
     */
    @action
    public cancel() {
        this.props.GlobalOrderManagementviewDoMainStore!.DialogViewVisible = false;
        this.opearatorType = "none";
    }

    /**
     * 保存
     * @param model 实体类
     */
    @action
    public save(model: OrderManagementEntity) {
        if (this.opearatorType === "edit") {
            this.domainStore.Update(model);
            this.props.GlobalOrderManagementviewDoMainStore!.DialogViewVisible = false;
        }
    }

    @action
    public onCloseClick() {
        this.props.GlobalOrderManagementviewDoMainStore!.DrawerViewVisible = false;
    }

    @action
    public eyeClick() {
        this.props.GlobalOrderManagementviewDoMainStore!.DrawerViewVisible = true;
    }
}