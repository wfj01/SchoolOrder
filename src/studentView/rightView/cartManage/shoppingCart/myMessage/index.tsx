import { inject, observer } from "mobx-react";
import React from "react";
import { MymessageViewDomainStoress } from "./doMainStore";
import MymessageView from './ui';

interface IMymessageViewaProps {
    GlobalMymessageViewStoress?: MymessageViewDomainStoress;
}

@inject("GlobalMymessageViewStoress")
@observer
export class MymessageViewa extends React.Component<IMymessageViewaProps> {

    public componentDidMount() {
        this.props.GlobalMymessageViewStoress!.LoadData();
    }
    public render() {
        console.log("dahgfsajknfakjda")
        return (
            <>
                {this.props.GlobalMymessageViewStoress!.allReportTableData.length > 0
                ?<MymessageView GlobalMymessageViewStoress={this.props.GlobalMymessageViewStoress!} />
                :<></>}
            </>
        )
    }
}