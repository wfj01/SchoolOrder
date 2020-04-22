import * as React from 'react';
import '../gridBox.scss';

interface IVerMiddleProps {
    style?: any;
    className?: any;
    // smallScrollbar?: boolean;
}
interface IVerMiddleState {
    paddingTop?:any;
}

export class VerMiddle extends React.Component<IVerMiddleProps,IVerMiddleState> {
    public render() {
        const { className, style,} = this.props;
        return (
            <div className={`grid-unit middle-part ${className}`} style={style} >{this.props.children}</div>
            // <div className={`grid-unit middle-part ${className}`} style={{style}} paddingTop={this.state.paddingTop?:}>{this.props.children}</div>
        )
    }
}