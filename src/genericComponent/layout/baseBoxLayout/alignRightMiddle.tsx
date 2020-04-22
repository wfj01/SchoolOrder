import * as React from 'react';

interface IAlignRightMiddleProps {
   className ?: string,
   style?: any,
}


export class AlignRightMiddle extends React.Component<IAlignRightMiddleProps> {
    public render() {
        return (
            <div className={this.props.className} style={{display:"flex",justifyContent:"flex-end",alignItems:"center",...this.props.style}}>
                {this.props.children}
            </div>
        )
    }
}