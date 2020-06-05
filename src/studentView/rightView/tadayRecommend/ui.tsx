// import { TadayRecommendUiAction } from './uiAction';
import { Icon, Menu } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { VerThr } from '../../../genericComponent/gridBox/verThr/verThr';
import { LastWeekView } from './lastweekView/ui';
import { ITadayRecommendProps } from './listview/interface';
import { TadayRecommend } from './listview/ui';
// import { TadayRecommendUiAction } from './uiAction';

interface ITadayRecommendState {
  count: number,
  lengths: string,
  display1: string,
  display2: string,
  current: string,
}
/**
 * 推荐菜
 */
@inject("GlobalTadayRecommendDomainStore","GlobalLastWeekDomainStore")
@observer
export class Menuselection extends React.Component<ITadayRecommendProps, ITadayRecommendState>{
  // private uiAction: TadayRecommendUiAction;

  constructor(props: ITadayRecommendProps) {
    super(props);
    this.state = {
      count: 1,
      lengths: "0",
      display1: 'block',
      display2: 'none',
      current: '0'
    }
    this.handleClick = this.handleClick.bind(this);
    this.handlepage = this.handlepage.bind(this);
    // this.uiAction = new TadayRecommendUiAction(props);
  }
  public componentDidMount() {
    this.props.GlobalTadayRecommendDomainStore!.Loadate();
    this.props.GlobalLastWeekDomainStore!.Loadate();
  }
  public render() {
    return (
      <>
        <VerThr>
          <VerThr.top>
            <Menu onClick={this.handleClick} mode="horizontal" defaultSelectedKeys={["0"]}>
              <Menu.Item key="0">
                <Icon type="mail" />
                        今日推荐菜
                </Menu.Item>
              <Menu.Item key="1">
                <Icon type="appstore" style={{marginLeft:"30px"}}/>
                        榜单
                </Menu.Item>
            </Menu>
          </VerThr.top>
          <VerThr.middle >
            {this.handlepage()}
          </VerThr.middle>
        </VerThr>
      </>
    )
  }

  private handlepage() {
    console.log("已执行:", this.state.current);
    switch (this.state.current) {
      case "0":
        return <TadayRecommend />
      case "1":
        return <LastWeekView />
      default:
        return <div />
    }
  }


  private handleClick(param: ClickParam) {
    this.setState({
      current: param.key,
    });
    console.log("CLICK", this.state.current);
  };
}