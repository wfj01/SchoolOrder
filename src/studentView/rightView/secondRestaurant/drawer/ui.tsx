import { Drawer } from "antd";
import { inject, observer } from "mobx-react";
import React from "react";
import FormView from './form/ui';
import { IDrawerViewProps } from "./interface";


@inject("GlobalSecondDoMainStore")
@observer
export class DrawerView extends React.Component<IDrawerViewProps>{


    constructor(props: IDrawerViewProps) {
        super(props);
    }
    public render() {
        return (
            <Drawer
                title="查看详情"
                width={450}
                onClose={this.props.onClose}
                visible={this.props.visible}
            >
                {this.props.GlobalSecondDoMainStore!.allReportTableData.length > 0
                    ?
                    <FormView
                    GlobalSecondDoMainStore={this.props.GlobalSecondDoMainStore!} />
                    : <div>""</div>}
            </Drawer>
        )
    }
}