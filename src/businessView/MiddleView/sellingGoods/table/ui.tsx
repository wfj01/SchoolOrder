import { Table } from "antd";
import { ColumnProps } from "antd/lib/table";
import React from "react";
import { SellingGoodsEntity } from "../entity";

/**
 * 在卖商品表格视图
 */
export class SellingGoodsTable extends React.Component{

    private columns : Array<ColumnProps<SellingGoodsEntity>> = Array<ColumnProps<SellingGoodsEntity>>(
        {
            dataIndex: 'ID',
            key: 'ID',
            title: 'ID',
            width: "10%"
        },
        {
            dataIndex: 'Dishname',
            key: 'Dishname',
            title: '菜名',
            width: "10%"
        },
        {
            dataIndex: 'Price',
            key: 'Price',
            title: '价格',
            width: "10%"
        },
        {
            dataIndex: 'Score',
            key: 'Score',
            title: '得分',
            width: '10%',
        },
        {
            dataIndex: "Time",
            key: 'Time',
            title: "时间",
            width: '10%',
        },
        {
            dataIndex: "Windows",
            key: 'Windows',
            title: "窗口",
            width: "10%",
        },
        {
            dataIndex: 'Explain',
            key: 'Explain',
            title: '说明',
            width: '10%'
        },

        
    )
    public render(){
        return(
            <Table
            columns={this.columns}
            pagination={false}
            locale={{ emptyText: '暂无 数据' }}
            />
        )
    }
}