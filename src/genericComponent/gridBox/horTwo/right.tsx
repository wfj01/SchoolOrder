import * as React from 'react';
import '../gridBox.scss';

interface IHorRightProps {
    style?: any;
    className?: any;
    smallScrollbar?: boolean;
}
export class HorRight extends React.Component<IHorRightProps> {
    
    public render() {
        const { className, style, smallScrollbar = false} = this.props;
        return (
            <div className={`grid-unit right-part ${smallScrollbar ? 'ori-small-scrollbar' : ''} ${className}`} style={style}>
            {this.props.children}
            </div>
        )
    }
}