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
            dataIndex: 'dishname',
            key: 'dishname',
            title: 'dishname',
            width: "10%",
            sorter: (a: any, b: any) => a.title.length - b.title.length,
            render: (text) => <Tooltip placement="topLeft" title={text}>{text}</Tooltip>
        },
        {
            dataIndex: 'price',
            key: 'price',
            title: 'price',
            width: "10%",
            sorter: (a: any, b: any) => a.title.length - b.title.length,
            render: (text) => <Tooltip placement="topLeft" title={text}>{text}</Tooltip>
        },
        {
            dataIndex: 'practice',
            key: 'practice',
            title: 'practice',
            width: '10%',
            sorter: (a: any, b: any) => a.title.length - b.title.length,
            render: (text) => <Tooltip placement="topLeft" title={text}>{text}</Tooltip>
        },
        {
            dataIndex: "time",
            key: 'time',
            title: "time",
            width: '10%',
            sorter: (a: any, b: any) => a.title.length - b.title.length,
            render: (text) => <Tooltip placement="topLeft" title={text}>{text}</Tooltip>
        },
        {
            dataIndex: "windows",
            key: 'windows',
            title: "windows",
            width: "10%",
            sorter: (a: any, b: any) => a.title.length - b.title.length,
            render: (text) => <Tooltip placement="topLeft" title={text}>{text}</Tooltip>
        },
        {
            dataIndex: 'remarks',
            key: 'remarks',
            title: 'remarks',
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
        this.props.GlobalManageGoodsDomainStore!.loaddata()
    }
    public render() {
        return (
            <Table
                columns={this.columns}
                pagination={false}
                dataSource={this.props.GlobalManageGoodsDomainStore!.List.slice()}
                loading={this.props.GlobalManageGoodsDomainStore!.isLoading}
                locale={{ emptyText: '暂无 数据' }} />
        )
    }
}