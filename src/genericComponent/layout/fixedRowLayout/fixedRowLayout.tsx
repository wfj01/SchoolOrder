// import { Col, } from 'antd';
import * as React from 'react';
import './fixedRowLayout.scss';


// type bottomDivInfo = "bottom-box" | "bottom-box-fixed" | '';

interface IFixedRowLayoutProps {
    className?: any;
    style?: any;
    // height?: string;
    fixedToTop?: React.ReactNode;
    // fixedTop?: boolean;
    top?: React.ReactNode;
    middle?: React.ReactNode;
    bottomLeft?: React.ReactNode;
    bottomRight?: React.ReactNode;
}
interface IFixedRowLayoutState {
    fixedBottomVisible: boolean;
    fixedBottomBValue: boolean;
    // bottomDivClass: bottomDivInfo;
    fixedTopTopDisplay: string;
    bottomDivWidth: number;
    // topContentWidth: number;
    fixedTopDisplay: string;
    topDisplay: string;

}




export class FixedRowLayout extends React.Component<IFixedRowLayoutProps, IFixedRowLayoutState>{

    public state: IFixedRowLayoutState = {
        fixedBottomVisible: false,
        fixedBottomBValue: false,
        fixedTopTopDisplay: 'none',
        fixedTopDisplay: "none",
        bottomDivWidth: 1000,
        // topContentWidth: 100,
        topDisplay: 'none',
    }

    private containerDiv = React.createRef<HTMLDivElement>()
    private containerDiv1 = React.createRef<HTMLDivElement>()

    public componentDidMount() {
        if (!this.containerDiv.current) {
            return;
        }

        this.changeClass();

        window.addEventListener('resize', this.changeClass)

    }

    public componentWillUnmount() {
        window.removeEventListener('resize', this.changeClass)
    }

    public render() {
        // const { fixedTop = false } = this.props;
        return (
            <>
                {/* <div style={{ height: `${this.props.height}`, ...this.props.style }} className={"orid-fixedRowLayout-container"}> */}
                {/* <div className="fixed-to-top" style={{ display: this.state.fixedTopTopDisplay, width: `${this.state.bottomDivWidth}px ` }} >
                        {this.props.fixedToTop}
                    </div> */}
                {/* <div
                        className={`fixed-top-box  ${this.props.className}`}
                        style={{ display: fixedTop ? this.state.fixedTopDisplay : "none", width: `${this.state.bottomDivWidth}px `, ...this.props.style }}
                    >
                        {this.props.top}
                    </div> */}
                <div
                    className={`ori-fixedRowLayout-container ${this.props.className}`}
                    // style={{ height: `${this.props.height}`, ...this.props.style }}
                    id="aaa"
                    ref={this.containerDiv1}
                    onScroll={this.changeTableHeader}
                >

                    <div
                        className={this.state.fixedBottomVisible ? "ori-fixedRowLayout-content ori-fixed-bottom-content" : "ori-fixedRowLayout-content"}
                        ref={this.containerDiv}

                        id="aa"
                    >
                        <div className="fixed-top" style={{ display: this.state.topDisplay, width: this.state.fixedBottomVisible ? `${this.state.bottomDivWidth}px` : "" }}>
                            {this.props.fixedToTop}
                        </div>
                        <div className={"top-box"} style={{}}>
                            {this.props.top}
                        </div>
                        <div className={this.state.fixedTopDisplay} style={this.props.style}>
                            {this.props.middle}
                        </div>
                        <div className={this.state.fixedBottomVisible ? "bottom-fixed-box" : "bottom-box"} style={{ width: this.state.fixedBottomVisible ? `${this.state.bottomDivWidth}px` : "" }}>
                            <div className="bottom-left">
                                {this.props.bottomLeft}

                            </div>
                            <div className="bottom-right">
                                {this.props.bottomRight}
                            </div>

                        </div>
                    </div>
                </div>
                {/* <div className="fixed-to-bottom" style={{ width: `${this.state.bottomDivWidth}px`, display: this.state.fixedBottomVisible ? '' : 'none', bottom: this.state.fixedBottomBValue ? '' : '17px' }}>
                        <div className="bottom-left">
                            {this.props.bottomLeft}

                        </div>
                        <div className="bottom-right">
                            {this.props.bottomRight}
                        </div>

                    </div> */}
                {/* </div> */}
            </>
        )
    }

    private changeClass = () => {
        let fixedBottomVisible: boolean;
        // let fixedBottomBValue: boolean;
        let bottomDivWidth: number;

        const containerDivCurrent = this.containerDiv.current;
        if (!containerDivCurrent) {
            return;
        }
        if (
            containerDivCurrent.clientHeight >= containerDivCurrent.scrollHeight
        ) {
            fixedBottomVisible = false;
        }
        else {
            fixedBottomVisible = true;
        }

        // fixedBottomBValue = containerDivCurrent.clientWidth === containerDivCurrent.scrollWidth
        bottomDivWidth = containerDivCurrent.clientWidth;
        this.setState({
            fixedBottomVisible,
            // fixedBottomBValue,
            bottomDivWidth,
        },
        )
    }

    private changeTableHeader = () => {
        // let fixedTopTopDisplay: string;
        let fixedTopDisplay: string;
        let topDisplay: string;

        const containerDivCurrent1 = this.containerDiv1.current;
        if (!containerDivCurrent1) {
            return;
        }
        // fixedTopTopDisplay = containerDivCurrent.scrollTop > 79 ? '' : "none";
        fixedTopDisplay = containerDivCurrent1.scrollTop > 37 ? 'middle-box hide-table-header' : "middle-box";
        topDisplay = containerDivCurrent1.scrollTop > 37 ? '' : "none";
        this.setState({
            // fixedTopTopDisplay,
            fixedTopDisplay,
            topDisplay
        })
    }
}


