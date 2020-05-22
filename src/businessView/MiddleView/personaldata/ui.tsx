import { inject, observer } from "mobx-react";
import React from "react";
import { PersonaldataDoMainStore } from "./domainStore";
import MiddleFromView from './middleFrom/ui';


export interface IPersonaldataProps{
    GlobalPersonaldataDoMainStore?:PersonaldataDoMainStore;
}
@inject("GlobalPersonaldataDoMainStore")
@observer
export class Personaldata extends React.Component <IPersonaldataProps>{

    public componentDidMount(){
        this.props.GlobalPersonaldataDoMainStore!.loaddata();
    }

    public render() {
        return (
            <>
            {this.props.GlobalPersonaldataDoMainStore!.List.length>0
                ?<MiddleFromView GlobalPersonaldataDoMainStore={this.props.GlobalPersonaldataDoMainStore!}/>
                :<>""</>}
            </>
        )
    }
}