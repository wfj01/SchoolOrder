import { Layout } from "antd";
import { inject, observer } from "mobx-react";
import React from "react";
import { VerThr } from "../../../genericComponent/gridBox/verThr/verThr";
import imgURL from '../../../image/Hongshaorou.jpg';
import { ILastWeekViewProps } from "./interface";
import MiddleFromView from "./middleFrom/ui";
import { TopView } from "./topView/ui";
const { Sider, Content } = Layout;


/**
 * 上周榜单
 */
@inject("GlobalLastWeekDomainStore")
@observer
export class LastWeekView extends React.Component<ILastWeekViewProps>{
    public componentDidMount() {
        this.props.GlobalLastWeekDomainStore!.Loadate();
    }
    public render() {
        return (
            <VerThr>
                <VerThr.top>
                    <TopView />
                </VerThr.top>
                <VerThr.middle>
                    <Layout >
                        <header >菜品信息</header>
                        <Layout>
                            <div style={{ minWidth: "500px" }}>
                                <Sider ><img alt="##" src={imgURL} /></Sider>
                            </div>
                            <Content >
                                {this.props.GlobalLastWeekDomainStore!.List.length > 0
                                    ? <MiddleFromView GlobalLastWeekDomainStore={this.props.GlobalLastWeekDomainStore!} />
                                    : <div>""</div>
                                }
                            </Content>
                        </Layout>
                    </Layout>
                </VerThr.middle>
            </VerThr>
        )
    }
}