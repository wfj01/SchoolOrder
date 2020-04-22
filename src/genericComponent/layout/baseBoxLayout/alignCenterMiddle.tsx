import * as React from 'react';


interface IAlignCenterMiddleProps {
    className?: string,
    style?: any,
 }
export class AlignCenterMiddle extends React.Component<IAlignCenterMiddleProps> {
    public render() {
        return (
            <div className={this.props.className} style={{display:"flex",justifyContent:"center",alignItems:"center",...this.props.style}}>
            {this.props.children}
            </div>
        )
    }
}