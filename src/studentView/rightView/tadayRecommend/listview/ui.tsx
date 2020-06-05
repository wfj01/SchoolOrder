import { Button, Card, Col, Icon, Row } from 'antd';
import { inject, observer } from 'mobx-react';
import React from "react";
import './index.css';
import { ITadayRecommendProps } from "./interface";
import { TadayRecommendUiAction } from './uiAction';

interface ITadayRecommendState {
    count: number
}

@inject("GlobalTadayRecommendDomainStore")
@observer
export class TadayRecommend extends React.Component<ITadayRecommendProps, ITadayRecommendState>{

    private uiAction: TadayRecommendUiAction;


    constructor(props: ITadayRecommendProps) {
        super(props);
        this.state = {
            count: 1,
        }
        this.uiAction = new TadayRecommendUiAction(props);
    }
    public componentDidMount() {
        this.props.GlobalTadayRecommendDomainStore!.Loadate();
    }
    public render() {
        const items = [];
        const aaa = this.props.GlobalTadayRecommendDomainStore!.List;
        for (const element of aaa) {
            const imagrsrc = element.imageSrc;
            items.push(
                <Col span={6}>
                    <div style={{ padding: 15, width: 250 }}>
                        <Card
                            style={{ width: 240, height: 280 }}
                            hoverable={true}
                            loading={this.props.GlobalTadayRecommendDomainStore!.Isloading}
                            cover={<div style={{marginTop:'10px',display: "flex", justifyContent: "center", alignItems: "center" }}><img style={{ width: "100px", height: "100px" }} alt="example" src={require("../../../../image" + imagrsrc)} /></div>}
                        >
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div>{element.dishname}</div>
                                <div style={{ fontWeight: 400, color: "#0033FF" }}>￥{element.price}</div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div>菜品评分</div>
                                <div style={{ fontWeight: 400, color: "#0033FF" }}>{element.score}分</div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div>选择数量</div>
                                <div style={{ fontWeight: 400, color: "#0033FF" }}>{element.number}</div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div>点评</div>
                                <div style={{ fontWeight: 400, color: "#0033FF" }}>{element.remarks}</div>
                            </div>
                            <div style={{ width: "100%", padding: "7 10 10 10", textAlign: "center", background: "#FFF" }}>
                                <Button href="##" style={{ borderRadius: 10, backgroundColor: '#ff0000', color: '#FFF', opacity: 0.6, }} onClick={this.uiAction.handleOnClick}><Icon type="shopping-cart" />加入购物车</Button>
                            </div>
                        </Card>
                    </div>
                </Col>
            )

        }
        return (
            <Row >
                {items}
            </Row>
        )
    }
}