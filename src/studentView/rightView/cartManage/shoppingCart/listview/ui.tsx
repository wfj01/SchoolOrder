import { Button, Icon, Input, Popover } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { inject, observer } from "mobx-react";
import React from "react";
import { ShoppingCartTableView } from "../table/ui";
import { IShoppingCartViewProps } from "./interface";
import {ShoppingCartViewModel} from './model';
import { ShoppingCartViewUiAction } from "./uiAction";


const content = (
    <div>
        <p style={{fontWeight:"bold" }}>菜品预计所需时间的计算方式为：</p>
        <p><Icon type="clock-circle" style={{ color: '#00BFFF' }} />1~2件：为各自所需时间的总和</p>
        <p><Icon type="clock-circle" style={{ color: '#00BFFF' }} />2件以上：为时间总和的80%</p>
    </div>
);

const content1 = (
    <div>
        <p style={{fontWeight:"bold" }}>菜品所需金额的计算方式为：</p>
        <p><Icon type="clock-circle" style={{ color: '#00BFFF' }} />1~2件：为各自金额的总和</p>
        <p><Icon type="clock-circle" style={{ color: '#00BFFF' }} />2件以上：金额总和的75折</p>
    </div>
);
@inject("GlobalStepsViewDomainStore", "GlobalListViewDoMainStore")
@observer
export class ShoppingCartView extends React.Component<IShoppingCartViewProps>{

    private uiAction: ShoppingCartViewUiAction;

    constructor(props: IShoppingCartViewProps) {
        super(props);
        this.uiAction = new ShoppingCartViewUiAction(props);

    }

    public componentDidMount() {
        this.props.GlobalStepsViewDomainStore!.LoadData();
        this.props.GlobalStepsViewDomainStore!.Loaddata();
    }
    public render() {
        return (
            <div style={{ padding: 8 }}>
                <Button href="##" type="primary" onClick={this.uiAction.Confirmorder}>提交订单</Button>
                <div style={{marginTop:'11px'}}>
                    <div style={{ display: "flex", justifyContent: "start" }}>
                        <div style={{ display: "flex", justifyContent: "start"}}>
                            <div>
                                <label style={{ lineHeight: "32px", width:"80px",display: "block" }}>总金额：</label>
                            </div>
                            <div>
                                <Input disabled={true} style={{ width: "250px" }} value={this.props.GlobalStepsViewDomainStore!.calculatedTimeNumtext} />
                                <Popover content={content1} style={{ color: "#F4A460", fontWeight: 800 }} title="解释说明" trigger="hover">
                                    <Icon type="question-circle" style={{marginLeft:'8px',color:"#1E90FF"}} />
                                </Popover>
                            </div>
                        </div>
                        <div style={{ display: "flex", marginLeft: "20px", justifyContent: "start" }}>
                            <div>
                                <label style={{ lineHeight: "32px",width:"80px", display: "block" }}>所需时间：</label>
                            </div>
                            <div>
                                <Input disabled={true} style={{ width: "250px" }} value={this.props.GlobalStepsViewDomainStore!.calculatedTimeNum} />
                                <Popover content={content} style={{ color: "#F4A460", fontWeight: 800 }} title="解释说明" trigger="hover">
                                    <Icon type="question-circle" style={{marginLeft:'8px',color:"#1E90FF"}} />
                                </Popover>
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop:"15px"}}>
                        <div style={{ display: "flex",justifyContent:'start' }}>
                            <label style={{ width: 80, display: "block" }}>订单详情：</label>
                            <TextArea disabled={true} style={{ width: "250px" }} value={this.props.GlobalStepsViewDomainStore!.calculatedstring} />
                        </div>
                    </div>
                </div>
                <div style={{ padding: 8 }}>
                    <ShoppingCartTableView />
                </div>
                <ShoppingCartViewModel
                    visible={this.props.GlobalStepsViewDomainStore!.ShoppingModelvisible}
                    handleOk={this.uiAction.handleOk}
                    handleCancel={this.uiAction.handleCancel}
                />
            </div>
        )
    }


}