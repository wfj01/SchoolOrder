import { Menu } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import { inject, observer } from 'mobx-react';
import moment from 'moment';
import React from "react";
import { BusinessListView } from '../../businessView/listView/ui';
import Clock from '../../shizhong';
import { CollegeTown } from '../rightView/afterSchool/collegeTown/ui';
import { SouthSnack } from '../rightView/afterSchool/southSnack/ui';
import { OrderManagement } from '../rightView/cartManage/ordermanage/listview/ui';
import { CartManageView } from '../rightView/cartManage/ui';
import { FirstRestaurant } from '../rightView/firstRestaurant/ui';
import { MymessageViewa } from '../rightView/myMessage';
import { OrderManagementview } from '../rightView/ordermanage/listview/ui';
import { SecondRestaurant } from '../rightView/secondRestaurant/ui';
import { Menuselection } from '../rightView/tadayRecommend/ui';
import './index.css';
import { IMenuViewProps } from './interface';
import { MenuViewuiAction } from './uiAction';
import Zaixianliuyan from './zaixianliuyan/ui';
const { SubMenu } = Menu;


interface IMenuViewState {
    current: string;
    display1: string;
    display2: string;
}

/**
 * 程序主页面
 */
@inject("GlobalFirstDoMainStore")
@observer
export class MenuView extends React.Component<IMenuViewProps, IMenuViewState> {

    private uiaction: MenuViewuiAction;



    constructor(props: IMenuViewProps) {
        super(props);
        this.state = {
            current: "0101",
            display1: "block",
            display2: 'none'
        }
        this.uiaction = new MenuViewuiAction(props);
        this.handleclick = this.handleclick.bind(this);
        this.renderPage = this.renderPage.bind(this);
        this.handleshangjiaclick = this.handleshangjiaclick.bind(this);
    }

    public render() {
        return (
            <>
                <div style={{ display: this.state.display1 }}>
                    <div style={{ display: this.props.display2 }}>
                        <div style={{ height: 50, backgroundColor: '#000c17', display: "flex", justifyContent: 'space-between' }}>
                            <div style={{ display: "flex", justifyContent: 'start', width: 300 }}>
                                <div>
                                    <img style={{ width: 60, height: 50 }} src={require("../../image/chilogo.png")} />
                                </div>
                                <div style={{ color: "#FFF", fontSize: '15px', marginLeft: '5px', lineHeight: '50px' }}>在线订餐系统</div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "start" }}>
                                <div style={{ color: "blue", fontSize: '15px', marginLeft: '5px', lineHeight: '50px', paddingRight: 20 }} onClick={this.handleshangjiaclick}>切换为商家模式</div>
                                <div style={{ color: "#FFF", fontSize: '15px', marginLeft: '5px', lineHeight: '50px', paddingRight: 20 }} onClick={this.uiaction.handleclick}>联系我们</div>
                                <div style={{ color: "#FFF", fontSize: '15px', marginLeft: '5px', lineHeight: '50px', paddingRight: 20 }} onClick={this.uiaction.handleclick}>{moment().format('YYYY-MM-DD')}</div>
                                <div style={{ color: "#FFF", fontSize: '15px', marginLeft: '5px', lineHeight: '50px', paddingRight: 20 }} onClick={this.uiaction.handleclick}>{moment().format('dddd')}</div>
                                <Clock />
                            </div>
                        </div>
                        <div>
                            <div style={{ float: "left", width: '12%' }}>
                                <Menu
                                    theme={"light"}
                                    onClick={this.handleclick}
                                    selectedKeys={[this.state.current]}
                                    mode="inline"
                                    defaultOpenKeys={['01', '02', '03', '04']}
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
                                        <Menu.Item key="020301">大学城</Menu.Item>
                                        <Menu.Item key="020302">南门小吃</Menu.Item>
                                    </SubMenu>
                                    <SubMenu
                                        key="03"
                                        title={
                                            <span>
                                                <span>买单</span>
                                            </span>
                                        }
                                    >
                                        <Menu.Item key="0301">购物车管理</Menu.Item>
                                        <Menu.Item key="0302">订单管理</Menu.Item>
                                    </SubMenu>
                                    <SubMenu
                                        key="04"
                                        title={
                                            <span>
                                                <span>我的</span>
                                            </span>
                                        }
                                    >
                                        <Menu.Item key="0401">我的信息</Menu.Item>
                                        <Menu.Item key="0402">订单评价</Menu.Item>
                                        <Menu.Item key="0403">自我管理</Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </div>
                        </div>
                        <div style={{ float: 'left', width: '85%', marginLeft: '16px' }}>
                            {this.renderPage()}
                        </div>
                    </div>
                </div>
                <div>
                    <Zaixianliuyan
                        handleCancel={this.uiaction.handleCancel}
                        handleOk={this.uiaction.handleOk}
                        handlevisible={this.uiaction.handlevisible} />
                </div>
                <div style={{ display: this.state.display2 }}>
                    <BusinessListView />
                </div>
            </>

        )
    }

    public handleclick(param: ClickParam) {
        this.setState({
            current: param.key,
        });
        console.log("CLICK", this.state.current);
    }

    private handleshangjiaclick() {
        this.setState({
            display1: "none",
            display2: "block"
        })
    }
    private renderPage(): JSX.Element {
        console.log("已执行:", this.state.current);
        switch (this.state.current) {
            case "0101":
                return <Menuselection />
            case "0201":
                return <FirstRestaurant />
            case "0202":
                return <SecondRestaurant />
            case "020301":
                return <CollegeTown />
            case "020302":
                return <SouthSnack />
            case "0301":
                return <CartManageView />
            case "0302":
                return <OrderManagement />
            case "0401":
                return <MymessageViewa />
            case "0402":
                return <OrderManagementview />
            default:
                return <div />
        }
    }
}