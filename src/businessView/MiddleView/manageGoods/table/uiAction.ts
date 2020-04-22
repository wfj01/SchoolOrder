import { message } from "antd";
import { action } from "mobx";

export class ManageGoodsTableUiAction {

    /**
     * 数据接口
     */
    private props: any;

    /**
     * 构造方法
     */
    constructor(props: any) {

        this.props = props;

        this.loadData = this.loadData.bind(this);

        this.addClick = this.addClick.bind(this);

        this.editClick = this.editClick.bind(this);

        this.deleteClick = this.deleteClick.bind(this);

        this.getNeighborhoodId = this.getNeighborhoodId.bind(this);

    }
    /**
     * 加载数据
     */
    @action
    public loadData() {
        this.props.GlobalNeighborhoodStore!.LoadData();
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
        // this.domainStore.CurrentEditNeighborhood.FatherId = id;
        this.props.onAdd(this.props.GlobalNeighborhoodStore!.CurrentEditNeighborhood);


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

        if (this.props.GlobalNeighborhoodStore!.SelectNeighborhood(id)) {
            // if(this.domainStore!.CurrentEditNeighborhood.FatherId.length>0){
            //     this.domainStore!.CurrentEditNeighborhood.FatherId=await this.domainStore.GetNameByKey(this.domainStore.CurrentEditNeighborhood.FatherId);// +"_"+this.domainStore.CurrentEditNeighborhood.FatherId;
            // }
            console.info(this.props.GlobalNeighborhoodStore!.CurrentEditNeighborhood);
            this.props.onEdit(this.props.GlobalNeighborhoodStore!.CurrentEditNeighborhood);
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
        const id = deleteid.substring(ix + 1);

        if (!id) { return; };

        // if (this.domainStore.SelectNeighborhood(id)) {
        //     console.info(this.domainStore.CurrentEditNeighborhood);
        //     this.domainStore.DeleteNeighborhood(this.domainStore.CurrentEditNeighborhood);
        // } else {
        //     message.info('错误的事件参数');
        // }
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