import { Table } from "antd";
import { inject, observer } from 'mobx-react';
import React from 'react';
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
            width: "15%",
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
            dataIndex: 'score',
            key: 'score',
            title: '得分',
            width: '10%',
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
            width: '30%',
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: 'windows',
            key: "windows",
            title: '窗口',
            width: '15%',
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: 'remarks',
            key: 'remarks',
            title: '备注',
            width: '10%',
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: 'number',
            key: "number",
            title: '数量',
            width: '10%',
            render: (text: any) => <span title={text}>{text}</span>
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
                    loading={this.props.GlobalCollegeTownDoMainStore!.isLoading}
                    dataSource={this.props.GlobalCollegeTownDoMainStore!.showReportTableData.slice()}
                    style={{height:'550px'}}
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