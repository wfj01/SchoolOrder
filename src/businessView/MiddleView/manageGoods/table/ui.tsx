import { Divider, Icon, Popconfirm, Table, Tooltip } from 'antd';
import { ColumnProps } from 'antd/lib/table';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { ManageGoodsEntity } from '../entity';
import { IManageGoodsTableProps } from './interface';
import { ManageGoodsTableUiAction } from './uiAction';


@inject("GlobalManageGoodsDomainStore")
@observer
export class ManageGoodsTable extends React.Component<IManageGoodsTableProps>{
    private columns: Array<ColumnProps<ManageGoodsEntity>> = Array<ColumnProps<ManageGoodsEntity>>(
        {
            dataIndex: 'ID',
            key: 'ID',
            title: 'ID',
            width: "10%",
            sorter: (a: any, b: any) => a.title.length - b.title.length,
            render: (text) => <Tooltip placement="topLeft" title={text}>{text}</Tooltip>
        },
        {
            dataIndex: 'Dishname',
            key: 'Dishname',
            title: '菜名',
            width: "10%",
            sorter: (a: any, b: any) => a.title.length - b.title.length,
            render: (text) => <Tooltip placement="topLeft" title={text}>{text}</Tooltip>
        },
        {
            dataIndex: 'Price',
            key: 'Price',
            title: '价格',
            width: "10%",
            sorter: (a: any, b: any) => a.title.length - b.title.length,
            render: (text) => <Tooltip placement="topLeft" title={text}>{text}</Tooltip>
        },
        {
            dataIndex: 'Score',
            key: 'Score',
            title: '得分',
            width: '10%',
            sorter: (a: any, b: any) => a.title.length - b.title.length,
            render: (text) => <Tooltip placement="topLeft" title={text}>{text}</Tooltip>
        },
        {
            dataIndex: "Time",
            key: 'Time',
            title: "时间",
            width: '10%',
            sorter: (a: any, b: any) => a.title.length - b.title.length,
            render: (text) => <Tooltip placement="topLeft" title={text}>{text}</Tooltip>
        },
        {
            dataIndex: "Windows",
            key: 'Windows',
            title: "窗口",
            width: "10%",
            sorter: (a: any, b: any) => a.title.length - b.title.length,
            render: (text) => <Tooltip placement="topLeft" title={text}>{text}</Tooltip>
        },
        {
            dataIndex: 'Explain',
            key: 'Explain',
            title: '说明',
            width: '10%',
            sorter: (a: any, b: any) => a.title.length - b.title.length,
            render: (text) => <Tooltip placement="topLeft" title={text}>{text}</Tooltip>
        },
        {
            key: "action",
            render: (text: any, record: ManageGoodsEntity, index: number) => {
                return (
                    <div style={{ display: "inline-block" }}>
                        <div>
                            <a
                                href={'javascript:;'}
                                onClick={this.uiAction.editClick}
                                id={`edit_${record.id}`}
                                title="编辑"
                            >
                                <Icon type="edit" title="编辑" />
                            </a>
                            <Divider type="vertical" />
                            <Popconfirm placement="top" title={"确定要删除吗？"} onConfirm={this.uiAction.deleteClick.bind(undefined, `delete_${record.id}`)} okText="确定" cancelText="取消">
                                <a
                                    href={'javascript:;'}
                                    // onClick = {this.uiAction.deleteClick}
                                    id={`delete_${record.id}`}
                                    title="删除"
                                >
                                    <Icon type="delete" title="删除" />
                                </a>
                            </Popconfirm>
                        </div>
                    </div>
                );
            },
            title: "操作",
            width: "20%"
        },

    )

    private uiAction: ManageGoodsTableUiAction;
    constructor(props: IManageGoodsTableProps) {
        super(props);
        this.uiAction = new ManageGoodsTableUiAction(props);
    }
    public componentDidMount() {
        this.props.GlobalManageGoodsDomainStore!.Loadview()
    }
    public render() {
        return (
            <Table
                columns={this.columns}
                pagination={false}
                dataSource={this.props.GlobalManageGoodsDomainStore!.List.slice()}
                loading={this.props.GlobalManageGoodsDomainStore!.IsLoading}
                locale={{ emptyText: '暂无 数据' }} />
        )
    }
}