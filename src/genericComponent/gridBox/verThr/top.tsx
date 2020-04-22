import * as React from 'react';
import '../gridBox.scss';

interface IVerTopProps {
    style?: any;
    className?: any;
    smallScrollbar?: boolean;
}
export class VerTop extends React.Component<IVerTopProps> {
    
    public render() {
        const { className, style,  } = this.props;
        return (
            // <div className={`grid-unit top-part ${className}`} style={style}>{this.props.children}</div>
            <div className={`grid-unit top-part ${className}`} style={style}>{this.props.children}</div>
        )
    }
}