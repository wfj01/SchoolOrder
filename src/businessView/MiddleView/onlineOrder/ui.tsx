import { Tabs } from "antd";
import React from "react";
import { UnidentifiedOrderTable } from "./table1/ui";
import { ConfirmedOrderTable } from "./table2/ui";
import { CompletedOrderTable } from "./table3/ui";
const { TabPane } = Tabs;

export class OnlineOrderView extends React.Component {
    public render() {
        return (
            <>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="未确认" key="1">
                        <UnidentifiedOrderTable />
                    </TabPane>
                    <TabPane tab="已确认" key="2">
                        <ConfirmedOrderTable />
                    </TabPane>
                    <TabPane tab="已完成" key="3">
                        <CompletedOrderTable />
                    </TabPane>
                </Tabs>,
            </>
        )
    }
}