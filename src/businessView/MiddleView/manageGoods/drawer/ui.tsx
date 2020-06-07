import { Drawer } from "antd";
import { inject, observer } from "mobx-react";
import React from "react";
import FormView from './form/ui';
import { IDrawerViewProps } from "./interface";


@inject("GlobalManageGoodsDomainStore")
@observer
export class DrawerView extends React.Component<IDrawerViewProps>{

    constructor(props: IDrawerViewProps) {
        super(props);
    }

    public render() {
        console.log("this.props.GlobalManageGoodsDomainStore!.List.length：", this.props.GlobalManageGoodsDomainStore!.List.length)
        return (
            <Drawer
                title="菜品详情"
                width={450}
                onClose={this.props.onClose}
                visible={this.props.visible}
            >

                {this.props.GlobalManageGoodsDomainStore!.List.length > 0
                    ?
                    <FormView
                        GlobalManageGoodsDomainStore={this.props.GlobalManageGoodsDomainStore!} />
                    : <div>""</div>}
            </Drawer>
        )
    }
}