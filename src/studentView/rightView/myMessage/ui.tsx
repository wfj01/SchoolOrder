import { List } from "antd";
import React from "react";


const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

export class MymessageView extends React.Component {

    public render() {
        return (
            <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered={true}
                dataSource={data}
                renderItem={(item: React.ReactNode) => (
                    <List.Item>
                    {item}
                  </List.Item>

                )}
                />
        )
    }
}