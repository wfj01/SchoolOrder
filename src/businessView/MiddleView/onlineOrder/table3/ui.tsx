import { Button, Popconfirm, Table } from "antd";
import { inject, observer } from "mobx-react";
import 'orid/lib/style/standStyle/oridTablePC.scss';
import React from "react";
import { OnlineOrderTableEntity } from "../entity";
import { ICompletedOrderTableProps } from "./interface";
import { CompletedOrderTableUiAction } from "./uiAction";


/**
 * 已完成订单表格数据
 */
@inject("GlobalOnlineOrderDoMainStore")
@observer
export class CompletedOrderTable extends React.Component<ICompletedOrderTableProps>{

    private uiAction: CompletedOrderTableUiAction;


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
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: "studentname",
            key: "studentname",
            title: '客户姓名',
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: "studentaddress",
            key: "studentaddress",
            title: '客户地址',
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: "phone",
            key: "phone",
            title: '客户号码',
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: 'action',
            key: 'action',
            title: '确认订单',
            render: (text: any, record: OnlineOrderTableEntity, index: number) => {
                return (
                    <div>
                        <Popconfirm
                            title="确定要确认吗?"
                            onConfirm={this.uiAction.handleAction.bind(undefined, `online_${record.id}`)}
                            okText="确认" cancelText="取消" >
                            <a
                                id={`online_${record.id}`}
                                href={"##"}
                                title="确认订单"
                            >
                                <Button href="##">确认订单</Button>
                            </a>
                        </Popconfirm >
                    </div>
                );
            },
        }
    ]
    constructor(props: ICompletedOrderTableProps) {
        super(props);
        this.uiAction = new CompletedOrderTableUiAction(props);
    }

    public componentDidMount() {
        this.props.GlobalOnlineOrderDoMainStore!.Loaddatab();
    }

    public render() {
        return (
            <Table
                columns={this.columns}
                loading={{
                    spinning: this.props.GlobalOnlineOrderDoMainStore!.Isloading,
                    tip:"正在加载中"
                }}
                className={"ori-table ori-table-fixed"}
                pagination={false}
                locale={{ emptyText: '暂无 数据' }}
                dataSource={this.props.GlobalOnlineOrderDoMainStore!.allReportTableData3.slice()}
            />
        )
    }
}