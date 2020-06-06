import { Button, Card, Col, Icon, Row } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
import { Meta } from 'antd/lib/list/Item';
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
            items.push(
                <Col span={6}>
                    <div style={{ padding: 15, width: 250 }}>
                        <Card
                            style={{ width: 240, height: 280 }}
                            hoverable={true}
                            cover={<img alt="example" src={require("../../../../image/tu5.jpg")} />}
                        >
                            <div style={{ display: "flex", justifyContent: "start" }}>
                                <div>{element.dishname}</div>
                                <div>￥{element.price}</div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "start" }}>
                                <div>菜品评分</div>
                                <div>{element.score}</div>
                            </div>
                            <div style={{ width: "100%", padding: 5, textAlign: "center" }}>
                                <Meta description="选择数量" />
                            </div>
                            <div style={{ width: "100%", padding: 5, textAlign: "center" }}>
                                <ButtonGroup >
                                    <Button href="##" onClick={this.decline} style={{ backgroundColor: "#0080ff" }} >
                                        <Icon type="minus" style={{ color: "#FFF" }} />
                                    </Button>
                                    <Button href="##">{this.state.count}</Button>
                                    <Button href="##" onClick={this.increase} style={{ backgroundColor: "#0080ff" }} >
                                        <Icon type="plus" style={{ color: "#FFF" }} />
                                    </Button>
                                </ButtonGroup>
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


    private increase = () => {
        const count = this.state.count + 1;
        this.setState({ count });
    };

    private decline = () => {
        let count = this.state.count - 1;
        if (count < 0) {
            count = 0;
        }
        this.setState({ count });
    };
}