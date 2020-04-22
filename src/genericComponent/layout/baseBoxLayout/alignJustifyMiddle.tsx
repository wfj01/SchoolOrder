import * as React from 'react';


interface IAlignJustifyMiddleProps {
    className?: string,
    style?: any,
 }
export class AlignJustifyMiddle extends React.Component<IAlignJustifyMiddleProps> {
    public render() {
        return (
            <div className={this.props.className} style={{display:"flex",justifyContent:"space-between",alignItems:"center",...this.props.style}}>
            {this.props.children}
            </div>
        )
    }
}