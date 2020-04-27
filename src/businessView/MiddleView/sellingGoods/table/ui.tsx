import { Table, Tooltip } from "antd";
import { inject, observer } from "mobx-react";
import React from "react";
import { ISellingGoodsTableProps } from "./interface";

/**
 * 在卖商品表格视图
 */
@inject("GlobalSellGoodsDoMainStore")
@observer
export class SellingGoodsTable extends React.Component <ISellingGoodsTableProps>{
    
    public componentDidMount(){
        this.props.GlobalSellGoodsDoMainStore!.Loadview();
        this.props.GlobalSellGoodsDoMainStore!.tableColumns= [
            {
                dataIndex: 'id',
                key: 'id',
                title: 'Id',
                width: "10%",
                render: (text:any) => <Tooltip placement="topLeft" title={text}>{text}</Tooltip>
            },
            {
                dataIndex: 'dishname',
                key: 'dishname',
                title: '菜名',
                width: "10%",
                sorter: (a: any, b: any) => a.title.length - b.title.length,
                render: (text:any) => <Tooltip placement="topLeft" title={text}>{text}</Tooltip>
            },
            {
                dataIndex: 'price',
                key: 'price',
                title: '价格',
                width: "10%",
                sorter: (a: any, b: any) => a - b,
                render: (text:any) => <Tooltip placement="topLeft" title={text}>{text}</Tooltip>
            },
            {
                dataIndex: 'practice',
                key: 'practice',
                title: '做法',
                width: '10%',
                render: (text:any) => <Tooltip placement="topLeft" title={text}>{text}</Tooltip>
            },
            {
                dataIndex: "time",
                key: 'time',
                title: "时间",
                width: '10%',
                render: (text:any) => <Tooltip placement="topLeft" title={text}>{text}</Tooltip>
            },
            {
                dataIndex: "windows",
                key: 'windows',
                title: "窗口",
                width: "10%",
                render: (text:any) => <Tooltip placement="topLeft" title={text}>{text}</Tooltip>
            },
            {
                dataIndex: 'remarks',
                key: 'remarks',
                title: '说明',
                width: '10%',
                render: (text:any) => <Tooltip placement="topLeft" title={text}>{text}</Tooltip>
            },
        ]
    }
    public render() {
        const columns= this.props.GlobalSellGoodsDoMainStore!.tableColumns;
        return (
            <Table
                columns={columns}
                pagination={false}
                locale={{ emptyText: '暂无 数据' }}
                loading={{
                    spinning:this.props.GlobalSellGoodsDoMainStore!.IsLoading,
                    tip:'正在加载中'
                }}
                style={{height:'600px'}}
                dataSource = {this.props.GlobalSellGoodsDoMainStore!.showReportTableData.slice()}
            />
        )
    }
}