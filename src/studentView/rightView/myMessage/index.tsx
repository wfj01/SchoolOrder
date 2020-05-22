import { inject, observer } from "mobx-react";
import React from "react";
import { MymessageViewDomainStores } from "./doMainStore";
import MymessageView from './ui';

interface IMymessageViewaProps {
    GlobalMymessageViewStores?: MymessageViewDomainStores;
}

@inject("GlobalMymessageViewStores")
@observer
export class MymessageViewa extends React.Component<IMymessageViewaProps> {

    public componentDidMount() {
        this.props.GlobalMymessageViewStores!.LoadData();
    }
    public render() {
        console.log("dahgfsajknfakjda")
        return (
            <>
                {this.props.GlobalMymessageViewStores!.allReportTableData.length > 0
                ?<MymessageView GlobalMymessageViewStores={this.props.GlobalMymessageViewStores!} />
                :<></>}
            </>
        )
    }
}