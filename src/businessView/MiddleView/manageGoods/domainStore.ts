import { message } from "antd";
import { action, observable } from "mobx";
import { requestJson } from "../../../genericComponent/requestJson";
import { ManageGoodsEntity } from "./entity";

export class ManageGoodsDomainStore {

    /**
     * 当前正在编辑的数据
     */
    @observable
    public currentEditData: ManageGoodsEntity;

    /**
     * 是否加载
     */
    @observable
    public isLoading: boolean = true;

    /**
     * 查询出的数据集合
     */
    @observable
    public List: ManageGoodsEntity[];

    /**
     * 获取到数据的下标
     */
    @observable
    public lengths: number;

    /**
     * 抽屉是否显示
     */
    @observable
    public DrawerViewVisible: boolean = false;;

    /**
     * 弹窗是否显示
     */
    @observable
    public DialogViewVisible: boolean = false;

    constructor() {
        this.List = Array<ManageGoodsEntity>();
        this.currentEditData = new ManageGoodsEntity();
    }

    /**
     * 设置指定ID的为当前编辑的数据
     * @param id 
     */
    @action
    public SelectedData(id: string): boolean {
        try {
            this.recursionSelect(id, this.List);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    @action
    public ValiDate(model: ManageGoodsEntity): string | undefined {
        return undefined;
    }

    @action
    public async loaddata() {
        try {
            if (!this.isLoading) {
                this.isLoading = true;
            }
            if (this.List.length > 0) {
                this.List.splice(0, this.List.length);
            }
            const res = await requestJson('/api/Business/loaddata', {
                method: "GET"
            });
            if (res.rtnCode === 0) {
                const data = res.data.table;
                console.log("data:", data);
                this.List = data;
                this.isLoading = false;
            } else {
                message.error(res.rtnMsg);
                this.isLoading = false;
            }
        } catch (error) {
            console.log(error);
            this.isLoading = false;
        }
    }
    /**
     * 增加
     */
    @action
    public async Adddate(model: ManageGoodsEntity) {
        try {
            this.isLoading = true;
            const res = await requestJson("/api/Ceshi/huoqu",
                {
                    method: "POST",
                    body: JSON.stringify(model),
                    headers: { "content-type": "application/json" }
                });
            if (res.rtnCode !== 0) {
                message.error("新增失败：" + res.rtnMsg);
                this.isLoading = false;
            } else {
                const jsonList = res.data.data as ManageGoodsEntity[];
                this.List.push(...jsonList);
                this.isLoading = false;
                message.success("新增成功");
                this.loaddata();
            }
        } catch (error) {
            message.error("新增失败：" + error);
            this.isLoading = false;
        }
    }
    /**
     * 删除
     */
    @action
    public async Deletedate(id: number) {
        try {
            if (!this.isLoading) {
                this.isLoading = true;
            }
            const res = await requestJson("/api/Business/deletedate?id=" + id,
                {
                    method: "GET"
                });
            if (res.rtnCode !== 0) {
                this.isLoading = false;
                message.error("删除失败：" + res.rtnMsg);
            } else {
                const jsonList = res.data as ManageGoodsEntity[];

                if (this.List.length > 0) {
                    this.List.splice(0, this.List.length);
                }

                this.List.push(...jsonList);
                this.isLoading = false;
                message.success("删除成功");
                this.loaddata();
            }
        } catch (error) {
            message.error("删除失败：" + error);
            this.isLoading = false;
        }
    }
    /**
     * 更新
     */
    public async Update(model: ManageGoodsEntity) {
        try {
            if (!this.isLoading) {
                this.isLoading = true;
            }
            const res = await requestJson("/api/Business/updatedate",
                {
                    method: "POST",
                    body: JSON.stringify(model),
                    headers: { "content-type": "application/json" }
                });
            if (res.rtnCode !== 0) {
                message.error("更新失败：" + res.rtnMsg);
                this.isLoading = false;
            } else {
                const jsonList = res.data as ManageGoodsEntity[];

                if (this.List.length > 0) {
                    this.List.splice(0, this.List.length);
                }
                this.List.push(...jsonList);

                this.isLoading = false;
                message.success("更新成功");
            }
        } catch (error) {
            message.error("更新失败：" + error);
            this.isLoading = false;
        }
    }
    /**
     * 
     * 递归找到选中的数据
     */
    @action
    private recursionSelect(itemId: string, List: ManageGoodsEntity[]) {
        if (!List) {
            return;
        }
        List.forEach((entity) => {
            if (itemId === entity.id) {
                this.currentEditData = entity!;
            }
        });
    }
}