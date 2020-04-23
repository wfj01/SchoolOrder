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

    public componentDidMount() {
        this.props.GlobalManageGoodsDomainStore!.loaddata();
    }
    public render() {
        console.log("this.props.GlobalManageGoodsDomainStore!.List.length：", this.props.GlobalManageGoodsDomainStore!.List.length)
        return (
            <Drawer
                title="Create a new account"
                width={720}
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