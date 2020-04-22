
import { Button, Layout } from 'antd';
// import { TadayRecommendUiAction } from './uiAction';
import { inject, observer } from 'mobx-react';
import React from 'react';
import imgURL from '../../../image/Hongshaorou.jpg';
import { ITadayRecommendProps } from './interface';
import MiddleFromView from './middleFrom/ui';
import { TadayRecommendUiAction } from './uiAction';
const { Footer, Sider, Content } = Layout;


/**
 * 推荐菜
 */
@inject("GlobalTadayRecommendDomainStore")
@observer
export class TadayRecommend extends React.Component<ITadayRecommendProps>{
  private uiAction: TadayRecommendUiAction;
 
  constructor(props: ITadayRecommendProps) {
    super(props);
    this.uiAction = new TadayRecommendUiAction(props);
  }
  public componentDidMount() {
    this.props.GlobalTadayRecommendDomainStore!.Loadate();
  }
  public render() {
    return (
      <Layout >
        <header >菜品信息</header>
        <Layout>
          <div style={{ minWidth: "500px" }}>
            <Sider ><img alt="##" src={imgURL} /></Sider>
          </div>
          <Content >
            {this.props.GlobalTadayRecommendDomainStore!.List.length > 0
              ? <MiddleFromView GlobalTadayRecommendDomainStore={this.props.GlobalTadayRecommendDomainStore!} />
              : <div>""</div>}
          </Content>
        </Layout>
        <Footer style={{ textAlign: "right", paddingRight: "12px" }}>
          <Button onClick={this.uiAction.NextClick}>下一页</Button>
          <Button onClick={this.uiAction.LastClick}>上一页</Button>
        </Footer>
      </Layout>
    )
  }
}