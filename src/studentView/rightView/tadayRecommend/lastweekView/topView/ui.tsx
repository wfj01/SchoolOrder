import { Icon, Menu } from 'antd';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { ITopViewProps } from './interface';


@inject("GlobalLastWeekDomainStore")
@observer
export class TopView extends React.Component<ITopViewProps> {

    constructor(props:ITopViewProps){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    public render() {
        return (
            <Menu onClick={this.handleClick} mode="horizontal" defaultSelectedKeys={["0"]}>
                <Menu.Item key="0">
                    <Icon type="mail" />
                        状元
                </Menu.Item>
                <Menu.Item key="1">
                    <Icon type="appstore" />
                        榜眼
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="appstore" />
                        探花
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="appstore" />
                        第四
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="appstore" />
                        第五
                </Menu.Item>
            </Menu>
        );
    }
    public handleClick = (e: { key: any; }) => {
        this.props.GlobalLastWeekDomainStore!.imageUrl = this.props.GlobalLastWeekDomainStore!.imageList[e.key];
        this.props.GlobalLastWeekDomainStore!.lengths =e.key;
        this.props.GlobalLastWeekDomainStore!.Loadate();
    };

}