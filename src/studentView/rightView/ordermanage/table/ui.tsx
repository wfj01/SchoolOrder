import { Divider, Icon, Table } from "antd";
import { inject, observer } from "mobx-react";
import 'orid/lib/style/standStyle/oridTablePC.scss';
import React from "react";
import { OrderManagementEntity } from "../entity";
import { IOrderManagementTableprops } from "./interface";
import { OrderManagementTableUiAction } from "./uiAction";

@inject("GlobalOrderManagementviewDoMainStore","GlobalListViewDoMainStore")
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
            title: '备注',
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
            dataIndex: 'total',
            key: "total",
            title: '总价',
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
        },
        {
            dataIndex: 'Evaluatetext',
            key: "Evaluatetext",
            title: '是否评价',
            width: '10%',
            editable: true,
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            key: "action",
            render: (text: any, record: OrderManagementEntity, index: number) => {
                return (
                    <div style={{ display: "inline-block" }}>
                        <div>
                            <a
                                href={'javascript:;'}
                                onClick={this.uiAction.eyeClick}
                                id={`eye_${record.id}`}
                                title="查看"
                            >
                                <Icon type="eye" title="查看" />
                            </a>
                            <Divider type="vertical" />
                            <a
                                href={'javascript:;'}
                                onClick={this.uiAction.editClick}
                                id={`edit_${record.id}`}
                                title="编辑"
                            >
                                <Icon type="edit" title="编辑" />
                            </a>
                        </div>
                    </div>
                );
            },
            title: "操作",
            width: "20%"
        },
    ]

    constructor(props: IOrderManagementTableprops) {
        super(props);
        this.uiAction = new OrderManagementTableUiAction(props);
    }
    public componentDidMount() {
        this.props.GlobalOrderManagementviewDoMainStore!.studentid = this.props.GlobalListViewDoMainStore!.LoginUsername;
    }

    public componentWillUnmount(){
        this.props.GlobalOrderManagementviewDoMainStore!.ClearData();
    }
    public render() {
        return (
            <>
                <Table
                    columns={this.columns}
                    className={"ori-table ori-table-fixed"}
                    loading={
                        {
                            spinning: this.props.GlobalOrderManagementviewDoMainStore!.isloading,
                            tip: "正在加载中"
                        }
                    }
                    dataSource={this.props.GlobalOrderManagementviewDoMainStore!.allReportTableData}
                    pagination={false}
                    style={{ height: '550px' }}
                    locale={{ emptyText: '暂无 数据' }}
                    rowKey={this.props.GlobalOrderManagementviewDoMainStore!.getRowIndex}
                />
            </>
        )
    }
}
