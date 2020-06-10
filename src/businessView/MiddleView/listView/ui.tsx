import { Menu } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import React from 'react';
import { VerThr } from '../../../genericComponent/gridBox/verThr/verThr';
import { CustomerList } from '../customerList/ui';
import { ManageGoodsView } from '../manageGoods/listView/ui';
import { OnlineOrderView } from '../onlineOrder/ui';
import { Personaldata } from '../personaldata/ui';
import { StudentList } from '../studentlist/ui';

const { SubMenu } = Menu;

interface IBussinessViewState {
    current: string;
}
/**
 * 商家视图
 */
export class BussinessView extends React.Component<any, IBussinessViewState> {
    constructor(props: any) {
        super(props);
        this.state = {
            current: '02',
        };
        this.MiddleView = this.MiddleView.bind(this);
        this.handleclick = this.handleclick.bind(this);
    }


    public render() {
        return (
            <VerThr>
                <VerThr.top>
                    <Menu selectedKeys={[this.state.current]} mode="horizontal" theme="dark" onClick={this.handleclick}>
                        
                        <Menu.Item key="02">
                            管理商品
                        </Menu.Item>
                        <Menu.Item key="03">
                            在线订单
                        </Menu.Item>
                        <Menu.Item key="06">
                            当前操作员信息
                        </Menu.Item>
                        {/* <Menu.Item key="04">
                            条例规范
                        </Menu.Item> */}
                        <SubMenu

                            title={
                                <span className="submenu-title-wrapper">
                                    个人信息
                        </span>
                            }>
                            <Menu.ItemGroup title="个人信息">
                                <Menu.Item key="0501">管理员(卖家)信息</Menu.Item>
                                <Menu.Item key="0502">买家信息</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                    </Menu>
                </VerThr.top>
                <VerThr.middle>
                    {this.MiddleView()}
                </VerThr.middle>
            </VerThr>
        );
    }

    public MiddleView(): JSX.Element {
        console.log("this.state.current:", this.state.current)
        switch (this.state.current) {
            case "03":
                return <OnlineOrderView />
            // case "04":
            //     return <RulesView />
            case '0501':
                return <CustomerList  />
            case '0502':
                return <StudentList/>
            case "06":
                return <Personaldata />
            case "02":
                    return <ManageGoodsView />
            default:
                return <div />
        }
    }

    public handleclick(param: ClickParam) {
        this.setState({
            current: param.key,
        });
        console.log("CLICK", this.state.current);
    }
}