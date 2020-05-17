import { Drawer } from "antd";
import { inject, observer } from "mobx-react";
import React from "react";
import FormView from './form/ui';
import { IDrawerViewProps } from "./interface";


@inject("GlobalOrderManagementviewDoMainStore")
@observer
export class DrawerView extends React.Component<IDrawerViewProps>{

    constructor(props: IDrawerViewProps) {
        super(props);
    }

    public render() {
        console.log("this.props.GlobalOrderManagementviewDoMainStore!.List.length：", this.props.GlobalOrderManagementviewDoMainStore!.allReportTableData.length)
        return (
            <Drawer
                title="Create a new account"
                width={500}
                onClose={this.props.onClose}
                visible={this.props.visible}
            >

                {this.props.GlobalOrderManagementviewDoMainStore!.allReportTableData.length > 0
                    ?
                    <FormView
                        GlobalOrderManagementviewDoMainStore={this.props.GlobalOrderManagementviewDoMainStore!} />
                    : <div>""</div>}
            </Drawer>
        )
    }
}