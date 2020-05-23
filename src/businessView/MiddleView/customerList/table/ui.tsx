import { Table } from "antd";
import { inject, observer } from "mobx-react";
import React from "react";
import { ICustomerListTableProps } from "./interface";


@inject("GlobalCustomerListDomainStores")
@observer
export class CustomerListTable extends React.Component<ICustomerListTableProps> {

    private columns: any[] = [
        {
            dataIndex: 'studentid',
            key: 'studentid',
            title: '学号',
            width: "10%",
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: 'name',
            key: 'name',
            title: '昵称',
            width: "10%",
            render: (text: any) => <span title={text}>{text}</span>
        },

        {
            dataIndex: 'studentname',
            key: 'studentname',
            title: '姓名',
            width: '10%',
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: "class",
            key: 'class',
            title: "班级",
            width: '10%',
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: 'sextext',
            key: "sextext",
            title: '性别',
            width: '10%',
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: 'address',
            key: "address",
            title: '地址',
            width: '10%',
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: 'telephone',
            key: 'telephone',
            title: '电话',
            width: '10%',
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: 'birtherdate',
            key: "birtherdate",
            title: '生日',
            width: '10%',
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: 'createtime',
            key: "createtime",
            title: '创建时间',
            width: '10%',
            render: (text: any) => <span title={text}>{text}</span>
        },
    ]

    
    public componentDidMount(){
        this.props.GlobalCustomerListDomainStores!.Loaddata();
    }
    public render() {
        return (
            <Table
                columns={this.columns}
                className={"ori-table ori-table-fixed"}
                loading={
                    {
                        spinning: this.props.GlobalCustomerListDomainStores!.isLoading,
                        tip: "正在加载中"
                    }
                }
                pagination={false}
                locale={{ emptyText: '暂无 数据' }}
                dataSource={this.props.GlobalCustomerListDomainStores!.showReportTableData}
            />
        )
    }
}