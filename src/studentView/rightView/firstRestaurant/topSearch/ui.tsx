import { Button, Input } from 'antd';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { ITopSearchViewProps } from './interface';
import { TopSearchUiAction } from './uiAction';


/**
 * 第一餐厅-顶部查询功能
 */
@inject("GlobalFirstDoMainStore","GlobalListViewDoMainStore")
@observer
export class TopSearchView extends React.Component<ITopSearchViewProps> {

    private uiAction:TopSearchUiAction;
    constructor(props: ITopSearchViewProps) {
        super(props);
        this.uiAction = new TopSearchUiAction(props);
    }
    public render() {
        return (
            <>
                <div style={{ float: "left" }}>
                    <label style={{ float: 'left', textAlign: 'center', marginTop: '3px', fontSize: '15px' }}>价格:</label>
                    <Input.Group style={{ float: 'left', width: '250px' }}>
                        <Input
                            style={{ width: 110, textAlign: 'center', float: "left" }}
                            placeholder="开始"
                            onChange={this.uiAction.handleStartPrice}
                        />
                        <Input
                            disabled={true}
                            style={{
                                width: 30,
                                borderLeft: 0,
                                pointerEvents: 'none',
                                backgroundColor: '#fff',
                            }}
                            placeholder="~"
                        />
                        <Input
                            style={{ width: 110, textAlign: 'center', borderLeft: 0, float: "left" }}
                            placeholder="结束" 
                            onChange={this.uiAction.handleEndPrice}
                            />
                    </Input.Group>
                </div>
                <div style={{ float: "left", marginLeft: '20px' }}>
                    <label style={{ float: 'left', textAlign: 'center', marginTop: '3px', fontSize: '15px' }}>菜名:</label>
                    <Input style={{ width: 110, float: "left" }} onChange={this.uiAction.handleDishname} />
                </div>
                <div style={{ float: "left", marginLeft: '20px' }}>
                    <Button type="primary" style={{ float: "left", marginLeft: '10px' }} onClick={this.uiAction.onClickSearch}>查询</Button>
                </div>
                <div style={{ float: "right", marginRight: '20px' }}>
                    <Button type="primary" style={{ float: "left", marginLeft: '10px' }} onClick={this.uiAction.onClickSave}>保存</Button>
                </div>
            </>
        )
    }



}
