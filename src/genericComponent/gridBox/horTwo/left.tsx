import * as React from 'react';
import '../gridBox.scss';

interface IHorLeftProps {
    style?: any;
    className?: any;
    width?: string ;
    /*  **是否用小滚动条样式**** */
    smallScrollbar?: boolean;
    /* 是否有收缩功能（默认false）**/
    shrink?: boolean;
    /* 是否默认展开（默认是true）**/
    collapsed?: boolean;
}
interface IHorLeftState {
    // 是否展开
    isShow: boolean;
}
export class HorLeft extends React.Component<IHorLeftProps, IHorLeftState> {
    public state = {
        isShow: this.props.collapsed === false ? false : true
    }

    public render() {
        const {
            className,
            style,
            width="250px",
            smallScrollbar = true,
            shrink = false,
        } = this.props;
        return (
            <>
                <div
                    className={`grid-unit left-part ${smallScrollbar ? 'ori-small-scrollbar' : ''} ${className}`}
                    style={{ width: `${width}`, display:this.state.isShow? "":"none",...style }}
                >
                    {this.props.children}                  
                </div>
                <div 
                    className={this.state.isShow?"ori-hortwo-left-collapse":"ori-hortwo-left-expand"} 
                    style={{ display: shrink ? "" : "none",left:this.state.isShow? `calc(${width} - 12px)`:"0" }}
                    onClick={this.toggleIsShow} 
                >
                    {this.state.isShow?"left":"right"}
                </div>

            </>


        )
    }

    private toggleIsShow = () => {
        this.setState({ isShow: !this.state.isShow },()=>{setTimeout(() => { window.dispatchEvent(new Event('resize')) }, 0)})
    }
}