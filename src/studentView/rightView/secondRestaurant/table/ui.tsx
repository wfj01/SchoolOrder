import { Icon } from 'antd';
import Table from 'antd/lib/table';
import { inject, observer } from 'mobx-react';
import 'orid/es/style/standStyle/oridTablePC.scss';
import React from 'react';
import { SecondRestaurantEntity } from '../entity';
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
            width: '18%',
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
            render: (text: any, record: SecondRestaurantEntity, index: number) => {
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