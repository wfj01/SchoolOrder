import { Table } from "antd";
import { inject, observer } from "mobx-react";
import React from "react";
import { IStudentListTableProps } from "./interface";


@inject("GlobalStudentListDomainStores")
@observer
export class StudentListTable extends React.Component<IStudentListTableProps> {

    private columns: any[] = [
        {
            dataIndex: 'name',
            key: 'name',
            title: '名称',
            width: "10%",
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: 'password',
            key: 'password',
            title: '密码',
            width: "10%",
            render: (text: any) => <span title={text}>{text}</span>
        },

        {
            dataIndex: 'shopname',
            key: 'shopname',
            title: '店铺名称',
            width: '10%',
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: "shopaddress",
            key: 'shopaddress',
            title: "店铺地址",
            width: '10%',
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: 'phonenumber',
            key: "电话号码",
            title: '性别',
            width: '10%',
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: 'selfintroduction',
            key: "selfintroduction",
            title: '描述自己',
            width: '10%',
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: 'createddate',
            key: 'createddate',
            title: '创建时间',
            width: '10%',
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: 'license',
            key: "license",
            title: '许可证',
            width: '10%',
            render: (text: any) => <span title={text}>{text}</span>
        },
    ]

    
    public componentDidMount(){
        this.props.GlobalStudentListDomainStores!.Loaddata();
    }
    public render() {
        return (
            <Table
                columns={this.columns}
                className={"ori-table ori-table-fixed"}
                loading={
                    {
                        spinning: this.props.GlobalStudentListDomainStores!.isLoading,
                        tip: "正在加载中"
                    }
                }
                pagination={false}
                locale={{ emptyText: '暂无 数据' }}
                dataSource={this.props.GlobalStudentListDomainStores!.allReportTableData }
            />
        )
    }
}