import Table from 'antd/lib/table';
import { inject, observer } from 'mobx-react';
import 'orid/es/style/standStyle/oridTablePC.scss';
import React from 'react';
import { IRestaurantTableProps } from './interface';
import { SecondRestaurantTableUiAction } from './uiAction';


/**
 * 第二餐厅-表格
 */
@inject("GlobalSecondDoMainStore")
@observer
export class SecondRestaurantTable extends React.Component<IRestaurantTableProps>{

    private uiAction: SecondRestaurantTableUiAction;

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

    constructor(props:IRestaurantTableProps){
        super(props);
        this.uiAction = new SecondRestaurantTableUiAction(props);
    }

    public componentDidMount(){
        this.props.GlobalSecondDoMainStore!.LoadData();
    }

   
    public render(){
        return(
            <Table
            columns={this.columns}
            className={"ori-table ori-table-fixed"}
            pagination={false}
            dataSource={this.props.GlobalSecondDoMainStore!.showReportTableData.slice()}
            loading = {this.props.GlobalSecondDoMainStore!.isLoading}
            locale={{ emptyText: '暂无 数据' }}
            style={{height:'550px'}}
            rowSelection={{
                onChange: (selectedRowKeys: string[] | number[], selectedRows: any[]) => {
                    this.uiAction.TableOnChaneg(selectedRowKeys, selectedRows);
                    console.log("selectedRowKeys:" + selectedRowKeys + ",selectedRows:", selectedRows)
                    
                },
                 selectedRowKeys: this.props.GlobalSecondDoMainStore!.selectedRowKeys,
            }}
            rowKey={this.props.GlobalSecondDoMainStore!.getRowIndex}
            />
        )
    }
}