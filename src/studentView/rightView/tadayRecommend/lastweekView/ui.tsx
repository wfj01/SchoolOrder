import { Layout } from "antd";
import { inject, observer } from "mobx-react";
import React from "react";
import { VerThr } from "../../../../genericComponent/gridBox/verThr/verThr";
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
    public render() {
        const lengths = this.props.GlobalLastWeekDomainStore!.lengths;
        const text = this.props.GlobalLastWeekDomainStore!.aaa[lengths];
        console.log("texttexttexttexttext,",text)
        return (
            <VerThr>
                <VerThr.top>
                    <TopView />
                </VerThr.top>
                <VerThr.middle>
                    <Layout style={{height:"600px"}}>
                        <header style={{fontSize:"28px",color:"#000",textAlign:"center",marginBottom:"15px",fontFamily:"KaiTi_GB2312"}}>菜品信息</header>
                        <Layout style={{height:"350px"}}>
                            <div style={{ width: "500px",height:"370px"}}>
                                <Sider style={{ width: "500px",height:"370px"}}><img style={{ width: "500px",height:"370px"}} alt="##" src={this.props.GlobalLastWeekDomainStore!.imageUrl} /></Sider>
                            </div>
                            <Content style={{ height:"400px"}}>
                                {this.props.GlobalLastWeekDomainStore!.List.length > 0
                                    ? <MiddleFromView GlobalLastWeekDomainStore={this.props.GlobalLastWeekDomainStore!} />
                                    : <div>""</div>
                                }
                            </Content>
                        </Layout>
                        <Layout style={{padding:'20px'}}>
                            <label style={{fontSize:" 30px",fontWeight: 400,color:" #FFC125",marginTop:"20px"}}>做法：</label>
                            <div style={{marginTop:"15px",fontSize:'20px',fontFamily:"KaiTi",height:"100px"}} >{text}</div>
                        </Layout>
                    </Layout>
                </VerThr.middle>
            </VerThr>
        )
    }
}