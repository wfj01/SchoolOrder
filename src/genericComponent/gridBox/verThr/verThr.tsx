// import { Button } from 'antd';
import * as React from 'react';
import '../gridBox.scss';
import { VerBottom } from './bottom';
import { VerMiddle } from './middle';
import { VerTop } from './top';


interface IVerThrState {
    collapsed: boolean;
}

interface IVerThrProps {
    style?: any;
    className?: any;
}

export class VerThr extends React.Component<IVerThrProps, IVerThrState> {
    public static top: typeof VerTop = VerTop;
    public static middle: typeof VerMiddle = VerMiddle;
    public static bottom: typeof VerBottom = VerBottom;
    constructor(props: IVerThrProps) {
        super(props);
        this.state = {
            collapsed: false,
        }
    }
    
    public render() {
        return(
            <>
            <div className={`ver-thr ${this.props.className}`} style={this.props.style}>{/*<Button className={"trigger"} onClick={this.onClickHandleCollapse}>切换状态</Button>*/}{this.props.children}</div>
            </>
        )
    }
    // private onClickHandleCollapse = () => {
    //    this.setState({
    //        collapsed: !this.state.collapsed
    //   })
    // }
}
