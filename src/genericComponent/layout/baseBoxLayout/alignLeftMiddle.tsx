import * as React from 'react';


interface IAlignLeftMiddleProps {
    className?: string,
    style?: any,
 }
export class AlignLeftMiddle extends React.Component<IAlignLeftMiddleProps> {
    public render() {
        return (
            <div className={this.props.className} style={{display:"flex",alignItems:"center",...this.props.style}}>
            {this.props.children}
            </div>
        )
    }
}