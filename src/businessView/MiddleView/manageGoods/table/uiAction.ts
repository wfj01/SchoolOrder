import { message } from "antd";
import { action } from "mobx";
import { IManageGoodsTableProps } from "./interface";

export class ManageGoodsTableUiAction {

    /**
     * 数据接口
     */
    private props: IManageGoodsTableProps;

    /**
     * 构造方法
     */
    constructor(props:IManageGoodsTableProps) {

        this.props = props;

        this.loadData = this.loadData.bind(this);

        this.addClick = this.addClick.bind(this);

        this.editClick = this.editClick.bind(this);

        this.deleteClick = this.deleteClick.bind(this);

        this.eyeClick = this.eyeClick.bind(this);

        this.getNeighborhoodId = this.getNeighborhoodId.bind(this);

    }
    /**
     * 加载数据
     */
    @action
    public loadData() {
        this.props.GlobalManageGoodsDomainStore!.loaddata();
    }

    /**
     * 新增事件
     * @param e 
     */
    @action
    public addClick(e: React.SyntheticEvent<HTMLAnchorElement>) {

        e.preventDefault();

        const id = this.getNeighborhoodId(e);

        if (!id) { return; };
        this.props.onAdd(this.props.GlobalManageGoodsDomainStore!.currentEditData);


    }
    /**
     * 查看事件
     * @param e 
     */
    public eyeClick(e:React.SyntheticEvent<HTMLAnchorElement>){
        e.preventDefault();
        const id = this.getNeighborhoodId(e);
        if(!id){return;};
        if (this.props.GlobalManageGoodsDomainStore!.SelectedData(id)) {
            console.log("Number(id):",Number(id));
            const ix = this.props.GlobalManageGoodsDomainStore!.List.findIndex(x=>Number(x.id) === Number(id))
            console.log("ix:",ix);
            this.props.GlobalManageGoodsDomainStore!.lengths = Number(ix);
            this.props.onEyeClick(this.props.GlobalManageGoodsDomainStore!.currentEditData);
        } else {
            message.info('错误的事件参数');
        }
    }
    /**
     * 编辑事件
     * @param e 
     */
    @action
    public async editClick(e: React.SyntheticEvent<HTMLAnchorElement>) {

        e.preventDefault();

        const id = this.getNeighborhoodId(e);

        if (!id) { return; };

        if (this.props.GlobalManageGoodsDomainStore!.SelectedData(id)) {
            console.log("this.props.GlobalManageGoodsDomainStore!.currentEditData:",this.props.GlobalManageGoodsDomainStore!.
            currentEditData);
            this.props.onEdit(this.props.GlobalManageGoodsDomainStore!.currentEditData);
        } else {
            message.info('错误的事件参数');
        }

    }

    /**
     * 删除事件
     * @param e 
     */
    @action
    public deleteClick(value: string, e: React.SyntheticEvent<HTMLAnchorElement>) {
        console.log("执行")
        const deleteid = value;
        if (!deleteid) {
            message.info("无效的对象id");
            return;
        }
        const ix = deleteid.indexOf('_');
        if (ix < 0) {
            message.info('无效的对象id');
            return;
        }
        const id = Number(deleteid.substring(ix + 1));
        console.log("执行执行",deleteid)
        console.log("id:",id);
        if (!id) { return; }
        console.log("1111");
        this.props.GlobalManageGoodsDomainStore!.Deletedate(id);
    }

    /**
     * 获取点击元素的ID
     * @param e 
     */
    private getNeighborhoodId(e: React.SyntheticEvent<HTMLAnchorElement>): (string | undefined) {

        const id = e.currentTarget.getAttribute("id");

        if (!id) {
            message.info("无效的对象id")
            return undefined;
        }
        const index = id.indexOf("_");
        if (index < 0) {
            message.info("无效的对象id")
            return undefined;
        }
        try {
            return id.substring(index + 1);
        } catch (error) {
            message.info(error.message);
            return undefined;
        }

    }
}