import { Drawer } from "antd";
import { inject, observer } from "mobx-react";
import React from "react";
import FormView from './form/ui';
import { IDrawerViewProps } from "./interface";


@inject("GlobalSouthSnackDoMainStore")
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
                {this.props.GlobalSouthSnackDoMainStore!.allReportTableData.length > 0
                    ?
                    <FormView
                    GlobalSouthSnackDoMainStore={this.props.GlobalSouthSnackDoMainStore!} />
                    : <div>""</div>}
            </Drawer>
        )
    }
}