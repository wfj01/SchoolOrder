import { Icon, Table } from "antd";
import { inject, observer } from 'mobx-react';
import React from 'react';
import { CollegeTownEntity } from "../entity";
import { ICollegeTownTableProps } from './interface';
import { CollegeTownTableUiAction } from './uiAction';


@inject("GlobalCollegeTownDoMainStore")
@observer
export class CollegeTownTable extends React.Component<ICollegeTownTableProps>{


    private uiAction: CollegeTownTableUiAction;


    private columns: any[] = [
        {
            dataIndex: 'dishname',
            key: 'dishname',
            title: '菜名',
            width: "12%",
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: 'price',
            key: 'price',
            title: '价格(元/500g)',
            width: "13%",
            render: (text: any) => <span title={text}>{text}</span>
        },

        {
            dataIndex: 'score',
            key: 'score',
            title: '得分',
            width: '7%',
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: "time",
            key: 'time',
            title: "时间",
            width: '10%',
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: 'practice',
            key: "practice",
            title: '做法',
            width: '25%',
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
            width: '5%',
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: 'number',
            key: "number",
            title: '数量',
            width: '5%',
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            key: "action",
            render: (text: any, record: CollegeTownEntity, index: number) => {
                return (
                    <div style={{ display: "inline-block" }}>
                        <div>
                            <a
                                href={'javascript:;'}
                                onClick={this.uiAction.EyeClick}
                                id={`eye_${record.id}`}
                                title="查看"
                            >
                                <Icon type="eye" title="查看" />
                            </a>
                        </div>
                    </div>
                )
            },
            title: "操作",
        },
    ]

    constructor(props: ICollegeTownTableProps) {
        super(props);
        this.uiAction = new CollegeTownTableUiAction(props);
    }

    public componentDidMount(){
        this.props.GlobalCollegeTownDoMainStore!.LoadData();
    }

    public render() {

        return (
            <>
                <Table
                    columns={this.columns}
                    className={"ori-table ori-table-fixed"}
                    loading={
                        {
                            spinning:this.props.GlobalCollegeTownDoMainStore!.isLoading,
                            tip:"正在加载中"
                        }
                    }
                    dataSource={this.props.GlobalCollegeTownDoMainStore!.showReportTableData.slice()}
                    pagination={false}
                    locale={{ emptyText: '暂无 数据' }}
                    rowSelection={{
                        onChange: (selectedRowKeys: string[] | number[], selectedRows: any[]) => {
                            this.uiAction.TableOnChaneg(selectedRowKeys, selectedRows);
                            console.log("selectedRowKeys:" + selectedRowKeys + ",selectedRows:", selectedRows)
                            
                        },
                         selectedRowKeys: this.props.GlobalCollegeTownDoMainStore!.selectedRowKeys,
                    }}
                    rowKey={this.props.GlobalCollegeTownDoMainStore!.getRowIndex}
                />
            </>
        )
    }
}