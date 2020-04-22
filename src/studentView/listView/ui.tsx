import { Menu } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import { inject, observer } from 'mobx-react';
import React from "react";
import { CollegeTown } from '../rightView/afterSchool/collegeTown/ui';
import { SouthSnack } from '../rightView/afterSchool/southSnack/ui';
import { CartManageView } from '../rightView/cartManage/ui';
import { FirstRestaurant } from '../rightView/firstRestaurant/ui';
import { LastWeekView } from '../rightView/lastweekView/ui';
import { SecondRestaurant } from '../rightView/secondRestaurant/ui';
import { TadayRecommend } from '../rightView/tadayRecommend/ui';
import './index.css';
import { IMenuViewProps } from './interface';
const { SubMenu } = Menu;


interface IMenuViewState {
    current: string;
}

/**
 * 程序主页面
 */
@inject("GlobalFirstDoMainStore")
@observer
export class MenuView extends React.Component<IMenuViewProps, IMenuViewState> {

    // private uiaction :MenuViewuiAction;

    constructor(props: IMenuViewProps) {
        super(props);
        this.state = {
            current: ""
        }
        // this.uiaction = new MenuViewuiAction(props);
        this.handleclick = this.handleclick.bind(this);
        this.renderPage = this.renderPage.bind(this);
    }

    public render() {
        return (
            <div style={{ padding: '0px 6px 8px 8px', display: this.props.display2 }}>
                <div>
                    <div style={{ float: "left", width: '12%' }}>
                        <Menu
                            theme={"dark"}
                            onClick={this.handleclick}
                            selectedKeys={[this.state.current]}
                            mode="inline"
                            defaultOpenKeys={['01','02','03']}
                        >
                            <SubMenu
                                key="01"
                                title={
                                    <span>
                                        <span>推荐菜</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="0101">今日推荐菜</Menu.Item>
                                <Menu.Item key="0102">上周榜单</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="02"
                                title={
                                    <span>
                                        <span>订餐</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="0201">第一餐厅</Menu.Item>
                                <Menu.Item key="0202">第二餐厅</Menu.Item>
                                <SubMenu key="0203" title="校外订餐">
                                    <Menu.Item key="020301">大学城</Menu.Item>
                                    <Menu.Item key="020302">南门小吃</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu
                                key="03"
                                title={
                                    <span>
                                        <span>买单</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="0401">购物车管理</Menu.Item>
                                <Menu.Item key="0402">订单管理</Menu.Item>
                                <Menu.Item key="0403">自我管理</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                </div>
                <div style={{ float: 'left', width: '85%', marginLeft: '16px' }}>
                    {this.renderPage()}
                </div>
            </div>
        )
    }


    public handleclick(param: ClickParam) {
        this.setState({
            current: param.key,
        });
        console.log("CLICK", this.state.current);
    }

    private renderPage(): JSX.Element {
        console.log("已执行:", this.state.current);
        switch (this.state.current) {
            case "0101":
                return <TadayRecommend />
            case "0102":
                return <LastWeekView />
            case "0201":
                return <FirstRestaurant />
            case "0202":
                return <SecondRestaurant />
            case "020301":
                return <CollegeTown />
            case "020302":
                return <SouthSnack />
            case "0401":
                return<CartManageView/>
            default:
                return <div />
        }
    }
}