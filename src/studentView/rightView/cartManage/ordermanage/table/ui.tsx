import { Table } from "antd";
import { inject, observer } from "mobx-react";
import 'orid/lib/style/standStyle/oridTablePC.scss';
import React from "react";
import { IOrderManagementTableprops } from "./interface";
import { OrderManagementTableUiAction } from "./uiAction";

@inject("GlobalOrderManagementDoMainStore","GlobalListViewDoMainStore")
@observer
export class OrderManagementTable extends React.Component<IOrderManagementTableprops> {

    private uiAction:OrderManagementTableUiAction;

    private columns: any[] = [
        {
            dataIndex: 'dishname',
            key: 'dishname',
            title: '菜名',
            width: "10%",
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: 'price',
            key: 'price',
            title: '价格(元/500g)',
            width: "10%",
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: 'windows',
            key: "windows",
            title: '窗口',
            width: '10%',
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: 'remarks',
            key: 'remarks',
            title: '点评',
            width: '10%',
            editable: true,
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: 'number',
            key: "number",
            title: '数量',
            width: '10%',
            editable: true,
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: 'state',
            key: "state",
            title: '状态',
            width: '10%',
            editable: true,
            render: (text: any) => <span title={text}>{text}</span>
        }
    ]

    constructor(props: IOrderManagementTableprops) {
        super(props);
        this.uiAction = new OrderManagementTableUiAction(props);
    }
    public componentDidMount() {
        this.props.GlobalOrderManagementDoMainStore!.studentid = this.props.GlobalListViewDoMainStore!.LoginUsername;
        this.uiAction.loaddata();
    }

    public componentWillUnmount(){
        this.props.GlobalOrderManagementDoMainStore!.ClearData();
    }
    public render() {
        return (
            <>
                <Table
                    columns={this.columns}
                    className={"ori-table ori-table-fixed"}
                    loading={
                        {
                            spinning: this.props.GlobalOrderManagementDoMainStore!.isloading,
                            tip: "正在加载中"
                        }
                    }
                    dataSource={this.props.GlobalOrderManagementDoMainStore!.showReportTableData}
                    pagination={false}
                    style={{ height: '550px' }}
                    locale={{ emptyText: '暂无 数据' }}
                    rowKey={this.props.GlobalOrderManagementDoMainStore!.getRowIndex}
                />
            </>
        )
    }
}
