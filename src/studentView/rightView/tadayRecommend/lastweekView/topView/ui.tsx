import { Icon, Menu } from 'antd';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { ITopViewProps } from './interface';


@inject("GlobalLastWeekDomainStore")
@observer
export class TopView extends React.Component<ITopViewProps> {

    constructor(props: ITopViewProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    public render() {
        return (
            <Menu onClick={this.handleClick} mode="horizontal" defaultSelectedKeys={["0"]}>
                <Menu.Item key="0" style={{ color: "#FF0000" }}>
                    <Icon type="heart" style={{ color: " #FF0000" }} />
                        状元
                </Menu.Item>
                <Menu.Item key="1"  style={{ color: "#FF7D00" }}>
                    <Icon type="heart" style={{ color: "#FF7D00" }} />
                        榜眼
                </Menu.Item>
                <Menu.Item key="2"style={{ color: "#00FFFF" }}>
                    <Icon type="heart" style={{ color: "#00FFFF" }} />
                        探花
                </Menu.Item>
                <Menu.Item key="3"style={{ color: "#0000FF" }}>
                    <Icon type="heart" style={{ color: " #0000FF" }} />
                        第四
                </Menu.Item>
                <Menu.Item key="4"style={{ color: "#FF00FF" }}>
                    <Icon type="heart" style={{ color: "#FF00FF" }} />
                        第五
                </Menu.Item>
            </Menu>
        );
    }
    public handleClick = (e: { key: any; }) => {
        this.props.GlobalLastWeekDomainStore!.imageUrl = this.props.GlobalLastWeekDomainStore!.imageList[e.key];
        this.props.GlobalLastWeekDomainStore!.lengths = e.key;
        this.props.GlobalLastWeekDomainStore!.Loadate();
    };

}