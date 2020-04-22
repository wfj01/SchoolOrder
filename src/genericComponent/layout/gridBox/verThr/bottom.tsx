import * as React from 'react';
import '../gridBox.scss';

interface IVerBottomProps {
    style?: any;
    className?: any;
    // smallScrollbar?: boolean;
}
export class VerBottom extends React.Component<IVerBottomProps> {
    public render() {
        const { className, style,} = this.props;
        return (
            <div className={`grid-unit bottom-part ${className}`} style={style}>{this.props.children}</div>
        )
    }
}