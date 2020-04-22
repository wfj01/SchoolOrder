import * as React from 'react';
import '../gridBox.scss';
import { HorLeft } from './left';
import { HorRight } from './right';

interface IHorTwoProps {
    style?: any;
    className?: any;
}
export class HorTwo extends React.Component<IHorTwoProps, any> {
    public static left: typeof HorLeft = HorLeft;
    public static right: typeof HorRight = HorRight; 
    public render() {
         return(
            <div className={`hor-two ${this.props.className}`} style={this.props.style}>{this.props.children}</div>
         )
     }
}
