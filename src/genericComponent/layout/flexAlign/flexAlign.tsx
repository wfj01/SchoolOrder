import * as React from 'react';
import './flexAlign.scss';

interface IFlexAlignProps {
    className?: string,
    style?: React.CSSProperties,
    direction?: "row" | "column" | "column-reverse" | "row-reverse",
    xAlign?: string,
    yAlign?: string,
}
export class FlexAlign extends React.Component<IFlexAlignProps> {
    public render() {

        const {
            direction = "row",
            className,
            style
        } = this.props

        return (
            <div
                className={this.changeClass() + ' ' + className}
                style={{
                    flexDirection: direction,
                    justifyContent: this.getJustifyContent(),
                    alignItems: this.getAlignItems(),
                    ...style
                }}
            >
                {this.props.children}
            </div>
        )
    }

    private changeClass = () => {
        const { direction = "row", } = this.props

        if (direction === "row") {
            return "ori-flexalign"
        }
        else {
            return "ori-flexaligny"
        }
    }

    private getJustifyContent = () => {

        const {
            direction = "row",
            xAlign = "left",
            yAlign = "middle",
        } = this.props

        if (direction === "row") {
            if (xAlign === 'left') {
                return 'flex-start';
            }
            if (xAlign === "center") {
                return "center"
            }
            if (xAlign === "right") {
                return "flex-end"
            }
            if (xAlign === "between") {
                return "space-between"
            }
            if (xAlign === "around") {
                return "space-around"
            } else {
                return 'flex-start';
            }

        }

        if (direction === "column") {
            if (yAlign === "top") {
                return "flex-start"
            }
            if (yAlign === "middle") {
                return "center"
            }
            if (yAlign === "bottom") {
                return "flex-end"
            }
            if (yAlign === "between") {
                return "space-between"
            }
            if (yAlign === "around") {
                return "space-around"
            } else {
                return "flex-start"
            }
        } else {
            return "center"
        }
    }
    private getAlignItems = () => {

        const {
            direction = "row",
            xAlign = "left",
            yAlign = "middle",
        } = this.props

        if (direction === "row") {
            if (yAlign === "top") {
                return "flex-start"
            }
            if (yAlign === "middle") {
                return "center"
            }
            if (yAlign === "bottom") {
                return "flex-end"
            } else {
                return "center"
            }
        }

        if (direction === "column") {
            if (xAlign === 'left') {
                return 'flex-start';
            }
            if (xAlign === "center") {
                return "center"
            }
            if (xAlign === "right") {
                return "flex-end"
            } else {
                return "flex-start"
            }
        } else {
            return "flex-start"
        }
    }


}