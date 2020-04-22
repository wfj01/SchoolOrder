import { Drawer } from "antd";
import { inject, observer } from "mobx-react";
import React from "react";
import FormView from './form/ui';
import { IDrawerViewProps } from "./interface";


@inject("GlobalFirstDoMainStore")
@observer
export class DrawerView extends React.Component<IDrawerViewProps>{


    constructor(props: IDrawerViewProps) {
        super(props);
    }
    public render() {
        return (
            <Drawer
                title="Create a new account"
                width={720}
                onClose={this.props.onClose}
                visible={this.props.visible}
            >
                {this.props.GlobalFirstDoMainStore!.allReportTableData.length > 0
                    ?
                    <FormView
                    GlobalFirstDoMainStore={this.props.GlobalFirstDoMainStore!} />
                    : <div>""</div>}
            </Drawer>
        )
    }
}